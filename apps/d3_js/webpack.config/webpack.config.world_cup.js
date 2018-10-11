import path from "path";

import env from "./environment";
import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";

export const MAINPAGE_CONFIG = {
    entry: [
        "world_cup/scripts/main.js",
        "world_cup/stylesheets/style.scss",
    ]
        .map(file => {
            return path.resolve(PATH.rootPath, "public", file);
        }),

    output: {
        path: path.resolve(PATH.rootPath, "assets/mainpage"),
        pathinfo: IS_DEVELOPMENT,
        filename: "scripts/main.js"
    },
    module: moduleConfig
};