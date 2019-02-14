/**
 * Radius of a polygon: radius = s / 2 sin(180/n); s: edge length;
 * Length between edge an center: h = s/2 tan(PI/n); s: edge length; n: edge number;
 * References:
 *  Center of Polygon: https://www.mathopenref.com/polygonradius.html
 *  Interior Angles of a Polygon: https://www.mathopenref.com/polygoninteriorangles.html
 */


import './styles.scss';

import * as P5 from "p5";

const p5 = new P5((p) => {
  let t = 0;
  let speed = 4e-5;
  let q, qq, rot, s;
  let rads = [];


  /**
   * Draw a Polygon
   * @param n {Number}: edge number
   * @param s {Number}: edge length
   */
  function poly(n, s) {
    for (let i = 0; i < n; i++) {
      p.push();
      p.rotate(p.TWO_PI * i / n);
      p.line(-s / 2, rads[n], s / 2, rads[n]);
      p.pop();
    }
  }


  /**
   * Draw dot along a polygon
   * @param N {Number}: edge number
   * @param q {Number}: travel distance since start
   */
  function dot(N, q) {
    q = (q + 0.5 / N) % 1;
    qq = (q * N) % 1;
    rot = p.int(q * N);
    p.push();
    p.rotate(p.TWO_PI * rot / N);
    p.noStroke();
    p.ellipse(p.lerp(s / 2, -s / 2, qq), rads[N], s * .1, s * .1);
    p.pop();
  }


  p.setup = function () {
    s = 90;

    p.createCanvas(600, 600);
    p.colorMode(p.HSB, 1);
    p.strokeWeight(1.5);

    for (let i = 3; i < 16; i++) {
      rads[i] = s / (2 * p.tan(p.PI / i));
    }
    console.log(rads);
  };

  p.draw = function () {
    t = speed * p.millis() - .01;
    p.background(250 / 255);
    p.push();
    p.translate(p.width / 2, p.height / 2);
    for (let i = 15; i > 2; i--) {
      p.stroke(p.map(i, 3, 16, 0, 1), .5, .9);
      poly(i, s);
    }
    for (let i = 3; i < 16; i++) {
      p.fill(0.1);
      dot(i, (16 - i) * t);
    }
  };
});