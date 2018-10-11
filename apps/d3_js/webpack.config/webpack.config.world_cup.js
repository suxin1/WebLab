import path from "path";

import env from "./environment";
import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";

export const WORLDCOP_PAGE_CONFIG = {
    entry: [
        "world_cup/scripts/main.js",
        "world_cup/stylesheets/style.scss",
    ].map(file => {
        return path.resolve(PATH.rootPath, "public", file);
    }),
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
        path: path.resolve(PATH.rootPath, "assets/world_cup"),
        pathinfo: IS_DEVELOPMENT,
        filename: "scripts/[name].js"
    },
    module: moduleConfig
};