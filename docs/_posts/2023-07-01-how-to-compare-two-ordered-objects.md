---
category: snippets
tags:
  - javascript
date: 2023-07-01 # yy-mm-dd
title: How To Compare Two Ordered Objects
header-title: true
---

If you are comparing two objects (even nested objects) and they have the same property order, the fastest way to compare them is to serialize them and then compare them (the same goes for an ordered array) like:

```javascript
let firstString  = JSON.stringify(obj1);
let secondString = JSON.stringify(obj2);
firstString === secondString;
```