---
category: snippets
tags:
  - javascript
date: 2023-07-01 # yy-mm-dd
title: How To Trace What Calls A Function, Without A Debugger
header-title: true
---

You can trace a codes call-stack in the console easily by generating an error, like

```javascript
console.log(Error('this is where it calls'))
```