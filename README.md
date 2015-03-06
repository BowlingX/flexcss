flexcss
=======

[ ![Codeship Status for BowlingX/flexcss](https://img.shields.io/codeship/77646e40-9208-0132-73f3-668629e00ab9/master.svg)](https://codeship.com/projects/61792)
![Dependencies](https://img.shields.io/david/bowlingx/flexcss.svg)

A lightweight Flexbox based mobile-first CSS/Javascript Framework build for [hellofellow.com](https://hellofellow.com).

## Overview
Includes different ready-to-use Components and Widgets that are heavily optimized to be used in a responsive environment.

- A Form Validation framework for HTML5
  - supports custom validation
- Complex Modals
- Image LightBox (based on Modal)
- Tooltip
- Dropdown
- Off-Canvas
- Tabs

All Javascript Components haven been created without external dependencies (almost) and have been written in ES6.

### Polyfills used (provided by babel)

- Object.assign
- Promise

## Browser Support
Due the use of Flexbox and other HTML5 features we are limited to IE 10+.

| Browser | Version |
| -------- | ------- |
| Safari | 7.1+ |
| Google Chrome |  30+ | Android 4.1+ |
| Internet Explorer | 10+| Windows Phone 8 |
| Firefox | 30+|

## Install-Instructions

`bower install flexcss --save`

## Fonts
flexcss includes a custom font set of fontello (http://fontello.com/),
you can disable including this by overwriting `$includeFontello` and set it to `false`

Either way, there is also a mixin called `icon` which you can use to setup a font.

## Development

Requires node to be installed.
run `npm install`, `bower update` and `gulp` to start a local dev server on Port `5757`


