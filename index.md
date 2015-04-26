---
layout: default
title: Playground
weight: 1
---

# Playground

* Table of Contents
{:toc}


<a class="button" href="https://github.com/BowlingX/flexcss"><i class="icon-github-circled"></i> <span
        class="hide-small">Fork me</span></a>
<a href="https://twitter.com/bowlingx" class="button color-twitter"><i class="icon-twitter"></i> <span
        class="hide-small">@bowlingx</span></a>
<a class="button secondary" href="{{site.downloadLink}}">
    <i class="icon-download-cloud"></i>
    <span
            class="hide-small">{{site.flexcssVersion}}</span></a>

This is FlexCss, a full-featured pattern library built for [hellofellow.com](https://hellofellow.com) with

- low-footprint Javascript components (just ~67kb minified and **~20kB** compressed) that rock
- build with ES6 and sass
- modular
- zero-dependencies

> I created `FlexCss` from scratch because the current web-frameworks available lack my use case of being
    **lightweight** and still solve real-world problems™.

Feel free to drop me [some comments](#disqus_thread).


----

{% include text.md %}

----

{% include slider.md %}

----
{% include buttons.md %}

----

{% include forms.md %}

----

{% include modals.md %}

----

{% include tabs.md %}

----

{% include navigation.md %}

----

{% include dropdowns.md %}

----

{% include tooltips.md %}

----

<script type="application/javascript">
    document.addEventListener('DOMContentLoaded', function () {
        // Some async widgets

        new FlexCss.Widget('AsyncModal').setAsync(function () {
            return new Promise(function (s) {
                setTimeout(function () {
                    s(document.getElementById('async-modal'));
                }, 600);
            });
        });

        new FlexCss.Widget('toggle-photo').setAsync(function () {
            return new Promise(function (s) {
                setTimeout(function () {
                    s(document.getElementById('async-tab'));
                }, 1000);
            });
        });
        // Setup Dropdown
        new FlexCss.Dropdown(document.body, 'Darkener').registerEvents();
        new FlexCss.Widget('async-dropdown-target').setAsync(function () {
            return new Promise(function (r) {
                setTimeout(function () {
                    r(document.getElementById('dropdown-test'));
                }, 2000);
            })
        });
    });
</script>