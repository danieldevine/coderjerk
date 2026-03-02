---
title: "Why I Wrote a Twitter API Library"
author: Dan Devine
date: 2022-01-21
description: "Building a PHP library for the Twitter API v2"
tags:
  - Apis
  - Twitter
  - Bird Elephant
---

A few years ago I wrote my fair share of Twitter bots, now nearly all suspended or inactive. Learning how to do this was a frustrating experience for a number of reasons. Twitter’s Rest API had undergone some significant changes between v1 and v1.1 which led to a [lot of confusion](https://stackoverflow.com/questions/12916539/simplest-php-example-for-retrieving-user-timeline-with-twitter-api-version-1-1) in [tutorials/forums](https://stackoverflow.com/questions/6550337/twitter-oauth-php-need-good-basic-example-to-get-started)/[stack overflow answers](https://stackoverflow.com/questions/50460958/php-twitter-api-oauth-with-pagination-not-working-properly) between what worked for each version.

To make things worse, I was new to auth workflows and rest APIs in general, and had to strain pretty hard to even find the right search terms: I didn’t know what a Bearer Token was for instance. In exasperation I even wrote a despairing blog post on an old version of this website (thankfully lost to time) placing the blame, mostly unreasonably, at Twitter’s door for poor documentation. The documentation was probably perfectly fine if you had a reasonable amount of knowledge to begin with, but, I regret to admit, I did not.

It turns out that there were some perfectly good libraries that I could have been using, such as https://github.com/J7mbo/twitter-api-php or https://twitteroauth.com/ but even when I found them it took some straining to get them to do what I wanted. They certainly worked, but the documentation was difficult to penetrate, for me anyway. Eventually it all clicked of course, and I had a lot of fun before moving on to other mischief.

About a year ago when I decided write some bots again, I discovered that there was an APIv2 in early access and that the Twitter libraries hadn’t caught up yet.

So armed with my hard earned and only 50% forgotten knowledge and memories of my rough entry to the world of Rest APIs I decided to write ‘Bird Elephant’ my own simple library to work with v2 exclusively. As the API grew, so did the library.

There’s certainly nothing technically superior to my library compared to those existing ones, which now largely support v2 themselves. But what I hope it does well is to make the process of getting what you want from the API a little easier and more intuitive.

And it’s been fun to write and support, so far. Time permitting I hope to keep pace with Twitter’s changes and releases as best as I can.

I’m going to publish some tutorials soon on how to use aspects of the library on this site, to make use of the library even easier and to hopefully spark some creative ideas about what to do with it.

In the meantime, full documentation is available on [birdelephant.com](https://birdelephant.com). The closed issues on the github repo are becoming more useful as library usage starts to increase. I’m (nearly) always happy to take support requests over there too, so feel free to open an issue even if you’re not 100% sure its a bug.

I’m @coderjerk on Twitter if you want to come after me there too.

::: info
Want to discuss or comment on this post? You can do it on the [github discussions page](https://github.com/danieldevine/coderjerk/discussions) for this repo.
:::