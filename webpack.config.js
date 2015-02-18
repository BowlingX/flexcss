var path = require("path");
var webpack = require("webpack");
module.exports = {
    watch: false,
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?experimental&optional=selfContained'}
        ],
        postLoaders: [{ //
            test: /\.js$/,
            exclude: /(test|node_modules|bower_components|test_helpers)\//,
            loader: 'istanbul-instrumenter'
        }]
    },
    resolve: {
        // add bower components and main source to resolved
        root: [path.join(__dirname, "bower_components"),
            path.join(__dirname, 'src/main'),
            path.join(__dirname, 'src/test_helpers')]
    },
    output: {
        filename: 'app.js',
        libraryTarget: 'umd',
        library: 'FlexCss'
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};