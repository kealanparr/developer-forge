---
category: snippets
tags:
  - nunjucks
date: 2024-08-03 # yy-mm-dd
title: How to hide elements in GDS
header-title: true
---

I had to hide some iframes recently and couldn't quite work out the styling I needed to apply

The normal `display: none` and other custom CSS often doesn't work (because of the cascasing default styled you'll get borderds still applied etc)

So the style you need is `govuk-visually-hidden`, and make sure you hide it via aria too

```html
<p class="govuk-visually-hidden" aria-hidden="true">This is my hello world p tag</p>
```