---
category: snippet
tags:
  - javascript
date: 2023-07-01
title: How To Trace What Calls A Function, Without A Debugger
header-title: true
vssue-id: 10
---

You can trace a codes call-stack in the console easily by generating an error, like

```javascript
console.log(Error('this is where it calls'))
```