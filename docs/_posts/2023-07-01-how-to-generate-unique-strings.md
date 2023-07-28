---
category: snippets
tags:
  - javascript
date: 2023-07-01
title: How To Generate Unique Strings
header-title: true
---

If you need to get a random, unique string (like for example a key for a React component), you can generate a random number, and from the random number, turn it into a string with a radix:

```javascript
(Math.random() * 100).toString(36) // t.b4m6wbai1
(Math.random() * 100).toString(36) // 26.ouhmguf
(Math.random() * 100).toString(36) // p.dl8iau9cl
(Math.random() * 100).toString(36) // 1w.mcuqns82l
```