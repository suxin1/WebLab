const fs = require("fs");
const path = require("path");

// Import .env
const Habitat = require("habitat");
Habitat.load(require("path").resolve(__dirname, "../.env"));
const env = new Habitat();

// Path
const APPDIR = fs.realpathSync(process.cwd());
export const PATH = {
    rootPath: APPDIR,
    publicPath: path.resolve(APPDIR, "public"),
    buildPath: path.resolve(APPDIR, "assets"),
    reactSrc: path.resolve(APPDIR, "public/components/")
};

export default env;