---
category: snippet
tags:
  - javascript
date: 2023-07-01
title: How to Create Object Properties Conditionally From Bools
header-title: true
---

You can build objects from truthy and falsy values, something like:

```javascript
const obj = {
  ...(true) && { someprop: 42 },
  ...(false) && { nonprop: "foo" },
  ...({}) && { tricky: "hello" },
}

console.log(obj); // {someprop: 42, tricky: 'hello'}
```