const d3 = require("d3");
import {foo} from "../../shared/scripts/ui/UI";
import "../stylesheets/style.scss";

console.log(foo, "[ From Soddy Circle]")

/**
 * Quadratic formula.
 * @param x1
 * @param x2
 * @param x3
 * @param off
 * @returns {[Number,Number]}
 */
let solveQ2 = function (x1, x2, x3, off) {
  let a = 0.5,
    b = -(x1 + x2 + x3),
    c = x1 * x1 + x2 * x2 + x3 * x3 - 0.5 * (x1 + x2 + x3) * (x1 + x2 + x3) - off,
    d = b * b - 4 * a * c;
  if (Math.abs(d) < 1e-7) d = 0;
  return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
};

let otherCirc = function (circs, level) {
  if (level <= 0) return;

  let fx = function () {
    let b = [], x = [];
    for (let i = 0; i < 4; i++) {
      b[i] = circs[i].curvature();
      x[i] = circs[i].x();
    }
    b[4] = 2 * (b[0] + b[1] + b[2]) - b[3];
    x[4] = (2 * (b[0] * x[0] + b[1] * x[1] + b[2] * x[2]) - b[3] * x[3]) / b[4];
    return x[4];
  };

  let fy = function () {
    let b = [], y = [];
    for (let i = 0; i < 4; i++) {
      b[i] = circs[i].curvature();
      y[i] = circs[i].y();
    }
    b[4] = 2 * (b[0] + b[1] + b[2]) - b[3];
    y[4] = (2 * (b[0] * y[0] + b[1] * y[1] + b[2] * y[2]) - b[3] * y[3]) / b[4];
    return y[4];
  };
  let fr = function () {
    let b = [];
    for (let i = 0; i < 4; i++) {
      b[i] = circs[i].curvature();
    }
    b[4] = 2 * (b[0] + b[1] + b[2]) - b[3];
    if (isNaN(b[4])) {
      return 1000;
    } else {
      return 1 / b[4];
    }
  };
  let c = {
    x: fx, y: fy, r: fr,
    curvature: function () {
      return 1 / this.r()
    },
    level: level
  };

  // Recursion
  let data = [c];
  data.push.apply(data, otherCirc([circs[0], circs[1], c, circs[2]], level - 1));
  data.push.apply(data, otherCirc([circs[0], circs[2], c, circs[1]], level - 1));
  data.push.apply(data, otherCirc([circs[1], circs[2], c, circs[0]], level - 1));
  return data;
};
let x = d3.scaleLinear().domain([-2.1, 2.1]).range([0, 500]);

let level = 4;
let p1 = {x: 1.31, y: 0};
let b0 = -1 / 2;

// Three circle pairwise tangent to one another,
// And one of the three circle enclose the other two circle.
// The following calculation is all in Cartesian Coordinate
let c0 = {
  x: function () {
    return 0
  },
  y: function () {
    return 0
  },
  r: function () {
    return Math.abs(1 / b0)
  },
  curvature: function () {
    return b0
  }
}, c1 = {
  x: function () {
    return p1.x
  },
  y: function () {
    return p1.y
  },
  r: function () {
    // Outer circle radius minus direct distance between Point1 and origin.
    return 2 - Math.sqrt(p1.x * p1.x + p1.y * p1.y)
  },
  curvature: function () {
    return 1 / this.r()
  }
}, c2 = {
  x: function () {
    return Math.sqrt(p1.y * p1.y + p1.x * p1.x) - 2
  },
  y: function () {
    return p1.y
  },
  r: function () {
    return p1.x
  },
  curvature: function () {
    return 1 / this.r()
  }
};

let thirdCircleX = function () {
    let b0 = c0.curvature();
    let b1 = c1.curvature();
    let b2 = c2.curvature();
    let x0 = c0.x();
    let x1 = c1.x();
    let x2 = c2.x();

    let b3 = solveQ2(b0, b1, b2, 0);
    let bx3 = solveQ2(b0 * x0, b1 * x1, b2 * x2, 2);
    return bx3[0] / b3[0];
  },
  thirdCircleY = function () {
    let b0 = c0.curvature();
    let b1 = c1.curvature();
    let b2 = c2.curvature();
    let y0 = c0.y();
    let y1 = c1.y();
    let y2 = c2.y();

    let b3 = solveQ2(b0, b1, b2, 0);
    let by3 = solveQ2(b0 * y0, b1 * y1, b2 * y2, 2);
    return by3[0] / b3[0];
  },
  thirdCircleRadius = function () {
    // k4 = k1^2 + k2^2 + k3^2 ± 2 √k1 k2 + k2 k3 + k3 k1
    // k terms are the curvature of one circle.
    // and 1/k is the circle's radius.
    let b0 = c0.curvature();
    let b1 = c1.curvature();
    let b2 = c2.curvature();
    let b3 = solveQ2(b0, b1, b2, 0);
    return 1 / b3[0];
  };

let c3 = {
  x: thirdCircleX,
  y: thirdCircleY,
  r: thirdCircleRadius,
  curvature: function () {
    return 1 / this.r()
  }
};

let data = [c0, c1, c2, c3];
data.push.apply(data, otherCirc([c0, c1, c2, c3], level));
data.push.apply(data, otherCirc([c3, c1, c2, c0], level));
data.push.apply(data, otherCirc([c0, c2, c3, c1], level));
data.push.apply(data, otherCirc([c0, c1, c3, c2], level));

let vis = d3.select("#vis-box").append("svg")
  .attr("width", 500)
  .attr("height", 500)
  .attr("style", "margin: 20px")

let circles = vis.append("g")
  .attr("class", "circles")
  .selectAll("g")
  .data(data)
  .enter().append("g")

let colours = d3.scaleLinear().domain([0, level]).range(["#fcc", "#ccf", "#cfc"]);

circles.append("circle")
  .attr("class", "circle")
  .attr("fill", function (d) {
    return d.level ? colours(d.level) : "#fff";
  })
  .attr("stroke", "#333");

vis.append("circle")
  .data([p1])
  .attr("class", "circle draggable")
  .attr("r", 7)
  .attr("fill", "#f21d1d")
  .call(d3.drag()
    .on("start", function (d) {
      console.log(d)
      d.origin = x(d.x);
    })
    .on("drag", function (d) {
      d.x = Math.max(.01, Math.min(x.invert(d.origin += d3.event.dx), 2 - .01));
      refreshPositions();
    })
    .on("end", function (d) {
      delete d.origin;
    }));

refreshPositions();

function refreshPositions() {
  vis.selectAll("circle.draggable")
    .attr("cx", function (d) {
      return x(d.x)
    })
    .attr("cy", function (d) {
      return x(d.y)
    })
  vis.selectAll("g.circles circle")
    .attr("cx", function (d) {
      return x(d.x());
    })
    .attr("cy", function (d) {
      return x(d.y());
    })
    .attr("r", function (d) {
      return x(d.r()) - x(0)
    });
}
