"use strict";
import path from "path";

import ExtractTextPlugin from "extract-text-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

import {MAINPAGE_CONFIG} from "./webpack.config";
import {RESOURCES_CSS_CONFIG} from "./webpack.config/webpack.config.resources";
import {WORLDCOP_PAGE_CONFIG} from "./webpack.config";

// Import .env
import env, {PATH} from "./webpack.config/environment";
const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";


const configs = [
    // MAINPAGE_CONFIG,
    // RESOURCES_CSS_CONFIG,
    WORLDCOP_PAGE_CONFIG,
].map(config => Object.assign({
    optimization: {
        minimize: false
    },
    devtool: "inline-source-map",
    plugins: [
        new CleanWebpackPlugin(path.resolve(PATH.buildPath, "assets")),
        new ExtractTextPlugin("[name]/style.css"),
        new ProgressBarPlugin({clear: false}),
        new CopyWebpackPlugin(["public/world_cup/world_countries.json", "public/world_cup/world_cup_geo.tsv",]),
        new CleanWebpackPlugin(["assets"])
    ],
    watch: true,
    stats: IS_DEVELOPMENT ? "errors-only" : "normal"
}, config));


module.exports = configs;
