#!/usr/bin/env python3
"""Adds the publish that just went live to the "Latest publishes" table in README.md.

Run by the Publish site workflow after a successful deploy. Keeps the newest 3 rows; a commit that is
already listed (a manual re-run) is not added twice. Times are the push (commit) time, shown in
UAE time and UTC.
"""
import datetime, os, re, subprocess, sys

KEEP = 3
START, END = '<!-- latest-publishes:start -->', '<!-- latest-publishes:end -->'
UAE = datetime.timezone(datetime.timedelta(hours=4), 'UAE')
REPO = os.environ.get('GITHUB_REPOSITORY', 'jerrin-v/my-agent-hq')
root = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
readme = os.path.join(root, 'README.md')

git = lambda *a: subprocess.check_output(['git', '-C', root, *a], text=True).strip()
sha = os.environ.get('GITHUB_SHA') or git('rev-parse', 'HEAD')
subject = git('log', '-1', '--format=%s', sha)
when = datetime.datetime.fromisoformat(git('log', '-1', '--format=%cI', sha))

def build_line(key):
    try: lines = git('show', f'{sha}:backup/BUILD.txt').splitlines()
    except subprocess.CalledProcessError: return ''
    for line in lines:
        if line.startswith(key + ':'): return line.split(':', 1)[1].strip()
    return ''

version = (re.search(r'v\d+(?:\.\d+)+', build_line('app')) or [''])[0]
if subject.startswith('Refresh site snapshot'): change = 'Chat sync: new floor snapshot'
else: change = re.sub(r'^Publish (v[\d.]+): ', '', subject)
change = change.replace('|', '\\|')

fmt = lambda d: d.strftime('%a %d %b %Y, ') + d.strftime('%I:%M:%S %p').lstrip('0')  # 12-hour with AM/PM
row = (f'| {fmt(when.astimezone(UAE))} UAE<br><sub>{fmt(when.astimezone(datetime.timezone.utc))} UTC</sub> '
       f'| {change} | {version} | [`{sha[:7]}`](https://github.com/{REPO}/commit/{sha}) |')
head = ['| Pushed | Change | Version | Commit |', '| --- | --- | --- | --- |']

text = open(readme, encoding='utf-8').read()
if START not in text or END not in text:
    print('README.md has no latest-publishes markers; nothing to do.'); sys.exit(0)
before, rest = text.split(START, 1)
block, after = rest.split(END, 1)
rows = [l for l in block.splitlines() if l.startswith('| ') and not l.startswith('| Pushed') and not l.startswith('| ---')]
if any(f'/commit/{sha})' in r for r in rows):
    print('Already listed:', sha[:7]); sys.exit(0)
rows = [row] + rows[:KEEP - 1]
new = before + START + '\n' + '\n'.join(head + rows) + '\n' + END + after
open(readme, 'w', encoding='utf-8').write(new)
print('Listed', sha[:7], change)
