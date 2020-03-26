import "./styles.less";
import "../../shared/stylesheets/article.scss";
import {feature} from "topojson-client";
import {simpleDic} from "./utils/index.ts";
import {getCovidData} from "./utils/request.ts";

import("d3/dist/d3.min").then(d3 => {
    "use strict";
    Promise.all([
        d3.json("./countries-50m.json"),
        d3.json("./country-code.json"),
        d3.json("./graticule.json")
    ]).then(res => {
        getCovidData(new Date()).then(res => {
            debugger
        })
        let land50 = feature(res[0], res[0].objects.countries);
        let country_code_name_zh = simpleDic(res[1], "ISO3166-1-numeric", "official_name_cn");

        console.log(country_code_name_zh);
        let margin = 0,
            width = window.innerWidth,
            height = window.innerHeight;

        const background_color = "#fff",
            continent_color = "#aaa",
            continent_outline = "#fff",
            continent_highlight_color = "red";

        let svg = d3.select("#world_wide_status")
            .append("svg")
            .style("background", "#fff")
            .style("width", width)
            .style("height", height);
        // .style("cursor", "move");

        let map_elem = svg
            .append("g")
            .attr("class", "map");

        let mask_elem = svg.append("g")
            .attr("class", "map-mask");


        // 经纬度映射
        let projection = d3.geoNaturalEarth1().scale(width / 6).translate([width / 2, height / 2]);
        let path = d3.geoPath().projection(projection);
        path(d3.outline);

        // 国家几何中心列表
        let centroids = land50.features.map(feature => {
            return {
                id: feature.id,
                centroid: path.centroid(feature),
            }
        })

        let centroids_dic = land50.features.reduce((result, item) => {
            result[item.id] = path.centroid(item);
            return result;
        }, {});


        /** ==============================================================================
         * 地图管理对象
         * @type {{init, highlight}}
         * @type {{init, highlight}}
         ================================================================================ */
        let map = (function () {
            let country_group = undefined;
            let countries = undefined;
            let country_names = undefined;

            function genId(str) {
                return "group_id_" + str;
            }

            /**
             * 地图初始化
             * @param geo_data
             * @returns {*}
             */
            function init(geo_data) {
                country_group = map_elem.selectAll("path")
                    .data(geo_data)
                    .enter()
                    .append("g")
                    .attr("id", (d) => {
                        return genId(d.id);
                    });

                mask_elem.selectAll("path")
                    .data(geo_data)
                    .enter()
                    .append("path")
                    .attr("fill", "rgba(0,0,0,0)")
                    .attr("stroke", "rgba(0,0,0,0)")
                    .attr("stroke-width", 0.5)
                    .attr("d", path)
                    .on("mouseenter", highlight)
                    .on("mouseout", unhighlight);

                countries = country_group
                    .append("path")
                    .attr("fill", continent_color)
                    .attr("stroke", continent_outline)
                    .attr("stroke-width", 0.5)
                    .attr("d", path);

                return countries;
            }

            /**
             * 区域高亮
             * @param area_data
             * @param index
             * @param elems
             */
            function highlight(area_data, index, elems) {
                display_name(elems[index], area_data);
                countries.transition()
                    .duration(100)
                    .style("fill", function (map_data) {
                        if (map_data.properties.name === area_data.properties.name) {
                            return continent_highlight_color;
                        }
                        return continent_color;
                    })
            }

            function unhighlight(area_data, index, elems) {
                hide_name(elems[index]);
                countries.transition()
                    .duration(100)
                    .style("fill", continent_color);
            }

            /**
             * 显示区域名称
             */
            function display_name(element, data) {
                map_elem.append("text")
                    .text(country_code_name_zh[data.id])
                    .attr("class", "country_name")
                    .attr("x", centroids_dic[data.id][0])
                    .attr("y", centroids_dic[data.id][1])
                    .style("dominant-baseline", "middle")
                    .style("font-size", "8px")
                    .style("text-anchor", "middle");

            }

            /**
             * 隐藏区域名称
             */
            function hide_name(element) {
                map_elem.selectAll(".country_name").remove();
            }

            /**
             * 重置地图
             */
            function reset() {
                _map.transition(300)
                    .style("fill", fill)
                    .style("stroke", stroke);
            }

            return {
                init,
                reset,
            }
        })();


        /** ==============================================================================
         * 图表绘制主函数
         * @type {{init, highlight}}
         ================================================================================ */
        function draw(geo_json) {
            map.init(geo_json);
            let format = d3.timeParse("%d-%m-%Y (%H:%M h)");
        }


        /** ==============================================================================
         * 对窗口尺寸变化作出响应
         * @type {{init, highlight}}
         ================================================================================ */
        window.onresize = function () {
            width = window.innerWidth;
            height = window.innerHeight;
            window.requestAnimationFrame(function () {
                svg.style("width", width).style("height", height);  // 更新图表大小
            })
        };


        draw(land50.features);
    })

});