import "../../shared/stylesheets/common/style.scss";
import "../../shared/stylesheets/article.scss";
import "normalize.css";

import {multiSineWave} from "./multi_sin_wave";
import {addLogged, add} from "./script";

import("zepto").then($ => {
  multiSineWave.init();
});