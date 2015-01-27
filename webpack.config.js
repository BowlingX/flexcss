var path = require("path");
var webpack = require("webpack");
module.exports = {
    watch: false,
    module: {
        loaders: [
            {test: /\.js$/, loader: '6to5-loader?experimental&runtime'}
        ]
    },
    resolve: {
        root: [path.join(__dirname, "bower_components")]
    },
    output: {
        filename: 'app.js'
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        new webpack.ProvidePlugin({
            to5Runtime: "imports?global=>{}!exports?global.to5Runtime!6to5/runtime"
        })
    ]
};