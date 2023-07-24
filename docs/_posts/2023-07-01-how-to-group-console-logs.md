---
category: snippet
tags:
  - javascript
date: 2023-07-01
title: How to Group Console Logs
header-title: true
vssue-id: 10
---

If you need to group console log's together you can use `console.group` like so:

```javascript
console.group()
for(var i=0; i < 5; i++){ console.log('these will be grouped') }
console.groupEnd()
```

![A picture of the Chrome dev console with groups delimiting the logs](/assets/img/consolegroup.jpg)
