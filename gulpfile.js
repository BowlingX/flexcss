/*
 * Build file for FlexCSS
 * @author David Heidrich (me@bowlingx.com)
 */

var gulp = require('gulp');

// serve all plugins under $ and remove gulp prefix
var $ = require('gulp-load-plugins')({
    replaceString: /^gulp(-|\.)([0-9]+)?/
});

// other Libraries
var
    del = require('del'),
    autoprefixer = require('autoprefixer-core'),
    es = require("event-stream"),
    order = require('gulp-order'),
    argv = require('yargs').argv,
    csswring = require('csswring'),
    webpackConfig = require("./webpack.config.js");

var sass = require('gulp-sass');

var paths = {
    exports: ['src/export.js'],
    tests: ['src/test/**/*.js'],
    images: ['assets/img/**/*', 'themes/img/**/*'],
    fonts: 'assets/fonts/**/*',
    sassThemes: 'examples/**/*.scss',
    sassLib: 'assets/**/*.scss',
    // Karma config file
    karmaConfig: 'karma.conf.js'
};

var onError = function (err) {
    $.util.beep();
    console.log(err);
    // continue:
    this.emit('end');
};

// cleans build directory
gulp.task('clean', function (cb) {
    del(['build'], cb);
});

// all scripts with vendor dependencies
gulp.task('scriptsWithDependencies', ['clean'], function () {
    gulp.start('compileScriptsWithDependencies');
});

gulp.task('compileScriptsWithDependencies', function () {
    var path = require("path");

    var config = Object.create(webpackConfig);
    config.watch = true;

    return gulp.src(paths.exports)
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.webpack(config))
        .pipe(gulp.dest('build/js'))
});

// setup tests
gulp.task('test', function () {
    return gulp.src('./doesNotExists')
        .pipe($.karma({
            configFile: paths.karmaConfig,
            action: argv.watch ? 'watch' : 'run',
            reporters: argv.writeTestResults ? ['progress', 'junit', 'coverage'] : ['progress', 'coverage']
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            $.util.beep();
            throw err;
        });
});


// Copy all static images
gulp.task('images', ['clean'], function () {
    return gulp.start('imagesReload');
});

gulp.task('imagesReload', function () {
    return gulp.src(paths.images)
        // Pass in options to the task
        .pipe($.imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build/img'));
});

gulp.task('fonts', ['clean'], function () {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('sass', ['clean'], function () {
    return gulp.start('compileSass');
});

// we got a bug here with the sourcemaps: https://github.com/floridoo/gulp-sourcemaps/issues/60
gulp.task('compileSass', function () {
    var processors = [
        autoprefixer({
            // include IE 9:
            browsers: ['last 4 versions'],
            cascade: false
        }),
        csswring
    ];

    return gulp.src(paths.sassThemes)
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe($.sourcemaps.init())
        .pipe($.sass())
        .pipe($.postcss(processors))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('build/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    // scripts and images
    // sass
    gulp.watch(paths.sassThemes, ['compileSass']);
    gulp.watch(paths.sassLib, ['compileSass']);
    gulp.watch(paths.images, ['imagesReload']);

});

// webserver
gulp.task('webserver', function () {
    $.connect.server({
        port: 5757,
        livereload: true
    });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'fonts', 'images', 'sass', 'scriptsWithDependencies', 'webserver']);

// distribution task
gulp.task('dist', ['scripts', 'fonts', 'images', 'sass']);