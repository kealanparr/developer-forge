---
category: post
tags:
  - golang
  - debug
date: 2023-07-01
title: Golang Debugging Templates
header-title: true
vssue-id: 10
---

# Golang Debugging Templates

I just spent quite a while debugging why I couldn't get something to show in my templating HTML for a golang application.

Just a very brief checklist to spare future me the pain of debugging this again. 

1. Make sure you are passing a struct into the `t.Execute()` if you are using a range in the templating.
2. Make sure your properties start with a capital (so they're exported and the template can read them!)
3. Make sure there's no properties that are un-used. It won't error on build if you use something like `{.Title}` in the HTML but you don't have a `Title` variable in your `struct`. It just stops templating (IME)