---
category: posts
tags:
  - web performance
date: 2025-03-23 # yy-mm-dd
title: What is Layout thrashing?
header-title: true
---

## what exactly is layout thrashing?

Layout is the stage in the **critical render path**, where the browser calculates the geometric placement of the DOM elements (their size and location)

**Layout Thrashing** is when a browser has to reflow or repaint a page multiple times in one "rendering cycle". This can be done by reading and writing to the DOM multiple times, and forcing the browser to recalculate its positions again (by changing things) for example

The browser normally goes => Style → Layout → Paint → Composite → Display to the user!

This order is important and forcing the browser to forcefully repeat steps multiple times, can stop you painting your pages at 16ms for a perfect 60fps experience, with no jank

## What are some things that cause layout thrashing?

https://gist.github.com/paulirish/5d52fb081b3570c81e3a

## Remind of how you can profile things painting

How to audit layout shifts and catch performance issues is by adding

```css
* { outline: 3px solid red } to your CSS.
```

Then, recording your page loading in Chrome and watch it in slow mo