---
category: post
tags:
  - docker
date: 2023-07-01
title: The Docker Introduction
header-title: true
vssue-id: 10
---

# The Docker Introduction

Have you ever been in developer hell when you need to configure something locally on your machine?

You need to set up SQL Server Management Studio version 12.0.2000.8. Only this specific version will work as it's coupled tightly to another dependency in the code you're trying to get running.

Setting up environment variables, dealing with operating system differences between machines, installing everything in the right place and installing your dependencies sub-dependencies can easily make what is a simple, small code change into a configuration nightmare.

Docker is one commonly used technology to solve this problem.

## What's Docker?

Docker is a technology to turn all the dependencies in your code into containers. A container is essentially a Docker "module". 

Containers abstract away the specific build requirements of configuring the dependencies and deals with all the configuration steps we listed above to get it building very quickly. This not only saves you the time adjusting your machine to be able to build the codebase, but standardises it so a user on a Linux PC and a Windows PC can interoperate easily.

The Docker containers essentially create an isolated environment to configure everything (so it doesn't end up polluting your actual computer) and ensures everything will build fine.

These Docker containers are generated from images. An image is essentially a blueprint of how to build the code and a container is a running instance of the image. Docker images essentially just run commands to configure the environments they run in to make sure everything will work. 

Here's an example Docker image taken from their [doc's](https://docs.docker.com/get-started/02_our_app/).
```
 # syntax=docker/dockerfile:1
 FROM node:12-alpine
 RUN apk add --no-cache python g++ make
 WORKDIR /app
 COPY . .
 RUN yarn install --production
 CMD ["node", "src/index.js"]
```

## Why would you use it?

Now you understand what problems Docker solves hopefully you have a good idea already about the some of the benefits it brings.

The main one being the time saved on setting up developer environments.

This is a big win for businesses who can now spend time on what's important and not on days configuring computer environments. Developer time is expensive and no company wants to spend hours on something that can be automated/containerized. Containers end up being far more portable - meaning that anyone can simply run your image and then start doing what they need to.

Aside from these points, after using Docker your code will now be:

- Isolated - Docker can allow dependencies to be more modular (which help make it easier to debug and manage dependencies).
- Performant - The only real alternative to containers are Virtual Machines (VM), but because VM's require operating systems on them and containers don't, the containers are much faster to create.

## Docker's impact on the Software Ecosystem

Docker has already gained wide adoption for the benefits we've already discussed.

There are 8.3 million Docker repositories, and 7.3 million accounts registered to use Docker from the stats on [their](https://www.docker.com/company) site.

It has helped democratize codebases too- where anyone, anywhere can contribute if they can access the codebase, regardless of their operating system which wasn't always the case.

Docker's [usage](https://www.datadoghq.com/docker-adoption/#:~:text=Docker%20Usage%20Rates%20Increase&text=That%20trend%20holds%20true%20today,are%20currently%20dabbling%20with%20Docker) still continues to grow year on year too.

## Conclusion
I hope this has given you a good basic introduction to what Docker is, the problems it solves for businesses and the impact it has had so far on the software development industry.

If you want to go further from here, Kubernetes is a great technology to read more about. Kubernetes is a way that Docker containers can be organised together, or deployed out to production.