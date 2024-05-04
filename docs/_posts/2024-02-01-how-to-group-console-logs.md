---
category: snippets
tags:
  - javascript
date: 2024-02-01 # yy-mm-dd
title: How to pull from your forked uphead
header-title: true
---

I'm currently working in a codebase, with one base codebase and then around 4 other micro ui's that are forks of the base

It's a good way to promote code re-use and structure our applications sensibly

I do keep forgetting how to pull from the fork and reset my head though! So it's:

# To merge
```javascript
git remote add upsteam <forked-repo-url>
git fetch upstream
git merge upstream/main
git co -b branch123
git push --set-upstream origin branch123
```

# To rebase
Careful here!
I only use this when I had to forcibly pull commits that were normally merged out!
```javascript
git remote add upsteam <forked-repo-url>
git fetch upstream
git rebase upstream/main
git push origin master --force 
```