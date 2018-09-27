"use strict";
import path from "path";

import ExtractTextPlugin from "extract-text-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";

import {MAINPAGE_CONFIG} from "./webpack.config";
import {RESOURCES_CSS_CONFIG} from "./webpack.config/webpack.config.resources";

// Import .env
import env, {PATH} from "./webpack.config/environment";
const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";

const configs = [
    MAINPAGE_CONFIG,
    RESOURCES_CSS_CONFIG,
].map(config => Object.assign({
    optimization: {
        minimize: !IS_DEVELOPMENT
    },
    devtool: IS_DEVELOPMENT?"cheap-eval-source-map":"",
    plugins: [
        new CleanWebpackPlugin(path.resolve(PATH.buildPath, "assets")),
        new ExtractTextPlugin("stylesheets/style.css"),
        new ProgressBarPlugin({clear: false})
    ],
    watch: IS_DEVELOPMENT,
    stats: IS_DEVELOPMENT ? "errors-only" : "normal"
}, config));


module.exports = configs;
