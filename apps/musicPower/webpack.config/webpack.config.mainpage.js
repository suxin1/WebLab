import path from "path";

import env from "./environment";
import {PATH} from "./environment";
import {moduleConfig} from "./basic.config";

const IS_DEVELOPMENT = env.get("NODE_ENV") === "development";

export const MAINPAGE_CONFIG = {
    entry: [
        "homepage/scripts/main.js",
        "homepage/stylesheets/style.scss",
    ]
        .map(file => {
            return path.resolve(PATH.rootPath, "public", file);
        }),

    output: {
        path: path.resolve(PATH.rootPath, "assets/homepage"),
        pathinfo: IS_DEVELOPMENT,
        filename: "scripts/main.js"
    },
    module: moduleConfig
};