import $ from "zepto";
import canvas_obj from "./canvas";


/**
 * Sine Parametrize Function A Sin(B t + C) + D
 * @param a {number}
 * @param b {number}
 * @param c {number}
 * @param d {number}
 * @returns {Function}
 * @constructor
 */
const sine = function (a, b, c, d, t) {
    return a * Math.sin(b * t + c) + d;
};


const singleSineWave = {
  init: function () {
    let width = 300,
      height = 150;

    let canvas = canvas_obj($("#singleSineWave")[0]);
    let {ctx, dpi, set, get} = canvas;
    set.style.height(height);
    set.style.width(width);

    // Fix blur on mobile
    set.attr.height(get.style.height() * dpi);
    set.attr.width(get.style.width() * dpi);
    ctx.scale(dpi, dpi);

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

  generalize: function (x) {
    return x * Math.PI / 180;
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
    ctx.translate(0, height / 2);
    this.drawSine(t);

    // Draw Sine Wave 2

    ctx.restore();
  },

  drawSine: function (t) {
    const {ctx, width, height} = this;
    let amp_cache = [];

    let strokeStyle = ctx.createLinearGradient(0, 0, width, height);
    strokeStyle.addColorStop(0, "red");
    strokeStyle.addColorStop(1, "green");

    let greenToYellow = ctx.createLinearGradient(0, 0, width, height);
    greenToYellow.addColorStop(0, "green");
    greenToYellow.addColorStop(1, "yellow");

    ctx.strokeStyle = strokeStyle;

    // pos = v * t;
    // 1 pix/s = 1pix / 1000 ms;
    // pos = 1pix / 1000ms * time;
    let pos = t / 1000;

    // pos2 = v2 * t; v2 = 2 pix/s = 2pix / 1000ms;
    let pos2 = t / 500;

    // Set the initial x and y.
    let scale = (Math.sin(-Math.PI * .5) + 1) * .5;
    let x = t,
      y = sine(40, 4, -pos, 0, this.generalize(0)) * scale;

    ctx.beginPath();

    ctx.moveTo(0, y);
    for (let x = 0; x < width; x++) {
      // Map x to 0 and 2Pi
      let radians = x / width * Math.PI  * 2;
      let scale = (Math.sin(radians - Math.PI * .5) + 1) * .5;
      amp_cache.push(scale);

      let y = sine(40, 4, -pos, 0, this.generalize(x));
      ctx.lineTo(x, y * scale);
    }
    ctx.stroke();

    ctx.moveTo(x, y);
    for (let x = 0; x < width; x++) {
      // Map x to 0 and 2Pi
      let radians = x / width * Math.PI  * 2;
      let scale = (Math.sin(radians - Math.PI * .5) + 1) * .5;
      amp_cache.push(scale);

      let y = sine(40, 4, pos, 0, this.generalize(x));
      ctx.lineTo(x, y * scale);
    }
    ctx.stroke();

    ctx.strokeStyle = greenToYellow;
    ctx.beginPath();
    ctx.moveTo(0, amp_cache[0]);
    for(let x =0;x<width;x++) {
      ctx.lineTo(x, -amp_cache[x]*40);
    }
    ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(0, amp_cache[0]);
    // for(let x =0;x<width;x++) {
    //   ctx.lineTo(x, amp_cache[x]*40);
    // }
    // ctx.stroke();
  }
};

$(function () {
  singleSineWave.init();
});