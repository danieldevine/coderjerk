---
title: "Hiring Dread"
author: Dan Devine
date: 2026-03-04
description: How the hell am I going to evaluate junior developers now?
tags:
  - junior devs
  - hiring
  - web-development
  - dread
---

Hiring decent web developers has been painful for as long as I've been doing it.
The traditional flow for many years has been:
 1. Spend an hour writing a very thorough job description for a mid-level developer with a lot of detail about the technologies we use and how many of them we expect candidates to be familiar with. 
 2. Post job ad on various platforms and receive applications from junior developers, non-developers who have dabbled in crypto and assorted other non-qualified people.
 3. Engage a recruitment agency with a detailed bried and be sent a bunch of CVs from Data Analysts with 20 years experience in R. Turn them all down and then be followed around by said recruitment agents for a decade.
 4. Having exhausted hiring budget, turn to LinkedIn[^1] and _après, le déluge._

Mid-level has been the hardest to hire as juniors apply for mid-tier jobs and mid-level apply for senior jobs, in my experience. Further complicating things is the fact that our standards for web developers are comparitively high. This might seem concieted but, outside of a handful of agencies, some horrible development practices are commonplace in my region[^2], so experienced web developers coming from these companies are well versed in jQuery but are unfamiliar with JavaScript, and skilled at installing unlicensed year-old versions of Elementor with known vulnerabilities into new site builds[^3] but not at solving problems with code. 

## This worked
So hiring somebody who is ready to slot in and be immdiately productive has been challenging. Which has led me to a largely sucessful method of finding new talent. In recent years I have sought out and hired junior developers with minimal to no agency experience based on one quick screening call followed by a technical interview where they talk me and my lead engineer through some code they're proud of. 

The 'secret sauce' was that I selected the developers I want to talk to from seas of applications by looking at what they've made and put online by themselves. For fun. Ultimately if you're smart, you genuinely enjoy coding and you're stubborn enough to see a problem through to its solution, then you have what it takes. So I look for those traits. When I see a self-started project, however goofy, that isn't mostly boilerplate or bootcamp tutorial fodder and that they've taken the time to put it on a web server[^4], then I know that they most likely have the raw materials to succeed here, whatever their educational or personal background. 

When we hire them they're not interns and they're trusted with real work, but given plenty of room to fail. We effectively write off their first six months and invest as much time and energy as we can spare into training them in our way of working until they're ready to really contribute, and then we watch them turn into competent and in some cases excellent developers. 

Its not a perfect system, and remote working makes it challenging to give the correct amount of guidance sometimes, but the net impact on our output is always positive. It can be frustrating when the dev you've helped grow leaves for a better offer after a few years, but that's life, and the more good devs out in the wild, the better in the long run. 

## Oh, The Dread
It'll be hiring time again soon and since my last hire the landscape has changed, its safe to say. The current popularity of LLMs, the relatively easy access to them and their massive exposure means that an abundance of whacky side projects and a github full of code is no longer necessarily an indicator of the traits that I'm seeking. Equally, a willingness to use generative AI isn't necessarily an indicator that the candidate lacks those traits. All I know for sure is that I'm going to have to read a hell of a lot more code to find out. 

I don't have much use for LLMs as a code writing Technical Director. I test them frequently to challenge my biases, but so far they are not capable of delivering appreciable value to the type of work I do, either technically or in terms of productivity.[^5]. I want my team to eventually be able to problem solve the way I've learned to, and while I can understand a junior developer turning to LLMs as an easy way out when faced with a challenging problem, its those intense moments of struggle that ultimately make you a better developer. 

To get reasonable output from an LLM you need the kind of experience that means you don't really benefit from using it. Junior devs using them will create poor output, which makes it not worthwhile allowing LLM generated code into our projects as a whole. As training is already a slow process, adding reviewing enormous pull requests of semi-functional code to the mix places a greater burden on the more senior members of a team.
 
For the existing hiring model to continue working, junior developers will need to develop problem solving and coding skills in order to progress, LLMs would prevent that from happening, or at leat make it a slower process, so hiring juior devs who have built up a reliance on them wouldn't make sense. 

So I'm dreading venturing back into the hiring market. We'll probably have to start doing some live coding tests in a controlled environment, hopefully it doesn't come down to whiteboards. Its going to be time consuming and ultimately I'm going to have to rely on the uncomfortably unscientific human skill of judgement. 

And worst of all I'll have to open f***king LinkedIn. Dread. 

::: info
Please don't send me your CV, i'm not hiring right now, but feel free to
[discuss this post with me on GitHub Discussions](https://github.com/dandevine/coderjerk/discussions). No Recruiters.
:::

[^1]: The Meaning of Pain.
[^2]: This is more to do with the way agencies are run and the investment they're (un)willing to make in their dev teams than the developers being inherently 'bad', but living in the world of shortcuts for too long breeds habits that are hard to remove.
[^3]: True story about a well known agency. We were hired to clean up their mess afterwards. 
[^4]: It has always amazed me how many web devs, including experienced ones, will happily show you their github repos but not have anything that is entirely theirs online. It ain't that hard.
[^5]: It is pretty good at writing tech specs that nobody will ever read but that's another blog post.
