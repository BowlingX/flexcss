module.exports = function (config) {
    config.set({
        basePath: '.',
        frameworks: ['jasmine-jquery', 'jasmine'],
        browsers: ['Chrome'],
        preprocessors: {'./src/**/*.js': ['webpack']},
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-jasmine-jquery',
            'karma-junit-reporter',
            'karma-coverage',
            require("karma-webpack")
        ],
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        webpack: require('./webpack.config.js')
    });
};