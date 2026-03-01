---
title: "The Complicated Futility of WordPress"
author: Dan Devine
date: 2022-02-02
description: The challenges of working in opposition to the world's larget blogging platform.
tags:
  - wordpress
  - cms
  - php
  - gutenberg
  - Full site editing
---

I build websites for a living. Lots of them. These websites are designed by a team of designers who design complex, bespoke, heavily branded layouts. I take those designs and my team of developers and I turn them into corporate websites, generally for medium sized industrial clients.

Sometimes the websites are big brochures, sometimes they have complex functionality. Sometimes both. They run to hundreds of pages and posts, composed of multiple layouts, templates and using, typically, 20 or more discrete modules, each configurable in multiple ways by the end user when the sites are ultimately turned over for the marketing staff of these mid sized companies to edit.

Many of them use WordPress as a CMS. From the beginning this has felt like a hack – WordPress is, and always has been a blogging platform at heart, reasonably good at what it does, providing an easy to install means for bloggers to publish simple, text heavy content without much friction. ~~Like this very blog, for example~~[^1].

It has always been an opinionated piece of software, and using it as a CMS has always meant chafing against Automattic’s assumptions about how and why their software is used.

It was a hack, but it was preferable to the alternatives. When I started using WordPress it was 2012 and the market was full of lumbering, buggy and expensive ‘Enterprise’ CMS ‘solutions’ that made fast and clean, code-driven development a nightmare. Drupal was, and still is, a clunking monster, unfriendly to developers and editors alike (that’s a whole other post). Joomla? Magento? Get outta here. WordPress offered a relatively simple and intuitive editing experience and over time it has become so ubiquitous that its very familiarity to editors is a massive selling point.

## You are not building a WordPress website.
With all that in mind, the fundamental thing to remember here is that, as a professional web developer, you are building a website. A website for your client, with no limitations on presentation and functionality. A website that happens to use WordPress to provide a way for editors to add content easily. You are not building a WordPress website.

And the thing was that, once you understood the distinction, with some skill and experience you could actually make this work very well. You would write and structure your theme from scratch, ignoring bloated off the shelf themes and unwieldy child theme architectures. You would build with grunt/gulp/webpack as a build system, in a version controlled repository. You would keep concerns as separate as possible, keeping the amount of logic in templates to an absolute minimum. You would use ACF, especially its flexible content fields, to allow you to add repeatable and repositionable content in specific areas of your website. You would understand that the WordPress advocated practice of deferring functionality to plugins and using child themes only makes sense when building a simple blog type site where the theme can be swapped at will by the editor. It seemed like coexistence was possible.

And then along came Gutenberg, and it became clear that WordPress was preparing to pull away from this use case completely and move the platform to a fully fledged site builder. I’m writing this as WordPress 5.9 is released, bringing with it FSE – Full Site Editing, and this confirms that we’re at the end of the road.

Here’s an enthusiastic appraisal from the Yoast Website:

<blockquote>"Full site editing (FSE) is a huge development for WordPress. (…) The upshot is that you have more control than ever over the design of your site. And you don’t need to mess around with any code; it’s all ready-to-use, out of the box. You can play around with site-wide designs and styles, making big changes or tweaks — and updating all of it with just the push of a button. Pretty neat, right?"</blockquote>
<attr>- some yoast guy</attr>

The thought of client side marketing interns ‘play(ing) around with site-wide designs’ should make the blood of any professional run cold. Sites that have been painstakingly, designed and built, reviewed and refined to the last detail every step of the way with stakeholders on the client side, optimising UX, legibility, performance and upholding the client’s brand can now be squelched in an instant by someone 3 months into their job who prefers yellow.

## Complicated Futility
No doubt we could work up a system to prevent this, we can restrict access and force use of the classic editor etc, but that’s where the ‘complicated futility’ comes in. It’s one thing to find a way to cherry pick aspects of the software to serve your purpose, it’s another thing entirely to try to build in complete opposition to it.

WordPress are doing what’s right for the use cases that they see as important, and that is entirely valid. They’ve decided on the best direction for their software, but it’s no longer viable for me, and those like me, to waste resources fighting the inevitable.

I’ve been building on the dev friendly, clean, code-first by design but easy to edit Twill for some time now, and although lacking in good documentation, it’s a great tool that is built with the use case of a professional developer in mind. There are, mercifully, plenty of other options out there in 2022.

The best thing about banging your head against a blogging platform for 10 years is when you stop.

::: info
Want to discuss or comment on this post? You can do it on the [github discussions page](https://github.com/danieldevine/coderjerk/discussions) for this repo.
:::

[^1]: Update 2026, not any more. I'm using Vitepress and good old markdown for this blog now. I still have to use WP but I'm still using Twill wherever practical too.
