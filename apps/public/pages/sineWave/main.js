import $ from "zepto";
/**
 * Sine Parametrize Function A Sin(B t + C) + D
 * @param a {number}
 * @param b {number}
 * @param c {number}
 * @param d {number}
 * @returns {Function}
 * @constructor
 */
const sine = function(a, b, c, d) {
  return function(t) {
    return a * Math.sin(b * t + c) + d;
  }
};


const singleSineWave = {
  init: function() {
    this.ctx = $("#singleSineWave").getContext("2d");
  },
  draw: function() {
    const {ctx} = this;

  }
};