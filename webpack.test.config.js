var path = require("path");
var webpack = require("webpack");
module.exports = {
    watch: false,
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
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};