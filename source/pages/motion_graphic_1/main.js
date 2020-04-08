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
  let gr = 140;
  let lr = 50;

  function tangentCircle(a1, a2, r, ra) {
    let cosA1 = p.cos(a1);
    let cosA2 = p.cos(a2);
    let sinA1 = p.sin(a1);
    let sinA2 = p.sin(a2);

    let x, y, z, zz, yy;

    x = r * cosA1 * sinA2;
    y = r * sinA1;
    z = r * cosA1 * cosA2;

    zz = r * p.cos(a1 + ra)*cosA2;
    yy = r * p.sin(a1 + ra);

    p.push();
    p.translate(x, -y, z);
    p.rotateY(a2);
    p.rotateX(a1);
    p.stroke(56, p.map(zz, -gr, gr, 255, 0), p.map(zz, -gr, gr, 50, 255));
    p.noFill();
    p.strokeWeight(2);
    p.ellipse(0, 0, lr, lr);
    p.pop();
  }

  p.setup = function () {
    p.createCanvas(600, 600, p.WEBGL);
    p.colorMode(p.HSB, 100);
    p.strokeWeight(1.5);
  };

  p.draw = function () {
    let rt = p.millis() * 4e-4;
    p.rotateX(rt);
    p.smooth();
    p.box();
    p.background(100 / 255);

    for (let i = 0; i < 1; i++) {
      tangentCircle(p.PI /2, 2*p.PI / 8 * i, gr, rt);
    }
    for (let i = 0; i < 8; i++) {
      tangentCircle((p.PI / 6) * 2, 2* p.PI / 8 * i, gr, rt);
    }
    for (let i = 0; i < 8; i++) {
      tangentCircle(p.PI / 6, 2* p.PI / 8 * i, gr, rt);
    }

    for (let i = 0; i < 8; i++) {
      tangentCircle(0, 2*p.PI / 8 * i, gr, rt);
    }

    for (let i = 0; i < 8; i++) {
      tangentCircle(-(p.PI / 6), 2*p.PI / 8 * i, gr, rt);
    }
    for (let i = 0; i < 8; i++) {
      tangentCircle(-p.PI / 6 * 2, 2*p.PI / 8 * i, gr, rt);
    }
    for (let i = 0; i < 1; i++) {
      tangentCircle(-p.PI /2, 2*p.PI / 8 * i, gr, rt);
    }
  };
});