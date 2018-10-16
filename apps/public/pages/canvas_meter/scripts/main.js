import "../stylesheets/style.scss";

import {CountDown} from "./meter";
import {Speedometer} from "./meter";
import {Indicator} from "./meter/indicator";

let ctx = document.querySelector("#circular_indicator").getContext("2d");
const countDown = new CountDown(ctx, 200, 200, 10);
countDown.start(60000);

let sctx = document.querySelector("#speedometer").getContext("2d");
const speedometer = Speedometer(sctx, 200, 200, 10, 1000, "速度", "Km/h", 0, 200);
speedometer.setValue(0);
setInterval(() => {
    let value = Math.random() * 200;
    speedometer.setValue(value);
}, 2000);

let ictx = document.querySelector("#indicator").getContext("2d");
const indicator = Indicator(ictx, 200, 200, 10, "里程", "Km/h", "white");
indicator.start(2000, 200);