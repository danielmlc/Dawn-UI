set -e

# 更新文档

npm run docs:build

cd docs/.vuepress/dist

git init 

git add .

git commit -m '发布'

git push -f git@github.com:danielmlc/Dawn-UI.git master:gh-pages



cd -

# 更新插件

git add .
git commit -m '更新'

git push -u origin master
