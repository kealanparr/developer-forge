---
category: snippets
tags:
  - docker
date: 2023-07-01 # yy-mm-dd
title: How to delete all Docker images at once
header-title: true
---

```docker rmi -f $(docker images -aq)```