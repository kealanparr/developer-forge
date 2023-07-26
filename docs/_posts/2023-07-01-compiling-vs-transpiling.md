---
category: post
tags:
  - compiling
  - transpiling
  - typescript
date: 2023-07-01
title: Compiling vs Transpiling
header-title: true
---

# Compiling vs Transpiling

Compiling and transpiling have a very similar definition, but aren't the same process. So, what's the difference?

Before we begin, we have to understand higher & lower level languages. Higher level are languages more abstracted than lower level languages. By abstracted we mean easier to understand. For example, you would say machine code (binary) is lower level and closer to the computer than JavaScript. Higher level languages generally are more simple to write and understand, than writing a lower level language (Assembly code for example) where you have to understand and deal with memory addresses directly _etc_.

# Compiling
Compiling is a catch all term for turning code written, into some lower-level executable for the computer (generally machine code). An example of some compiled languages are Java, C# or C. Sometimes it's compiled in multiple steps, each step optimising the code and getting it closer to machine code with each "pass" it does. A high level, closer to human readable language ends up "lower" or closer to binary.

# Transpile
Transpiling are sometimes referred to as "source to source compilers", a short hand way of saying "source code to source code". Transpiling is converting one higher level language to another higher level language. For example, Typescript is a high level language but after it's transpiled it's turned into JavaScript (another high level language). Or Babel for example can transpile ES6 JavaScript code into ES5 JavaScript. The benefits of transpiling is you can write one language and still end up with another high level language.