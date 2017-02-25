npm run build
rm -rf docs
mv dist docs
echo naaab.ir >> docs/CNAME
git add --all
git commit
git push origin master
