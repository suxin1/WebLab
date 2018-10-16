/**
 In polar coordinates:
 r = c√n
 θ = n × 137.5°
 */

const d3 = require("d3");
import "./style.scss";

class Slider {
  constructor(node, onChange) {
    this.node = node;
    this.onChange = onChange;

    this.handleChange = this.handleChange.bind(this);

    node.oninput = this.handleChange;
  }

  handleChange() {
    let value = this.node.value;
    this.onChange(value);
  }
}


(function () {
  let radius = 200,
    padding = 5,
    scale = 10,
    n = radius * radius / (scale * scale),
    α = Math.PI * (3 - Math.sqrt(5)),
    p = 137.5 * Math.PI / 180;

  var color = d3.scaleLinear().domain([0, n / 2, n]).range(["#f44545", "#17c3c3", "#b738ce"]);

  function draw(selection) {
    selection
      .attr("cx", function (d) {
        return d[0]
      })
      .attr("cy", function (d) {
        return d[1];
      })
      .attr("r", 5)
  }

  let container = d3.select("#chart")
    .append("svg")
    .attr("width", 2 * (radius + padding))
    .attr("height", 2 * (radius + padding));

  let dots = container
    .append("g")
    .attr("transform", `translate(${radius + padding}, ${radius + padding})`)
    .selectAll("circle")
    .data(d3.range(1, n).map(place));

  dots
    .enter()
    .append("circle")
    .attr("class", "dot")
    .style("fill", function (d, i) {
      return color(i);
    }).call(draw);

  function update (value, scaleValue) {
    if(value) {
      p = value;
    }
    if(scaleValue) {
      scale = scaleValue;
    }

    let data = d3.range(1, n).map(place);
    container.selectAll(".dot").data(data)
      .transition()
      .duration(800).call(draw)
  }

  function place(n) {
    var r = Math.sqrt(n),
      a = n * p;
    // Polar coordinate to Cartesian coordinate
    // x = r * cos(ø), y = r * sin(ø)
    return [scale * r * Math.cos(a), scale * r * Math.sin(a)];
  }

  let animation = setInterval(function() {
    let value = 130.0 + Math.random() * 10;
    update(value);
  }, 2000);

  let pInput = new Slider(document.querySelector("#pvalueInput"), (value) => {
    update(parseFloat(value));
    clearInterval(animation);
  });
  let scaleInput = new Slider(document.querySelector("#scaleInput"), (value) => {
    update(undefined, parseFloat(value));
    clearInterval(animation);
  });
})();