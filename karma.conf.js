module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        browsers: ['Chrome'],
        preprocessors: {'**/*.js': ['webpack']},
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
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