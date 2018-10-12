
import path from "path";

import env from "./environment";
import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";

function getEntry(file) {
    return path.resolve(PATH.rootPath, "public", file);
}

const entry = {
    "main_page": getEntry("mainpage/scripts/main.js"),
    "world_cup": getEntry("world_cup/scripts/main.js")
};
export const MULTIPAGE_CONFIG = {
    // entry: [
    //     "world_cup/scripts/main.js",
    //     "world_cup/stylesheets/style.scss",
    // ].map(file => {
    //     return path.resolve(PATH.rootPath, "public", file);
    // }),
    entry: entry,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                    name: "commons",
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0 // This is example is too small to create commons chunks
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    output: {
        path: path.resolve(PATH.rootPath, "assets"),
        pathinfo: IS_DEVELOPMENT,
        filename: "[name]/[name].[contentHash:10].js"
    },
    plugins: [
        new CleanWebpackPlugin(["assets"], {
            root: PATH.rootPath
        }),
        new ExtractTextPlugin("[name]/style.css"),
        new ProgressBarPlugin({clear: false}),
        new CopyWebpackPlugin(["public/world_cup/world_countries.json", "public/world_cup/world_cup_geo.tsv",]),
        new CleanWebpackPlugin(["assets"]),
        new HtmlWebpackPlugin({
            template: "views/world_cup.html",
            chunks: ["vendor", "world_cup", "commons"],
            filename: "world_cup.html"
        }),
        new HtmlWebpackPlugin({
            template: "views/mainpage.html",
            chunks: ["vendor", "main_page", "commons"],
            filename: "index.html"
        })
    ],
    module: moduleConfig
};