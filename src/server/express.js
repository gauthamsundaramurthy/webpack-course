import express from "express";
import path from "path";
import WebpackDevMiddleware from "webpack-dev-middleware";

const server = express();
const isProd = process.env.NODE_ENV === "production"

if(!isProd){
    const middleware = require("webpack-dev-middleware");
    const webpack = require("webpack");
    const config = require('../../config/webpack.dev.js');
    const compiler = webpack(config);
    const webpackDevMiddleware = middleware(compiler, config.devServer )
    server.use(webpackDevMiddleware)
    
    const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
    server.use(webpackHotMiddleware);
}

const expressStaticGzip = require("express-static-gzip");
server.use(expressStaticGzip("dist"));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})