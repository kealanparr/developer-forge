---
category: posts
tags:
  - javascript
date: 2023-07-01 # yy-mm-dd
title: Arrow Functions With No Arguments Can Use An Underscore _
header-title: true
---

You can use an `_` inside an arrow function to omit the `()` if there are no arguments, for example:

```javascript
let a = 4;
let b = 2;
(() => a + b + 100)()
```

is equivalent to

```javascript
let a = 4;
let b = 2;
(_ => a + b + 100)()
```