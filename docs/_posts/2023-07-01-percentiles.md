---
category: post
tags:
  - percentiles
date: 2023-07-01
title: Percentiles - simply explained
header-title: true
vssue-id: 10
---

# Percentiles - simply explained

I keep forgetting what a percentile is. I remind myself.... And then I forget again. So I'm going to write something to make sure I have a reference for when I forget again.

## Background
Different areas of software development measure performance differently. Web development normally measure how long it took for a response to be returned after a request. Or you might measure **throughput** like how many records you can process per second.

But there will be natural variation in these numbers, for example if you measured it 100,000 times. A slow internet spike, hardware doing lots of other jobs or one server going down may increase your time significantly.

## So how do you measure it?
It's common to see **average** or the **arithmetic mean** response time used, where we add up all the times and divide them by however many there were.

This isn't great thought if we want to know the "typical" response time, because it doesn't tell you how much this fluctuates or how many people see a delay of greater than 100ms for example.

## Percentiles
If you take your list of response times, sort it from fastest to slowest then the **median** is at the halfway point.

So if your **median** response time is 500ms, that means 50% of requests return in less than 500ms and 50% take longer.

This makes it a great metric to understand how long users are typically waiting for.

The **median** is also known as the **50th percentile**.

So to work out your outliers you can look at the high percentiles, like the 99th percentile (it's normally abbreviated to p99, or p999 for 99.9% percentile *etc*).

As an example, we could look at the 95th percentile for response times (and if it's 1.5s) we known 95% of our users are seeing less than 1.5s response time and 5% are experiencing longer times than 1.5s.

These high percentiles (p99, p95 *etc*) often are called **tail latencies**.

## Concrete example
When Amazon design services, they want them to be within certain parameters (read - fast) to the p999 (99.9th percentile). So even though what they consider "slow" is affecting only 1 in 1,000 requests, it doesn't matter. You could likely argue and say "that's such a low majority! My code is fast for the 99.8th percentile!" - it doesn't matter.

Their reasoning behind this is that these "slow" users are normally customers with lots of purchases, and the amount of data on their account makes it slow. But these are the valuable customers as they are purchasing the most.

So why don't Amazon cater to the p9999 (99.99 percentile)- the slowest 1 in 10,000 requests?

It isn't worth it for them. It doesn't yield enough benefit and it's difficult to go to such high percentiles because random events out of your control can be the reason for the slowness.

## Final example
People who sell Software often set up Service Level Objectives (SLO's) or Service Level Agreements (SLA's) which are promises of the software they sell- and an example of one might be, **median** response time less than 200ms and the service to be up 99.9% of the time.

This is one way people/companies can use percentiles to check if they are meeting their SLO's.

And if they're not, they may issue a refund for the cost of the software.

## Conclusion
This explanation was heavily influenced by my reading of "Designing Data-Intensive Applications" by Martin Kleppmann. Which I highly recommend, it's a great resource.