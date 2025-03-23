---
category: posts
tags:
  - unit-test
date: 2025-03-23 # yy-mm-dd
title: What is a Saff Squeeze?
header-title: true
---

A Saff Squeeze is a way to catch broken code quickly

Simply put, you inline whatever code the test is doing into the test from the bottom to the top, until you know why its failing

Look at the below pseudocode

```js
  const testTheApi = () => {
    a()
    b()
    c()
    expect(1).toBe(1)
  }
```

Hmmm. That doesn't work, lets Saff Squeeze

```js
  const testTheApi = () => {
    a()
    b()
    // copy and paste what c was doing
    expect(1).toBe(1)
  }
```

Still not working..... But this is becoming clearer

```js
  const testTheApi = () => {
    a()
    // copy and paste what b was doing in the test
    // copy and paste what c was doing in the test
    expect(1).toBe(1)
  }
```

Hmmmm. Still not working! Go up then in the test...

```js
  const testTheApi = () => {
    // copy and paste what a was doing in the test
    // copy and paste what b was doing in the test
    // copy and paste what c was doing in the test
    expect(1).toBe(1)
  }
```

It still fails, but I understand it now! `a()` was at fault! 

By seeing all the code, in front of me, in sequence and not abstratced helped me bug smash, and you just did your first Saff Squeeze