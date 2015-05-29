var path = require("path");
var webpack = require("webpack");
module.exports = {
    watch: false,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?optional=runtime&sourceMap=inline'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "eslint-loader"
            }
        ]
    },
    resolve: {
        // add bower components and main source to resolved
        root: [path.join(__dirname, "bower_components"),
            path.join(__dirname, 'src/main')]
    },
    entry: {
        'form': ['modules/Form'],
        'modal': ['modules/Modal'],
        'flexcss': ['modules/All']
    },
    output: {
        filename: '[name].min.js',
        libraryTarget: 'umd',
        library: 'FlexCss',
        sourceMapFilename: '[name].min.map'
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.optimize.UglifyJsPlugin()
    ]
};