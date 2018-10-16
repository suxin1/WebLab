/*eslint no-undef: 2*/

/**
 * Created by Suxin(suxin1@live.com) in 2018/8/2.
 */

const d3 = require("d3");
import "../stylesheets/style.scss";
import "../../../shared/stylesheets/article.scss";
/**
 * @param start {Number}
 * @param end {Number}
 * @param step {Number}
 * @returns {Array}
 */
function populate_year(start, end, step) {
  let years = [];
  for (let year = start; year <= end; year += step) {
    if (year === 1942 || year === 1946) {
      continue;
    }
    years.push(year);
  }
  return years;
}


(function () {
  "use strict";
  let margin = 0,
    width = 904 - margin,
    height = 600 - margin;

  let svg = d3.select("#vis-box").append("svg")
    .style("background", "#a8bcc7")
    .style("border", "1px solid #000")
    .attr("width", width + margin)
    .attr("height", height + margin)
    .append("g")
    .attr("class", "map");


  // 用来将经纬度转换为屏幕上的像素。
  let projection = d3.geoMercator().scale(150).translate([width / 2, height / 2 + 100]);
  let path = d3.geoPath().projection(projection);


  /**
   * Tooltip controller
   * @type {{update, off, move}}
   */
  let tooltip = (function () {
    let dom = d3.select("#vis-box").append("div").attr("class", "tooltip");
    let offset_x = 5;
    let offset_y = 5;

    function calculatePos(x, y) {

      let viewPortWidth = window.innerWidth,
        viewPortHeight = window.innerHeight,
        domWidth = dom.node().offsetWidth,
        domHeight = dom.node().offsetHeight;

      if (x + domWidth > viewPortWidth) {
        x -= (domWidth + offset_x);
      } else {
        x += offset_x;
      }
      if (y + domHeight > viewPortHeight) {
        y -= (domHeight + offset_y);
      } else {
        y += offset_y;
      }
      return [x, y];
    }

    function update(x, y, data) {
      on();
      dom.transition()
        .duration(500)
        .ease(d3.easeCubicOut)
        .style("opacity", .7);

      dom.html(
        `<h2>Home:${data.value.home}</h2>
          <ul>
            <li>Year:${data.key}</li>
            <li>Total Attendance: ${data.value.attendance}</li>
            <li>Team Number: ${data.value.teamNumber}</li>
          </ul>`
      );

      let pos = calculatePos(x, y);
      dom.style("left", (pos[0]) + "px")
        .style("top", (pos[1]) + "px");
    }

    function move(x, y) {
      let pos = calculatePos(x, y);
      dom.style("left", (pos[0]) + "px")
        .style("top", (pos[1]) + "px");
    }

    function off() {
      dom.transition()
        .duration(300)
        .on("end", function () {
          dom.style("display", "none");
        })
        .ease(d3.easeCubicOut)
        .style("opacity", .0);
    }

    function on() {
      dom.style("display", "block");
    }

    return {
      update,
      off,
      move
    };
  }());


  /**
   * 地图
   * Call init with geoJson data to initialization the map.
   * @type {{init, highlight}}
   */
  let map = (function () {
    let _map = undefined,
      fill = "#f3e3d4",
      stroke = "#a8bcc7";

    function init(geo_data) {
      _map = svg.selectAll("path")
        .data(geo_data.features)
        .enter()
        .append("path")
        .attr("fill", fill)
        .attr("stroke", stroke)
        .attr("stroke-width", 0.5)
        .attr("d", path);
      return _map;
    }

    function highlight(set) {
      _map.transition()
        .duration(500)
        .style("fill", function (d) {
          if (set.has(d.properties.name)) {
            return "rgb(212, 88, 88)";
          }
          return fill;
        });
      return _map;
    }

    function reset() {
      _map.transition()
        .duration(300)
        .style("fill", fill)
        .style("stroke", stroke);
    }

    return {
      init,
      highlight,
      reset
    };
  }());


  let point = (function () {
    let _radius = undefined;
    let _key_func = undefined;
    let _parent = undefined;
    let _point = undefined;
    let _eventHandler = undefined;

    function init(data, key_func, eventHandler) {
      _key_func = key_func;
      _eventHandler = eventHandler;
      // Find min and max
      let extent = d3.extent(data, function (d) {
        return d.value["attendance"];
      });
      _radius = d3.scaleSqrt().domain(extent).range([4, 20]);

      _parent = svg.append("g")
        .attr("class", "bubbles");

      _point = _parent.selectAll("circle")
        .data(data, _key_func)
        .enter()
        .append("circle")
        .attr("r", d => _radius(d.value.attendance))
        .attr("cx", d => d.value.x)
        .attr("cy", d => d.value.y);

      _eventHandler && _eventHandler(_point);
      return _point;
    }

    function render(data) {
      let point = _parent.selectAll("circle").data(data, _key_func);
      // debugger
      point.exit().remove();

      _point = point.enter()
        .append("circle")
        .merge(point)
        .attr("cx", d => d.value.x)
        .attr("cy", d => d.value.y)


      _point.transition()
        .duration(500)
        .attr("r", d => _radius(d.value.attendance));
      _eventHandler && _eventHandler(_point);
      return _point;
    }

    return {
      init,
      render
    }
  }());

  /**
   * Get nested data
   * @param data
   * @returns {*}
   */
  function nestedData(data) {
    // 数据聚合
    return d3.nest()
      .key(function (d) {
        return d["date"].getUTCFullYear();
      })
      .rollup(function (group) {
        let total = d3.sum(group, function (d) {
          return d["attendance"];
        });

        let coords = group.map(function (d) {
          return projection([+d["long"], +d["lat"]])
        });

        let center_x = d3.mean(coords, function (d) {
          return d[0];
        });
        let center_y = d3.mean(coords, function (d) {
          return d[1];
        });

        let team = d3.set();
        group.forEach(function (d) {
          team.add(d["team1"]);
          team.add(d["team2"]);
        });

        return {
          attendance: total,
          x: center_x,
          y: center_y,
          teams: team,
          home: group[0].home,
          year: group[0].year,
          teamNumber: team.size()
        }
      })
      .entries(data);
  }


  // 根据世界杯历史数据在地图上标出位置
  function plot_point(data) {
    // This is the main data we need.
    let nested = nestedData(data);

    point.init(nested.sort(function (a, b) {
      return b.value.attendance - a.value.attendance;
    }), function (d) {
      return d["key"];
    }, function (points) {
      points
        .on("mouseover", function (d) {
          tooltip.update(d3.event.pageX, d3.event.pageY, d);
          let filtered = nested.filter(function (d1) {
            return new Date(d1["key"]).getFullYear() === parseInt(d.key);
          });
          map.highlight(filtered[0].value["teams"]);
        })
        .on("mousemove", function (d) {
          tooltip.move(d3.event.pageX, d3.event.pageY)
        })
        .on("mouseout", function (d) {
          tooltip.off();
          map.reset();
        });
    });


    let years = populate_year(1930, 2015, 4);

    d3.select("#vis-box")
      .append("ul")
      .attr("class", "button__list-row")
      .selectAll("li")
      .data(years)
      .enter()
      .append("li")
      .attr("class", "button")
      .append("button")
      .text(function (d) {
        return d;
      })
      .on("mouseover", function (d) {
        let filtered = nested.filter(function (d1) {
          return new Date(d1["key"]).getFullYear() === d;
        });

        map.highlight(filtered[0].value["teams"]);
        point.render(filtered);
      })
      .on("mouseout", function () {
        map.reset();
        point.render(nested)
          .on("mouseover", function (d) {
            tooltip.update(d3.event.pageX, d3.event.pageY, d);
            let filtered = nested.filter(function (d1) {
              return new Date(d1["key"]).getFullYear() === parseInt(d.key);
            });
            map.highlight(filtered[0].value["teams"]);
          })
          .on("mousemove", function (d) {
            tooltip.move(d3.event.pageX, d3.event.pageY)
          })
          .on("mouseout", function (d) {
            tooltip.off();
            map.reset();
          });
      });
  }

  function draw(geo_json) {
    map.init(geo_json);
    let format = d3.timeParse("%d-%m-%Y (%H:%M h)");

    d3.tsv("./world_cup_geo.tsv", function (d) {
      let date = format(d["date"]);
      d["attendance"] = +d["attendance"];
      d["date"] = date;
      return d;
    }).then(data => {
      plot_point(data);
    });
  }

  // 获取geoJson地图数据
  d3.json("./world_countries.json").then(data => {
    draw(data);
  });
})();
