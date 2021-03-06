/***************************************************************************
 * 特点：
 * - 公共库JQuery, D3等和共享代码的加载
 * - 模块化 (AMD/CommonJS/UMD/ES6 Module)
 * - 资源缓存(Caching with hashing)
 * - 按需加载
 * - 首屏加载优化
 *
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
 *
 * 持久化缓存:
 *    使用文件hash值作为资源文件名的一部分，当内容改变时，对应资源的文件名改变，
 * 并用 HtmlWebpackPlugin 注入所需资源。
 *
 *
 * !!! 注意事项 !!!
 * - 每个页面都有一个 EntryPoint, 在 EntryFile 里面导入需要的CSS。
 *
 * - 想要在多页面下为每个页面注入所依赖的资源，需要配置多个HtmlWebpackPlugin。
 *
 * - 使用 HtmlWebpackPlugin 注入依赖会将所有Bundle文件注入HTML模板，
 *   这当然不是我们想看见的，所以需要在每一个HtmlWebpackPlugin配置里面加上
 *   属性`chunks`.
 *
 * - 如果需要引入处在打包流程以外的文件，可以配置 CopyWebpackPlugin，将该文件
 *   复制到build文件夹，并在HTML模板里添加引用。如果用的是CDN加载，可以配置 externals 属性。
 *
 * - 当引用 node_module 下的库时，该库会被打包到 vendor 包文件里面。
 *
 * - 按需加载需要使用到 ES6 Module 中的 import()。
 *   import("<moduel name>").thne( <module name> => {})
 *
 *  TODO Add Hot Module Replacement to development mode.
 ****************************************************************************/

"use strict";
import path from "path";

import {RESOURCES_CSS_CONFIG} from "./webpack.config/webpack.config.resources";
import {MULTIPAGE_CONFIG} from "./webpack.config";

// Import .env
import env, {PATH} from "./webpack.config/environment";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";


module.exports = (env, argv) => {
    let config = MULTIPAGE_CONFIG(argv.mode, argv);
    if (argv.mode === "development") {
        config.devtool = "inline-source-map";
        config.watch = true;
    }
    if (argv.mode === "production") {
        config.optimization.minimize = true;
    }
    return config;
};