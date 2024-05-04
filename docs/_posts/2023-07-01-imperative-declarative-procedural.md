---
category: posts
tags:
  - imperative
  - procedural
  - declarative
  - paradigms
date: 2023-07-01 # yy-mm-dd
title: Imperative, Procedural & Declarative Code
header-title: true
---

# Imperative, Procedural & Declarative Code

I am reading *Pragmatic Programmer* at the moment, an excellent book by Andy Hunt and Dave Thomas.

But I have forgotten about 3 times now when they talk about imperative, procedural, declarative and multi paradigm code. 

So welcome back future Kealan, here we go again for the fourth time.

Software languages follow 2 broad paradigms.

# Declarative paradigm

Languages following the declarative paradigm, have the code written specifying **what you want to do, without saying how.**

A super simple example of this is either:

### SQL

``` SQL
SELECT * FROM customers
``` 
### or HTML

``` HTML
<div></div>
``` 

In the above code examples, you aren't implementing the `SELECT` or how to render a `div`. You are just telling the computers *what* to do, without the *how*.

From this paradigm, there are sub-paradigms such as:

- Functional programming.

# Imperative or Procedural paradigm

Languages following the imperative/procedural paradigm, have the code written in a format of **how to do something.**

For example, if you do something like below:

``` javascript
for (let i = 0; i < arr.length; i++) {
     increment += arr[i];
}
``` 

You are telling the computer exactly what to do. Iterate through the array called `arr` and add to `increment` each of the items in the array.

The vast majority of modern languages are imperative/procedural (or can be used in an imperative/procedural way).

# Conclusion

A good example of a declarative command, would ask the computer to make you a cup of tea (I don't care how you do it, just bring me some tea). 

Whilst imperatively, you would have to say 
- Go to the kitchen.
- If there is a kettle in the room, and it has enough water for a cup of tea, turn on the  kettle.
- If there is a kettle in the room, and it doesn't have enough water for a cup of tea, fill the kettle with enough water for a cup of tea, then turn on the kettle.
- *etc. etc.*

Can you see how I am *implementing* or telling the computer exactly what to do?

If you want to dig further into sub-paradigms in either of the paradigms, Wikipedia had a great (although pretty complex) graph found here: https://commons.wikimedia.org/wiki/File:Programming_paradigms.svg