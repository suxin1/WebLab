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
const sine = function (a, b, c, d) {
  return function (t) {
    return a * Math.sin(b * t + c) + d;
  }
};


const singleSineWave = {
  init: function () {
    this.sine_wave_function = sine(20, 5, 0, 0);
    let width = 300,
      height = 150;

    let canvas = canvas_obj($("#singleSineWave")[0]);
    let {ctx, dpi, set, get} = canvas;
    set.style.height(height);
    set.style.width(width);

    // Fix blur on mobile
    set.attr.height(get.style.height() * dpi);
    set.attr.width(get.style.width() * dpi);

    this.ctx = ctx;
    this.width = width;
    this.height = height;

    this.draw();


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
    ctx.rect(0, 0, width, height);
    ctx.fill();

    // Draw Sine Wave
    ctx.save();
    this.drawSine(0);
    ctx.stroke();
    ctx.restore();
  },

  drawSine: function (t) {
    const {ctx, width, height} = this;
    let strokeStyle = ctx.createLinearGradient(0, 0, width, height);
    strokeStyle.addColorStop(0, "red");
    strokeStyle.addColorStop(1, "green");
    ctx.strokeStyle = strokeStyle;

    // Set the initial x and y.
    let x = t,
      y = this.sine_wave_function(this.generalize(x));

    ctx.save();
    ctx.translate(0, height / 2);
    ctx.beginPath();

    ctx.moveTo(0, y);
    for (let x = 0; x < width; x++) {
      let y = this.sine_wave_function(this.generalize(x));
      ctx.lineTo(x, y);
    }
  }
};

$(function () {
  singleSineWave.init();
});