/************************************************************
 * 解决的问题
 * - 公共库JQuery, D3等和共享代码的加载
 * - 模块化 (AMD/CommonJS/UMD/ES6 Module)
 * - 资源缓存(Caching with hashing)
 * - 按需加载
 * - 首屏加载优化
 *
 * 解决方案:
 *
 * 公共库加载:
 *    webpack4 Code Splitting: https://webpack.js.org/guides/code-splitting/
 *
 * 模块化:
 *    使用 ES6 Module 的 `import *** from ***` 导入模块化代码;
 *    使用 ES6 的异步加载方式 `import()` 加载共享模块和公共库;
 *
 * 按需加载:
 *    结合 ES6 import() 按需加载
 ************************************************************/

import path from "path";

import env from "./environment";
import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";

function getEntry(file) {
  return path.resolve(PATH.rootPath, "public", file);
}

const entry = {
  "main_page": getEntry("mainpage/scripts/main.js"),
  "world_cup": getEntry("world_cup/scripts/main.js")
};
export const WORLDCOP_PAGE_CONFIG = {
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
    filename: "[name]/application.[name].[contentHash:10].js"
  },
  module: moduleConfig
};