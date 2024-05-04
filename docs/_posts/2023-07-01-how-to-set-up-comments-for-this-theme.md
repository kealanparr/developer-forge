---
category: draft
draft: true
date: 2023-07-01 # yy-mm-dd
title: How To Set Up Comments For This Theme
header-title: true
---

I'm going to leave this as a draft because I'm only really writing this for myself to myself. To remember what I did to get comments working.

Okay, proof that I did get comments working:
![](/assets/img/proof-comments.jpg)

The last commit for this repo was about 2 years ago from when I picked it up, so a lot of stuff had changed, and the documentation was sadly out of date.

Some things I just had to work out, it's not like "kinda" in the documentation its just not present at all.


# Whats the problem?

If you look in config.js, you can see a commented out object that would make comments work (I think the repository name value will be wrong coz I renamed this repo)

This then uses Vssue to create comments on posts, using 0Auth Tokens from Github.

The whole comment is then added onto a GitHub issue on your repository.

Its nice because most of the people who would comment would be dev's who already have GH accounts, so they just need to click login and then boom, it all works and they can comment

Let's explain briefly how to get it to work, and then why im not going to do it

# Pre-requisites

Firstly, you have to tick "GitHub issues" to be allowed on your repository.

![A picture a checkbox being ticked up on the GitHub web browser](/assets/img/github-issues.jpg)

And you also are going to need

1. Homebrew (to make installing things easier, if you're on a mac, not a hard requirement just convenience)
2. A platform to deploy a Node service (Heroku for example)

# what happens

Vssue is the package that allows you to add comments. Its a middle man between GitHub issues where your comments live, and your blog.

You can read the docs here for it: https://vssue.js.org/guide/#how-vssue-works

It doesnt support implicit grant type (please see the above docs if you cant remember)

The long story short though, is that the package to get around this problem, uses a package called cors-anywhere

You can view the code if you global search for cors-anywhere and youll see it in `vssue.js`

Now way back when the developer made this repo it all worked!

There was an open source host of the cors-anywhere, and all you do is just add that url to wherever you wanna go

like

cors-anywhere/www.google.com

Which is what Vssue does.

But bad actors spammed the fuck out of the api, to get around cors if they were doing naughty things

So Heroku, the platform who hosted the cors-anywhere repo wagged their fingers and said no more. proof here: https://github.com/Rob--W/cors-anywhere/issues/301

So now the repo is opt in. By opt in, it means you have to go to the example url and click you want it to allow it to sort cors-headers for you

Its mostly used for people just debugging stuff on their website, but Vssue have essentially used it in production, for the normal running of their website

Example of what the website open in looks like
cors-anywhere.jpg

Okay. Still with me at this point?

We have a problem friendo

OKAY! But some people host their own version of cors-anywhere

Yup. So did I

I forked the repo. And tried to host it on Heroku.

Oh. Heroku doesnt have a free tier anymore. I need to find a new platform to host it unless I want to put in my credit card. No thanks.
heroku-cli.jpg

So then I found a good platform.

I hosted the forked service, and it deployed. 

Yay it works now! (in theory, weve done all the work I mean to get it wired up)

Now heres the kicker

Becaue Vssue is a npm package and has hardcoded the cors-anywhere url (not your url on the custom service)

YOU WILL HAVE TO FORK VSSUE, AND THEN CHANGE 1 LINE. WHICH IS THE PRE-PENDING OF cors-anywhere to your service url

Honestly? No

If it was a small, simple wire up, maybe comments would be fun

You would even have a head ache of people potentially using your cors-service to set peoples headers correctly and trying to scam people

Legit, not worth it.

So I said... I dont wanna do this and just launched the codebase with no comments.

On top of that

Most of the free tier platforms spin down on inactivity (ofc they would, thats reasonable if ur not paying)

Which then means your comment section wouldnt work ANYWAY

Because theres not enough people using the service or commenting it essentially will just spin down all the time due to inactivity

Unless you fancy putting a credit card in and watching it like a hawk to make sure youre not being charged

Naaaaaaaaaaa

As youve seen

I got the comments working
And thought
This is just a libaility
Im not hosting this
Its not worth it for the small benefit of comments
So I put it all in the bin