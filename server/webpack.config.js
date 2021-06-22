const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = env => {
    const isProduction = env === "production"

    return {
        entry: './index.js',
        target: "node",
        externals: [nodeExternals()],
        output: {
            path: path.join(__dirname, "dist"),
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            }]
        },
        devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.join(__dirname, "dist")
        }
    }
}