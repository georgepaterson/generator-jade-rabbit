# Jade Rabbit generator [![Build Status](https://secure.travis-ci.org/georgepaterson/generator-jade-rabbit.png?branch=master)](https://travis-ci.org/georgepaterson/generator-jade-rabbit)

A generator for [Yeoman](http://yeoman.io) that scaffolds out a front-end Web app with Jade templates.

## Features

* CSS Autoprefixing *(new)*
* Built-in preview server with LiveReload
* Automagically compile Jade & LESS
* Automagically lint your scripts
* Awesome Image Optimization (via OptiPNG, pngquant, jpegtran and gifsicle)
* Mocha Unit Testing with PhantomJS
* Optional - Twitter Bootstrap for LESS
* Optional - Leaner Modernizr builds *(new)*

For more information on what `generator-jade-rabbit` can do for you, take a look at the [Grunt tasks](https://github.com/georgepaterson/generator-jade-rabbit/blob/master/app/templates/_package.json) used in our `package.json`.

## Getting Started

* Make sure you have yo installed: npm install -g yo
* Install: `npm install -g generator-jade-rabbit`
* Run: `yo jade-rabbit`
* Run: `grunt` for building and `grunt serve` for preview [*](#grunt-serve-note)

### Grunt Serve Note

Note: `grunt server` was previously used for previewing in earlier versions of the project and is being deprecated in favor of `grunt serve`.

## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)