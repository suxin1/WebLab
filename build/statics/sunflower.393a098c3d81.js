!function(e){function t(t){for(var r,i,u=t[0],c=t[1],l=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={14:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"statics/"+({}[e]||e)+"."+{2:"f68132ee4499"}[e]+".js"}(e);var c=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;o.push([81,0]),n()}({120:function(e,t){},81:function(e,t,n){"use strict";n.r(t);n(120);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.e(2).then(n.t.bind(null,1,7)).then((function(e){var t=10,n=4e4/(t*t),r=(Math.PI,Math.sqrt(5),137.5*Math.PI/180),o=e.scaleLinear().domain([0,n/2,n]).range(["#f44545","#17c3c3","#b738ce"]);function i(e){e.attr("cx",(function(e){return e[0]})).attr("cy",(function(e){return e[1]})).attr("r",5)}var u=e.select("#chart").append("svg").attr("width",410).attr("height",410);function c(a,o){a&&(r=a),o&&(t=o);var c=e.range(1,n).map(l);u.selectAll(".dot").data(c).transition().duration(800).call(i)}function l(e){var n=Math.sqrt(e),a=e*r;return[t*n*Math.cos(a),t*n*Math.sin(a)]}u.append("g").attr("transform","translate(".concat(205,", ").concat(205,")")).selectAll("circle").data(e.range(1,n).map(l)).enter().append("circle").attr("class","dot").style("fill",(function(e,t){return o(t)})).call(i);var s=setInterval((function(){c(130+10*Math.random())}),2e3);new a(document.querySelector("#pvalueInput"),(function(e){c(parseFloat(e)),clearInterval(s)})),new a(document.querySelector("#scaleInput"),(function(e){c(void 0,parseFloat(e)),clearInterval(s)}))}));var a=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=t,this.onChange=n,this.handleChange=this.handleChange.bind(this),t.oninput=this.handleChange}var t,n,a;return t=e,(n=[{key:"handleChange",value:function(){var e=this.node.value;this.onChange(e)}}])&&r(t.prototype,n),a&&r(t,a),e}()}});