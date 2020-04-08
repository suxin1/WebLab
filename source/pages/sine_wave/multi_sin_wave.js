/* global: $ */

import canvas_obj from "./canvas";
import {sin} from "./math";

export const multiSineWave = {
  init: function () {
    let width = 600,
        height = 300;

    let canvas = canvas_obj($("#singleSineWave")[0]);
    let {ctx} = canvas;
    canvas.fixResolution(width, height);

    this.ctx = ctx;
    this.width = width;
    this.height = height;

    if (window.requestAnimationFrame) {
      let animation = () => {
        requestAnimationFrame((t) => {
          this.draw(t);
          animation();
        })
      };
      animation();
    }
  },

  draw: function (t) {
    const {ctx, width, height} = this;
    // Clear Canvas
    ctx.clearRect(0, 0, width, height);

    // Set background color
    ctx.fillStyle = "rgba(10, 20, 60)";
    ctx.fillRect(0, 0, width, height);

    // Draw Sine Wave 1
    ctx.save();
    ctx.translate(0, height/2);
    this.drawSine(t);

    // Draw Sine Wave 2

    ctx.restore();
  },

  drawSine: function (t) {
    const {ctx, width, height} = this;
    let amp_cache = [];
    let amp = height / 3;
    // period = 2 Pi / b; b = 2 Pi / period;
    let b = 2 * Math.PI / (width / 2);

    // pos = v * t; v = 1 pix/s = 1pix / 1000 ms; pos = 1pix / 1000ms * time;
    let pos = t / 1000;
    let pos2 = t / 1000 + 200;

    let strokeStyle = ctx.createLinearGradient(0, height/2, width, height/2);
    strokeStyle.addColorStop(0, "red");
    strokeStyle.addColorStop(1, "blue");

    let greenToYellow = ctx.createLinearGradient(0, 0, width, height);
    greenToYellow.addColorStop(0, "green");
    greenToYellow.addColorStop(1, "yellow");

    ctx.strokeStyle = strokeStyle;

    // Set the initial x and y.
    let scale = (Math.sin(-Math.PI * .5) + 1) * .5;
    let y = t,
        x = sin(amp, b, -pos, 0, 0) * scale;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, 0);
    for (let x = 0; x < width; x++) {
      // Map x to 0 and 2Pi
      let radians = x / width * Math.PI * 2;
      let scale = (Math.sin(radians - Math.PI * .5) + 1) * .5;
      amp_cache.push(scale);

      let y = sin(amp, b, -pos, 0, x);
      ctx.lineTo(x, y * scale);
    }
    ctx.stroke();

    ctx.beginPath();
    // ctx.moveTo(x, y);
    for (let x = 0; x < width; x++) {
      // Map x to 0 and 2Pi
      let radians = x / width * Math.PI * 2;
      let scale = (Math.sin(radians - Math.PI * .5) + 1) * .5;

      let y = sin(amp, b, pos, 0, x);
      ctx.lineTo(x, y * scale);
    }
    ctx.stroke();

    // ctx.strokeStyle = greenToYellow;
    ctx.beginPath();
    ctx.moveTo(amp_cache[0], 0);
    for (let x = 0; x < width; x++) {
      ctx.lineTo(x, -amp_cache[x] * amp);
    }
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, amp_cache[0]);
    for (let x = 0; x < width; x++) {
      ctx.lineTo(x, amp_cache[x] * amp,);
    }
    ctx.stroke();
  }
};
