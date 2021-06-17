const path = require("path")
const webpack = require("webpack")

module.exports = {
    mode: 'development',
    entry: {
        main: ["@babel/polyfill","./src/main.js"]
    },
    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/bundle"
    },
    devServer: {
        stats: {
            colors: true
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
