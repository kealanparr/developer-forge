---
category: software-principles
date: 2023-08-09 # yy-mm-dd
title: Hyrum's Law
header-title: true
vssue: false
---

Simply, Hyrum's Law is:

"With a sufficient number of users of an API, it does not matter what you promise in the contract: all observable behaviors of your system will be depended on by somebody."

Even if you think small, unecessary parts of your API response can be safely deleted, the chances of you breaking someone else downstream of you (with enough users) almost becomes certain!

Hopefully the law gives you pause to be incredibly careful with what you publish via your API's firstly, and to measure twice and cut once when changing things!