---
category: posts
tags:
  - opinion
date: 2025-03-23 # yy-mm-dd
title: Order your files in their callstack
header-title: true
---

I found myself reading some code another developer wrote recently, and had only one issue with it

His ordering of functions, seemed totally bizzare

I acknowledge this is just an opinion piece from myself, but order your files roughly in its execution order

I should never have to scroll up and down to opposite ends of the file because the file ordering is not optimised

When your code is executed in this file, order your functions like a callstack, and place them in the file, the way they will be called

Then, I can scroll top to bottom and see the highest functions that get called first, and the lower functions in the file, get called later (and it stops me scrolling up and down and wasting time)

I knowm it seems small, but consider the cognitive load on your colleagues reading code they haven't written - and try to make it as simple as possible

I used to work at a company that had 2 codebases of approx 2 million lines each. Honestly? Small things like this made it much easier to work with