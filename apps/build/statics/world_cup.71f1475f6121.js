!function(e){function t(t){for(var r,u,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)u=i[f],o[u]&&d.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={4:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a,i=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=function(e){return u.p+"statics/"+({}[e]||e)+"."+{2:"a64e1f2a82ce"}[e]+".js"}(e),a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,i.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=c;a.push([27,0,1]),n()}({27:function(e,t,n){"use strict";n.r(t);n(95),n(90);n.e(2).then(n.t.bind(null,1,7)).then(function(e){var t=e.select("#vis-box").append("svg").style("background","#a8bcc7").style("border","1px solid #000").attr("width",904).attr("height",600).append("g").attr("class","map"),n=e.geoMercator().scale(150).translate([452,400]),r=e.geoPath().projection(n),o=function(){var t=e.select("#vis-box").append("div").attr("class","tooltip"),n=5,r=5;function o(e,o){var a=window.innerWidth,u=window.innerHeight,i=t.node().offsetWidth,c=t.node().offsetHeight;return e+i>a?e-=i+n:e+=n,o+c>u?o-=c+r:o+=r,[e,o]}return{update:function(n,r,a){t.style("display","block"),t.transition().duration(500).ease(e.easeCubicOut).style("opacity",.7),t.html("<h2>Home:".concat(a.value.home,"</h2>\n          <ul>\n            <li>Year:").concat(a.key,"</li>\n            <li>Total Attendance: ").concat(a.value.attendance,"</li>\n            <li>Team Number: ").concat(a.value.teamNumber,"</li>\n          </ul>"));var u=o(n,r);t.style("left",u[0]+"px").style("top",u[1]+"px")},off:function(){t.transition().duration(300).on("end",function(){t.style("display","none")}).ease(e.easeCubicOut).style("opacity",0)},move:function(e,n){var r=o(e,n);t.style("left",r[0]+"px").style("top",r[1]+"px")}}}(),a=function(){var e=void 0,n="#f3e3d4",o="#a8bcc7";return{init:function(a){return e=t.selectAll("path").data(a.features).enter().append("path").attr("fill",n).attr("stroke",o).attr("stroke-width",.5).attr("d",r)},highlight:function(t){return e.transition().duration(500).style("fill",function(e){return t.has(e.properties.name)?"rgb(212, 88, 88)":n}),e},reset:function(){e.transition().duration(300).style("fill",n).style("stroke",o)}}}(),u=function(){var n=void 0,r=void 0,o=void 0,a=void 0,u=void 0;return{init:function(i,c,l){r=c,u=l;var s=e.extent(i,function(e){return e.value.attendance});return n=e.scaleSqrt().domain(s).range([4,20]),o=t.append("g").attr("class","bubbles"),a=o.selectAll("circle").data(i,r).enter().append("circle").attr("r",function(e){return n(e.value.attendance)}).attr("cx",function(e){return e.value.x}).attr("cy",function(e){return e.value.y}),u&&u(a),a},render:function(e){var t=o.selectAll("circle").data(e,r);return t.exit().remove(),(a=t.enter().append("circle").merge(t).attr("cx",function(e){return e.value.x}).attr("cy",function(e){return e.value.y})).transition().duration(500).attr("r",function(e){return n(e.value.attendance)}),u&&u(a),a}}}();function i(t){var r=function(t){return e.nest().key(function(e){return e.date.getUTCFullYear()}).rollup(function(t){var r=e.sum(t,function(e){return e.attendance}),o=t.map(function(e){return n([+e.long,+e.lat])}),a=e.mean(o,function(e){return e[0]}),u=e.mean(o,function(e){return e[1]}),i=e.set();return t.forEach(function(e){i.add(e.team1),i.add(e.team2)}),{attendance:r,x:a,y:u,teams:i,home:t[0].home,year:t[0].year,teamNumber:i.size()}}).entries(t)}(t);u.init(r.sort(function(e,t){return t.value.attendance-e.value.attendance}),function(e){return e.key},function(t){t.on("mouseover",function(t){o.update(e.event.pageX,e.event.pageY,t);var n=r.filter(function(e){return new Date(e.key).getFullYear()===parseInt(t.key)});a.highlight(n[0].value.teams)}).on("mousemove",function(t){o.move(e.event.pageX,e.event.pageY)}).on("mouseout",function(e){o.off(),a.reset()})});var i=function(e,t,n){for(var r=[],o=e;o<=t;o+=n)1942!==o&&1946!==o&&r.push(o);return r}(1930,2015,4);e.select("#vis-box").append("ul").attr("class","button__list-row").selectAll("li").data(i).enter().append("li").attr("class","button").append("button").text(function(e){return e}).on("mouseover",function(e){var t=r.filter(function(t){return new Date(t.key).getFullYear()===e});a.highlight(t[0].value.teams),u.render(t)}).on("mouseout",function(){a.reset(),u.render(r).on("mouseover",function(t){o.update(e.event.pageX,e.event.pageY,t);var n=r.filter(function(e){return new Date(e.key).getFullYear()===parseInt(t.key)});a.highlight(n[0].value.teams)}).on("mousemove",function(t){o.move(e.event.pageX,e.event.pageY)}).on("mouseout",function(e){o.off(),a.reset()})})}e.json("./world_countries.json").then(function(t){!function(t){a.init(t);var n=e.timeParse("%d-%m-%Y (%H:%M h)");e.tsv("./world_cup_geo.tsv",function(e){var t=n(e.date);return e.attendance=+e.attendance,e.date=t,e}).then(function(e){i(e)})}(t)})})},95:function(e,t){}});