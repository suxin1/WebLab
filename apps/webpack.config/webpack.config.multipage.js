import path from "path";

import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";
import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import ProgressBarPlugin from "progress-bar-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";

function getEntry(file) {
  return path.resolve(PATH.rootPath, "source", file);
}

const entry = {
  "index": getEntry("pages/index/scripts/main.js"),
  "world_cup": getEntry("pages/world_cup/scripts/main.js"),
  "soddy_circle": getEntry("pages/soddy_circle/scripts/main.js"),
  "canvas_meter": getEntry("pages/canvas_meter/scripts/main.js"),
  "sunflower": getEntry("pages/sunflower/main.js"),
  "sine_wave": getEntry("pages/sine_wave/main.js"),
  "avatar_editor": getEntry("pages/avatar_editor/main.js"),
  "water_fall": getEntry("pages/water_fall/main.js"),
  "poly_dots": getEntry("pages/poly_dots/main.js"),
  "motion_graphic_1": getEntry("pages/motion_graphic_1/main.js"),
};

export const MULTIPAGE_CONFIG = (mode) => {
  const IS_DEVELOPMENT = mode === "development";

  let plugins = [
    new ExtractTextPlugin("statics/[name].[hash].css"),
    new ProgressBarPlugin({clear: false}),
    new CopyWebpackPlugin(["source/resources/world_countries.json", "source/resources/world_cup_geo.tsv",]),
    new CopyWebpackPlugin([{from: "source/resources/images", to: "images"}],),

    // new HtmlWebpackPlugin({
    //   template: "views/index.html",
    //   chunks: ["vendor", "ui", "world_cup", "shared"],
    //   filename: "world_cup.html"
    // }),
    // new HtmlWebpackPlugin({
    //   template: "views/index.html",
    //   chunks: ["vendor", "main_page", "shared"],
    //   filename: "index.html"
    // }),
    // new HtmlWebpackPlugin({
    //   template: "views/index.html",
    //   chunks: ["vendor", "soddy_circle", "shared"],
    //   filename: "soddy_circle.html"
    // }),
    // new HtmlWebpackPlugin({
    //   template: "views/index.html",
    //   chunks: ["vendor", "canvas_meter", "shared"],
    //   filename: "index.html"
    // }),
    // new HtmlWebpackPlugin({
    //   template: "source/pages/sunflower/index.html",
    //   chunks: ["vendor", "sunflower", "shared"],
    //   filename: "sunflower.html"
    // }),
    // new HtmlWebpackPlugin({
    //   template: "source/pages/sine_wave/index.html",
    //   includeSiblingChunks: true,
    //   chunks: ["vendor", "sine_wave", "shared"],
    //   filename: "sine_wave.html"
    // }),
  ];

  let html_plugins = getHTMLPlugins(entry, "pages", "source");
  plugins = plugins.concat(html_plugins);

  if (!IS_DEVELOPMENT) {
    // Production 环境下清除历史文件。
    plugins.push(
        new CleanWebpackPlugin(["build"], {root: PATH.rootPath}),
        new BundleAnalyzerPlugin()
    )
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
            test: /[\\/]node_modules[\\/]/,
            chunks: "initial",
            name: "vendor",
            priority: 1,
          }
        }
      }
    },
    output: {
      path: path.resolve(PATH.rootPath, "build"),
      pathinfo: IS_DEVELOPMENT,
      filename: "statics/[name].[contentHash:12].js"
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


/**
 * 为每个entry配一个 HtmlWebpackPlugin, 方便注入资源。
 *
 * @param modules {Object}: A list that contains all entries.
 * @param root {String}: Output file root.
 * @param assetsRoot {String}: Input file root.
 * @returns {HtmlWebpackPlugin[]}
 */
const getHTMLPlugins = (modules, root, assetsRoot) => {
  return Object.keys(modules).map((entryName) => {
    return new HtmlWebpackPlugin({
      template: `${assetsRoot}/pages/${entryName}/index.html`, //path.resolve(__dirname, "./assets/webpack.template.hbs"),
      filename: `${entryName}.html`,
      chunks: ['vendor', entryName, 'shared'],
    })
  });
};