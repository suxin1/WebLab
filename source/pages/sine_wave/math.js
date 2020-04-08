/**
 * Sine Parametrize Function A Sin(B t + C) + D
 * @param a {number}
 * @param b {number}
 * @param c {number}
 * @param d {number}
 * @returns {Function}
 * @constructor
 */
export const sin = function (a, b, c, d, t) {
  return a * Math.sin(b * t + c) + d;
};
