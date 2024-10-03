---
category: snippets
tags:
  - nunjucks
date: 2024-08-03 # yy-mm-dd
title: How to hide elements in GDS
header-title: true
---

I had to hide some iframes recently and couldn't quite work out the styling I needed to apply

Inline styles with `display` set to none? Zero width and height? Just hide it with opacity?

The answer is a css style applied,

```javascript
govuk-visually-hidden
```