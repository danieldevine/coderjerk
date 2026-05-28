---
title: "Removing global-inline-css from WordPress 7.0"
author: Dan Devine
date: 2026-05-28
description: How to clean site breaking global inline css from WordPress 7
tags:
  - wordpress
  - acf
  - php
  - wordpress 7.0
---

When developing websites thst use WordPress there are some very limited aspects of the default block styles that I use, like text alignment and background colours, but everything has to work within a specific set of design parameters so I disable the default block css using traditional methods like

```php
wp_dequeue_style('wp-block-library');
```

and implement the styles myself in the theme. There's a complex interplay between default and custom as its necessary to synchronise the appearence in the block editor with the appearance in the frontend as much as is possible, which is no mean feat.

In the particular theme i'm building right now there's a feature where I let the editor select a custom gradient background in the block editor using the built in colour picker, and then in the theme I apply a matching svg overlay background motif which saves the editor from having to locate and upload the correct svg image every time, based on the css classname.

This might seem like a whimsical idea, but its in fact an enforced brand on a large website with a very specific design that I need to implement very specifically.

## Breaking Changes

So imagine my delight when I realised that after updating to WordPress 7.0, all of my svg background motifs stopped appearing. The reason was because not only was WordPress now dumping a steaming heap of `global-inline-css` into the `<head>` (since 6.9), it was also littering it with `!important` tags ([the worst frontend code smell of all](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/important)), including `!importants` for all the preset background colour classes, which of course take precedence over my styles which are loaded later on. I can just about stomach default block styles in the frontend as long as they can be overridden using the cascading part of cascading style sheets, but enough is enough.

I've arrived at the following updated head cleaner which comprehensively cleans (almost) _everything_ that WordPress injects into the `<head>` and `<footer>`. Some of the disabled features may be useful depending on your site's requirements so don't copy/paste blindly but mostly its impossible to imagine why anyone would want things like XMLRPC by default. I use the REST API quite often but I prefer to have it off by default and actively make the choice to enable it. Speculationrules may also actually be a useful feature but I'm going to test it out before blindly allowing it.

## The Solution

Include this in functions.php

```php

<?php

// head_cleaner.php

/**
 * Cleans up default WordPress cruft
 * This file will one day be 1 million lines long.
 */
function coderjerk_clean_head(): void
{
    // misc unwanted head cruft
    remove_action('wp_head', 'feed_links');
    remove_action('wp_head', 'feed_links_extra');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link'); // unless you want a Windows Live Writer manifest?
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
    add_filter('enable_post_by_email_configuration', '__return_false'); // has anyone ever used this???

    // technically a clean foot - speculationrules may actually be useful...
    add_filter( 'wp_speculation_rules_configuration', '__return_null' );

    // all this for emojis
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_action('wp_head', 'print_emoji_detection_script');
    add_filter('tiny_mce_plugins', 'coderjerk_disable_emojicons_tinymce'); // while we're at it

    // REST and oembed
    remove_action('wp_head', 'rest_output_link_wp_head');
    remove_action('rest_api_init', 'wp_oembed_register_route');
    add_filter( 'embed_oembed_discover', '__return_false');
    remove_filter('oembed_dataparse', 'wp_filter_oembed_result');
    remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

    // XMLRPC, unless you like Brute Force attacks?
    add_filter('xmlrpc_enabled', '__return_false');
    add_filter('xmlrpc_methods', '__return_empty_array');
    add_filter('pre_update_option_enable_xmlrpc', '__return_false');
    add_filter('pre_option_enable_xmlrpc', '__return_zero');

    remove_action( "wp_enqueue_scripts", "wp_enqueue_global_styles" );

}
add_action('init', 'coderjerk_clean_head');

function coderjerk_deregister_styles(): void
{
    wp_deregister_style( "classic-theme-styles" );
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('classic-theme-styles');
    wp_dequeue_style('global-styles');
    wp_dequeue_style( "wp-components");
}
add_action('wp_print_styles', 'coderjerk_deregister_styles', 100);

function coderjerk_deregister_scripts(): void
{
    wp_deregister_script('wp-embed');
}
add_action('wp_footer', 'coderjerk_deregister_scripts');

// Necessary as of WP 7.0 - removes the inlined CSS which is littered with !importants.
add_filter( 'should_load_separate_core_block_assets', '__return_false', 99 );
```

If you have an existing setup, the important (or `!important`) part is the last line:

```php
add_filter( 'should_load_separate_core_block_assets', '__return_false', 99 );
```

::: info
Want to discuss or comment on this post? You can do it on the [github discussions page](https://github.com/danieldevine/coderjerk/discussions) for this repo.
:::
