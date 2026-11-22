#!/bin/bash
# Installed on yycore as the deploy key's forced command. Always fetch current main.
set -euo pipefail
root=/var/www/neverland
website_id=d08fc369-02dd-4839-945c-5cdfb8a24823
exec 9>"$root/publish.lock"
flock -w 180 9
work=$(mktemp -d "$root/.build.XXXXXXXX")
trap 'rm -rf -- "$work"' EXIT

git -C "$work" init -q
git -C "$work" fetch -q --depth=1 https://github.com/yaobii-lab/are-u-human.git refs/heads/main
revision=$(git -C "$work" rev-parse FETCH_HEAD)
release="$root/releases/$revision"
if [[ ! -d "$release" ]]; then
  git -C "$work" checkout -q --detach "$revision"
  python3 "$work/deploy/build.py" "$work/site" "$website_id"
  for host in ariari.art portal.ariari.art; do
    grep -q "$website_id" "$work/site/$host/index.html"
    test -s "$work/site/$host/flow.js"
  done
  printf '%s\n' "$revision" > "$work/site/revision"
  chmod -R a+rX "$work/site"
  mv "$work/site" "$release"
fi
ln -s "$release" "$work/current"
mv -Tf "$work/current" "$root/current"
echo "Serving $revision"
# Keep current plus the four most recently built alternatives.
mapfile -t old < <(ls -1t "$root/releases" | grep -vx "$revision" | tail -n +5)
for entry in "${old[@]}"; do
  [[ "$entry" =~ ^[0-9a-f]{40}$ ]] && rm -rf -- "$root/releases/$entry"
done
