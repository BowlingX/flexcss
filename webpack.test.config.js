/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 David Heidrich, BowlingX <me@bowlingx.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var path = require("path");
var webpack = require("webpack");
module.exports = {
    watch: false,
    module: {
        loaders: [
            {
                include: [
                    path.resolve(__dirname, "src/main"),
                    path.resolve(__dirname, "src/test")
                ],
                test: /\.jsx?$/,
                loader: 'babel-loader?optional=runtime&sourceMap=inline'
            }
        ],
        preLoaders: [
            {
                include: [
                    path.resolve(__dirname, "src/main"),
                    path.resolve(__dirname, "src/test")
                ],
                test: /\.js$/,
                loader: "eslint-loader"
            }
        ],
        postLoaders: [{ //
            test: /\.js$/,
            exclude: /(test|node_modules|bower_components|test_helpers)\//,
            loader: 'istanbul-instrumenter'
        }]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components"),
            path.join(__dirname, 'src/main'),
            path.join(__dirname, 'src/test_helpers')]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};