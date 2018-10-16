import path from "path";

import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

function getEntry(file) {
  return path.resolve(PATH.rootPath, "public", file);
}

const entry = {
  "main_page": getEntry("mainpage/scripts/main.js"),
  "world_cup": getEntry("world_cup/scripts/main.js"),
  "soddy_circle": getEntry("soddy_circle/scripts/main.js"),
  "canvas_meter": getEntry("canvas_meter/scripts/main.js"),
  "sunflower": getEntry("pages/sunflower/main.js")
};
export const MULTIPAGE_CONFIG = (mode) => {
  // entry: [
  //     "world_cup/scripts/main.js",
  //     "world_cup/stylesheets/style.scss",
  // ].map(file => {
  //     return path.resolve(PATH.rootPath, "public", file);
  // }),
  const IS_DEVELOPMENT = mode === "development";

  let plugins = [
    new ExtractTextPlugin("statics/[name].[hash].css"),
    new ProgressBarPlugin({clear: false}),
    new CopyWebpackPlugin(["public/world_cup/world_countries.json", "public/world_cup/world_cup_geo.tsv",]),
    new CopyWebpackPlugin([{from: "public/resources/images", to: "images"}],),
    new HtmlWebpackPlugin({
      template: "views/world_cup.html",
      chunks: ["vendor", "ui", "world_cup", "shared"],
      filename: "world_cup.html"
    }),
    new HtmlWebpackPlugin({
      template: "views/mainpage.html",
      chunks: ["vendor", "main_page", "shared"],
      filename: "index.html"
    }),
    new HtmlWebpackPlugin({
      template: "views/soddy_circle.html",
      chunks: ["vendor", "soddy_circle", "shared"],
      filename: "soddy_circle.html"
    }),
    new HtmlWebpackPlugin({
      template: "views/canvas_meter.html",
      chunks: ["vendor", "canvas_meter", "shared"],
      filename: "canvas_meter.html"
    }),
    new HtmlWebpackPlugin({
      template: "public/pages/sunflower/index.html",
      chunks: ["vendor", "sunflower", "shared"],
      filename: "sunflower.html"
    })
  ];

  if (!IS_DEVELOPMENT) {
    // Production 环境下清除历史文件。
    plugins.push(new CleanWebpackPlugin(["build"], {
      root: PATH.rootPath
    }),)
  }

  return {
    entry: entry,
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            name: "shared",
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
      path: path.resolve(PATH.rootPath, "build"),
      pathinfo: IS_DEVELOPMENT,
      filename: "statics/[name].[contentHash:10].js"
    },
    plugins: plugins,
    module: moduleConfig,
    devServer: {
      contentBase: path.resolve(PATH.rootPath, "build"),
      host: "0.0.0.0"
    },
    stats: IS_DEVELOPMENT ? "errors-only" : "normal"
  }
};