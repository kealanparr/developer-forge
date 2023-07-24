---
category: post
date: 2023-07-01
title: Make It Work, Make It Right, Make It Fast
header-title: true
vssue-id: 10
---

# Make It Work, Make It Right, Make It Fast

I have worked with multiple junior developers when working on software projects & bugs. Oftentimes pair programming with them, or just giving advice to help debug/triage a bug they're stuck on.

I find myself (and more senior people than me) repeating the same advice over and over again - to help them.

**Make it work, make it right, make it fast.**

## Make it work
When debugging an issue, you are essentially a detective.

You look at the code, the order of execution, compare it against something similar that works - and essentially gather facts together to try and resolve the issue.

Your first step should be to **just** try and fix the issue. Don't do anything more!

Don't make your solution scalable, don't try and make the fix work in different languages (if you have multi-language codebase), don't try and follow your codebases architecture - you can even just add hacky hardcoded solutions to try and work out what is wrong.

This is the **make it work** stage.

## Make it right

Fantastic! You've solved the problem, and now know what's wrong.

If Senior Developers sent their "first draft" fix to QA, they'd (generally) be considered insane.

The **make it right** stage is to try and apply a better fix to your problem (now you know the underlying issue).

Ensure you're adhering to your codebases architectural patterns, remove things you've hardcoded, ensure your solution scales, remove any unnecessary changes to keep the PR small, add comments where appropriate *etc*

## Make it fast

The final step, should be to make sure you haven't degraded the codebase in a significant way.

Now you have the solution looking clean, and are almost ready for QA - do a profile before your change and after your change.

- Have you introduced jank?
- Can you profile your codebase before and after your change? Do you need to run a Lighthouse profile?
- *etc*

# Conclusion

Congratulations! You've just fixed your first tricky bug 😉

I hope this was useful, and can be a useful addition to the way you develop software!