---
title: "Gifting Labour to Big Business"
author: Dan Devine
date: 2023-02-08
description: Open Source Ethics in the Face of Twitter’s Impending API Monetisation.
tags:
  - apis
  - twitter
  - x
---

I’m writing this at a time when Twitter have announced that they will cease free access to their APIs, to one extent or other. No definitive details of how this will be structured, what the exclusions will be or how much certain types of access to the API will cost have been made available at time of writing.

I’m the author of a modestly popular Twitter Rest API Library, [Bird Elephant](https://birdelephant.com). It’s a relatively new PHP library that aims to make accessing Twitter’s recently overhauled V2 endpoints as simple as possible for average developers. It’s linked to from the Twitter Developers website as a ‘community tool’ [^1] and has a whopping 96 stars on GitHub but also 136,386  installs, according to Packagist. 

Like many developers who open source their code, money never really came into it as a motivation. I’m a professional web engineer, I get paid. I have a ‘sponsor’ button which exists to help cover the costs of hosting the documentation site, and am pleasantly surprised to have even one sponsor (shoutout to Anthony V and [Hype Machine](https://hypem.com/latest/all)) but the main source of gratification is in watching what others do with my code and the unexpected interactions with people that have come out of it. On a project as small scale as this, even attending to the most tortured support requests can still be fun – [including this doozy](https://github.com/danieldevine/bird-elephant/discussions/38).

It’s not an earth shattering piece of engineering in any case, but a pretty useful tool for those who want to use an API for a specific purpose without having to deal with all of the complexity that is involved.
Aspirations, meet reality.

API documentation, in my experience, tends to assume a depth of engagement that isn’t necessarily borne out by what developers actually want to do. For example, here’s some noble suggestions from the Twitter Developer site , (drafted pre Musk era) on what to use the API for.

- Moderate conversations for health and safety
- Enable creation and personal expression
- Measure and analyze “what’s happening”
- Improve community experiences
- Curate and recommend content
- Impact the greater good

https://developer.twitter.com/en/docs/twitter-api

Maybe the Python developers using Tweepy have been carrying out academic research and measuring and analyzing, but here in PHP land what developers generally want to do is automate tweets and upload images (which v2 can’t actually do but that’s another story).

I’m not saying this disparagingly, these are totally legitimate aims, and writing bots was what got me involved in the first place. These developers are creating and personally expressing, and many impact the greater good for sure, although whether these qualify as “good bots” is as yet unknown.

Nevertheless, I have had occasion to ask myself exactly what I might be enabling by lowering the barrier to entry. One of the first forkers of the first iteration of my library was an account with clearly stated aims that were in direct contradiction of my personal politics. After brief consideration I concluded that if I was making it easier for him to get up to whatever shenanigans he was planning, then I’d be making it easier for others to counter it.

I’ve recently written support for the Direct Messaging endpoints, which is a more murky area. I’ve yet to think of a case where an automated DM would be welcome, but I’m sure my users could surprise me. Ideally not with crypto spam.

That’s the nature of open source, much like art or music, whatever the creator’s intentions, once it goes out the door it belongs to whoever finds it. Which is sort of true for an API itself. But only sort of. Compared to the days of V1, getting Twitter API access had become less trivial, with the signs of at least some human intervention in the approvals process, at least when I went through it. Even without a payment barrier, access was never a given. Distinguishing between ‘good’ and not good bots (or at least good and not good bot authors) has something of a precedent.

So really, an API is to a greater or lesser extent a controlled environment and the Twitter change is one of a degree of control. We’ll put the implications of exerting control over a platform that has a public aspect through its sheer scale to one side for now.
Gifting Labour

Paid APIs, or APIs that are only available to existing paid subscribers of a service are hardly unusual. A project I put together just last week is a light library for using the Scoro Rest API. Scoro is a relatively expensive, paid-for subscription based project management product that the company I work for is adopting. I’m sure it’s owned by good and virtuous people, but their motives and world view are completely unknown to me. It’s not a massively adopted software, certainly not on the scale of Twitter, and there isn’t a thriving ecosystem of libraries or integrations or a developer outreach programme.

So why would I use time that I could otherwise have spent walking the dog or watching 1970s episodes of ZDF Hitparade with my daughter to write something like this?

Firstly, for myself. I’m a working developer who wants to integrate their product with my own applications that I’ll use in my day job. Secondly, to make that an easier thing to do for other developers who don’t want to spend a lot of time figuring out API documentation, because I can empathize with them and because I’ve relied on other people’s open source work to do my job on a daily basis throughout my career. And thirdly, and probably most importantly, because I can. Seeing a gap and filling it with code is is intrinsically satisfying to me, and I’m sure many other developers.

Making Scoro richer isn’t really on my list. Although I may, in a miniscule way, contribute to the success of their product, I don’t expect a share in their profits. The quid pro quo is that I got a couple of evening’s worth of enjoyable coding and some satisfaction from writing the library. The implicit contract is that I promise not to continually test their rate limits and they promise not to limit me to 2 API calls a day.

But something changes in that relationship at scale. When there is a huge ecosystem of developers freely writing free tools with hundreds of thousands of users, the contract changes. Bird Elephant on its own was never going to make any material difference to Twitter’s value, but the totality of the ecosystem, all the tools, dev hours and bots has certainly made a real, substantial difference to Twitter’s growth. A massive corporation can arbitrarily change the rules if they want to, but that breaks the implicit contract and without trust the willingness to participate dwindles.

There’s an extra dimension to this. Even tiny libraries like mine have a similar contract with their users, who freely use a service freely given. The people who use my code have the reasonable expectation that I’ll continue to support that code. I expect them to do what they want to with it (just not DM me crypto spam). That’s labour I’m happy to gift.

So I’ll most likely continue to develop the library [^2] if I can find a way to do so that doesn’t cost me a fortune to test. I expect the demand for the library to evaporate overnight in any case, depending on the extent of the restrictions that may or may not be imposed. If that happens I’ll wind it down gracefully and move on.

<small>Note: I haven’t really engaged with the ethics of developing, paid or otherwise, for a platform that fired many of its own developers and community managers and who’s ownership and motivations may or may not be highly questionable. This article is long enough and I think others are better placed to deal with these topics.</small>

i’m @coderjerk on Twitter if you want to come at me there.

::: info
Want to discuss or comment on this post? You can do it on the [github discussions page](https://github.com/danieldevine/coderjerk/discussions) for this repo.
:::

[^1]: 2026 -  Not anymore it isn't lmao.
[^2]: 2026 - I'm putting it to bed soon

