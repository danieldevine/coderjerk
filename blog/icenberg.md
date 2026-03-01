---
title: "Icenberg: Niche Developer Tooling for WordPress"
author: Dan Devine
date: 2026-02-28
description: How Icenberg turns hard to read ACF template code into clean, BEM-structured output with minimal boilerplate.
tags:
  - wordpress
  - acf
  - php
  - gutenberg
---

There's a surprising lack of good, niche *code* tooling for WordPress *developers* [^0] because so much of the ecosystem comprises of commercially minded plugins aimed at designers, marketers and other hobbyists who are lured in by off-the-shelf themes, full-site editing and over-promising page builders and inevitably come to the point of frustration where they reach for their wallet.[^1]

For those of us who do this for a living, and are [intimately acquainted with WordPress whether we like it or not](/blog/the-complicated-futility-of-wordpress),  we tend to build up our own boilerplate over the years, but the good parts are often so interwoven with  client theme specifics that its hard to seperate them out for others to share. 

That's why we[^2] were excited to open source [Icenberg](https://github.com/maverick-international/Icenberg), which was developed in-house in [Maverick](https://www.maverick-intl.com). A niche solution to our niche problems but we think may just be the WordPress tool that you don't know you need. Yet. 

If you've worked with Advanced Custom Fields in WordPress, you know how it goes. Your block templates start simple, then slowly devolve into a tangle of `get_sub_field()` calls, conditional checks, wrapper divs, and inconsistent class names. Multiply that across a site with twenty flexible content layouts and you've got a maintenance headache. 

[Icenberg](https://packagist.org/packages/mvrk/icenberg) is a Composer library that fixes this. It takes your ACF fields and renders them as properly structured, BEM-classed HTML, handling the type detection, null checks, and wrapping that you'd otherwise write by hand, over and over again.

## The Problem

Here's what a typical ACF flexible content template looks like without Icenberg:

```php
<?php
$heading = get_sub_field('hero_heading');
$content = get_sub_field('hero_content');
$image = get_sub_field('hero_image');
?>

<?php if ($heading) : ?>
    <div class="block--hero__hero-heading">
        <?php echo $heading; ?>
    </div>
<?php endif; ?>

<?php if ($content) : ?>
    <div class="block--hero__hero-content">
        <?php echo $content; ?>
    </div>
<?php endif; ?>

<?php if ($image) : ?>
    <div class="block--hero__hero-image">
        <?php
        if (is_array($image)) {
            echo wp_get_attachment_image($image['id'], 'full');
        } elseif (filter_var($image, FILTER_VALIDATE_URL)) {
            echo "<img src='{$image}' alt=''>";
        } else {
            echo wp_get_attachment_image($image, 'full');
        }
        ?>
    </div>
<?php endif; ?>
```

That's three fields. Imagine thirty. Now imagine maintaining consistent class naming across all of them.

## The Icenberg Way

Here's the same thing with Icenberg:

```php
<?php
use MVRK\Icenberg\Icenberg;

$ice = new Icenberg(get_row_layout());

$ice->the_element('hero_heading');
$ice->the_element('hero_content');
$ice->the_element('hero_image');
```

That's it. Icenberg knows the field types from ACF's field objects. It handles the image format detection, the null checks, the BEM class generation, all of it. Each call produces the same wrapped, classed HTML as the verbose version above.

## Getting Started

Install via Composer:

```bash
composer require mvrk/icenberg
```

Make sure your WordPress theme autoloads Composer dependencies in `functions.php`:

```php
$composer_path = $_SERVER['DOCUMENT_ROOT'] . '/../vendor/'; // or wherever you keep it

if (file_exists($composer_path)) {
    require_once $composer_path . 'autoload.php';
}
```

You'll need ACF Pro installed. That's the only hard requirement. Well, and WordPress too sadly.

## Using Icenberg in Flexible Content Blocks

The most common use case is inside an ACF flexible content loop. You're already iterating rows with `have_rows()` , Icenberg just cleans up what happens inside each one.

```php
if (have_rows('content_blocks')) :
    while (have_rows('content_blocks')) : the_row();
        get_template_part('blocks/' . get_row_layout());
    endwhile;
endif;
```

Then in your individual block template (e.g. `blocks/testimonial.php`):

```php
<?php
use MVRK\Icenberg\Icenberg;

$ice = new Icenberg(get_row_layout());

$ice->the_element('quote', 'blockquote');
$ice->the_element('attribution', 'span');
$ice->the_element('portrait');
```

The second argument to `the_element()` is the HTML tag, it defaults to `div` but you can use whatever is semantically appropriate.

This generates output like:

```html
<blockquote class="block--testimonial__quote">
    To be or not to be, that is the question.
</blockquote>
<span class="block--testimonial__attribution">
    Shakespeare
</span>
<div class="block--testimonial__portrait">
    <img src="..." alt="...">
</div>
```

All class names follow BEM conventions automatically. Underscores in field names become hyphens in classes.

## Using with Gutenberg Blocks

For ACF Gutenberg blocks, Icenberg provides a `wrap()` method that mirrors the outer wrapper WordPress generates in the block editor, so your frontend and backend styling stay in sync:

```php
<?php
use MVRK\Icenberg\Icenberg;

$icenberg = new Icenberg(strtolower($block['title']));

$icenberg::wrap(
    [
        $icenberg->get_element('heading', 'h2'),
        $icenberg->get_element('body_text'),
        $icenberg->get_element('cta_link', 'a'),
    ],
    $block,
    true
);
```
::: info
Note the use of `get_element()` (returns) rather than `the_element()` (echoes) the wrap method needs the rendered strings as an array.
:::

You can also scaffold new Gutenberg blocks from the command line if you have WP-CLI:

```bash
wp icenberg block testimonial quote attribution portrait
```

This generates a ready-to-go block folder with `block.json`, a PHP template, and a SCSS file, plus an empty ACF field group registered and waiting.[^3]

## Grouping Elements with `enclose()`

When you need to group multiple fields inside a container without dropping out of PHP, use `enclose()`:

```php
$ice->enclose('content', [
    $ice->get_element('heading', 'h2'),
    $ice->get_element('body_text'),
    $ice->get_element('cta_link', 'a'),
]);
```

Output:

```html
<div class="block--hero__content">
    <h2 class="block--hero__heading">Welcome</h2>
    <div class="block--hero__body-text"><p>Lorem ipsum...</p></div>
    <a class="block--hero__cta-link" href="...">Learn more</a>
</div>
```

You can mix Icenberg elements with raw HTML strings in the array, anything that can be stored as a variable works.

## Conditional Logic with `field()`

Icenberg provides a chainable API for field-level conditionals, so you don't need to separately fetch and check values:

```php
// Check a field's value
if ($ice->field('theme')->is('dark')) {
    echo '<div class="dark-mode">';
}

// Numeric comparisons
if ($ice->field('column_count')->greaterThan(3)) {
    $ice->the_element('overflow_notice');
}

// Get a rendered element via the chain
echo $ice->field('sidebar_content')->get('aside');
```

## Filtering Groups and Repeaters

Sometimes a group or repeater contains fields you don't want to render. Rather than writing loops and conditionals, use `prune()` to exclude or `only()` to whitelist:

```php
// Render a group but skip the internal-only fields
echo $ice->field('team_member')
    ->prune(['internal_notes', 'admin_rating'])
    ->get();

// Only render specific fields from a group
echo $ice->field('team_member')
    ->only(['name', 'role', 'photo'])
    ->get();
```

## Options Pages and Global Fields

ACF option fields work with the same API, just pass the options identifier as a comma-separated string:

```php
// Render a global field from an options page
$ice->the_element('company_logo, options');

// Use in conditionals
if ($ice->field('maintenance_mode, options')->is(true)) {
    echo '<div class="maintenance-banner">Site under maintenance</div>';
}
```

## Raw Values

If you just need the field value without any HTML wrapping for use in logic, attributes, or custom rendering use `value()`:

```php
$bg_color = $ice->value('background_colour');
echo "<section style='background: {$bg_color};'>";
```

## BEM Modifiers

Every rendering method accepts a modifiers array for generating BEM modifier classes:

```php
$ice->the_element('card_title', 'h3', ['featured', 'large']);
```

Output:

```html
<h3 class="block--cards__card-title block--cards__card-title--featured block--cards__card-title--large">
    Featured Article
</h3>
```

You can also pass key-value pairs where the modifier is only applied if the value is truthy:

```php
$ice->the_element('card_title', 'h3', [
    'featured' => $is_featured,
    'large' => $size === 'lg',
]);
```

## Block Settings as CSS Classes

If you use an ACF group for block-level settings (background colour, padding, width, etc.), the `settings()` method converts them into BEM modifier classes:

```php
$block_settings = get_sub_field('block_settings');
$settings = $ice->settings($block_settings, ['extra-class']);

echo "<div {$settings}>";
    $ice->the_element('content');
echo "</div>";
```

This outputs something like:

```html
<div class="extra-class block_padding-top--300 block_theme--dark">
    ...
</div>
```

Icenberg doesn't try to replace ACF or reinvent WordPress templating. It handles the tedious, repetitive part, the bit between "I have a field value" and "it's rendered as properly structured HTML with consistent class names." 
If you work on sites of sufficient complexity, the gains really stack up. Especially when you have to come back to the site to add another couple of blocks in a years time. Less of the code you have to read is markup, and the BEM is taken care of so styling consistency is enforced.

```bash
composer require mvrk/icenberg
```

The source is on [Packagist](https://packagist.org/packages/mvrk/icenberg) as `mvrk/icenberg` and [github](https://github.com/maverick-international/Icenberg)

There's even a vscode [snippets extension](https://github.com/danieldevine/icenberg-snippets-vscode) to speed things up even more. I'm sure you could even persuade an LLM to use it if you're that way inclined. 

We plan to get this to a proper release soon and to add some new features, especially around the ACF blocks side. Give it a try!

::: info
Want to discuss or comment on this post? You can do it on the [github discussions page](https://github.com/danieldevine/coderjerk/discussions) for this repo.
:::

[^0]: I'm not for a second saying there isn't **any** good wordpress tooling, just not as much as there *should* be given the number of devs who work with it every day.

[^1]:I say this from a place of empathy as in a previous life I was a designer looking for every way to build a site other than write code, but the only way to get a WordPress website looking and feeling like you want it to is to write some php (and/or some JavaScript if you prefer). It is incredibly enjoyable once you've put in the time, the 'magic' melts away and the possibilities really open up. 

[^2]: Me and my colleague Cathal Toomey

[^3]: When time allows we'll open source a sample theme which is set up in this structure to make it all a little clearer to understand.