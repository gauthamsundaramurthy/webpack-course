import express from "express";
import path from "path";
import WebpackDevMiddleware from "webpack-dev-middleware";

const server = express();

const middleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const config = require('../../config/webpack.dev.js');
const compiler = webpack(config);
const webpackDevMiddleware = middleware(compiler, config.devServer )
server.use(webpackDevMiddleware)

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);
server.use(webpackHotMiddleware);

const staticMiddleware = express.static("dist");
server.use(staticMiddleware)

server.listen(8080, () => {
    console.log('Server is listening')
})