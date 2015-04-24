---
layout: default
title: Install
weight: 3
---

* Table of Contents
{:toc}

# Install

You have different options to install `FlexCss`. Die easiest way is trough [npm](https://www.npmjs.com/package/flexcss)

## npm
{%highlight javascript %}
npm install --save-dev flexcss
{%endhighlight%}

I recommend to use a build-pipeline with [webpack](http://webpack.github.io) and import only the modules you need.
`FlexCss` uses ES6 Syntax, so you need a transpiler (like [babel](https://babeljs.io/)) before you can import them.

For your convenience I prepared a [sample project](https://github.com/BowlingX/flexcss-sample)
 where everything is setup with gulp.

## Oldschool

### Just give me the files dude

If you just want to try out this framework or have never heard about
[webpack](http://webpack.github.io), [browserify](http://browserify.org/) or `modules` in general
(what is fine but [check](http://www.sitepoint.com/understanding-requirejs-for-effective-javascript-module-loading/)
[it](https://babeljs.io/docs/learn-es6/#modules) out, you will never go back),
I prepared a set of ready-to-use files that you find under `build` in the source directory.

<a href="{{site.downloadLink}}" class="button small secondary"><i class="icon-download"></i> Download FlexCss {{site.flexcssVersion}}</a>

----

## Compatibility

|Browser|Support|
|----|----------:|
|IE 6, 7, 8|<i class="icon-cancel"></i>
|IE 10 & 11|<i class="icon-ok"></i>
|Chrome (latest)|<i class="icon-ok"></i>
|Firefox (latest)|<i class="icon-ok"></i>
|Safari (latest)|<i class="icon-ok"></i>
|Mobile (Android Chrome and iOS Safari)|<i class="icon-ok"></i>

A Detailed list can be found on <a href="http://caniuse.com/#feat=form-validation">caniuse.com</a>. Luckily, iOS and
    the Safari Browser are fully supported by <code>FlexCss.Form</code>.</p>
