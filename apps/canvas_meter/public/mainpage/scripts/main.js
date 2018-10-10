import CountDown from "meter";

let ctx = document.querySelector("#circular_indicator").getContext("2d");

const countDown = new CountDown(ctx, 200, 200, 10);
countDown.start(60000)