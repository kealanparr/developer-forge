---
category: snippets
tags:
  - nunjucks
date: 2023-08-01
title: How to log in a Nunjucks file
header-title: true
---

Just remember to put this inside a block like \{\{ bodyContent \}\} etc

So that it will be included in the page

```javascript
{{ payload | dump }}
{{ error   | dump }}
```