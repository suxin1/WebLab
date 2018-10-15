import path from "path";

import ExtractTextPlugin from "extract-text-webpack-plugin";

import env from "./environment";
import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";


export const RESOURCES_CSS_CONFIG = {
    entry: {
        "common": path.resolve(PATH.publicPath, "resources/stylesheets/style.scss")
    },
    output: {
        path: path.resolve(PATH.buildPath, "resources"),
        filename: "stylesheets/[name].css"
    },
    plugins: [
        new ExtractTextPlugin("stylesheets/[name].css"),
    ],
    module: moduleConfig
};


export const RESOURCES_JS_CONFIG = {
    entry: {
        // "google-analytics": path.resolve(PATH.publicPath, "resources/scripts/google-analytics.js")
        "header": path.resolve(PATH.publicPath, "resources/scripts/header.js")
    },

    output: {
        path: path.resolve(PATH.buildPath, "resources"),
        pathinfo: IS_DEVELOPMENT,
        filename: "scripts/[name].js"
    }
};