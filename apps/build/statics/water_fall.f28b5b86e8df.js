!function(t){function e(e){for(var r,a,c=e[0],u=e[1],f=e[2],l=0,s=[];l<c.length;l++)a=c[l],i[a]&&s.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(h&&h(e);s.length;)s.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={12:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var h=u;o.push([84,1,0]),n()}({109:function(t,e){},84:function(t,e,n){"use strict";n.r(e);var r=n(28),i=n.n(r);n(109);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=[];n||(n={});var i="".concat(t.length,",").concat(e);if(n[i])return n[i];if(0===t.length||0===e)r=[0,[]];else if(t[0].height>e)r=a(t.splice(1),e);else{var c=t[0],u=o(a(t.splice(1),e-c.height),2),f=u[0],h=u[1];f+=c.height,h.push(c);var l=o(a(t.splice(1),e),2),s=l[0],d=l[1];r=f>s?[f,h]:[s,d]}return n[i]=r,r}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var u="https://picsum.photos";function f(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=document.createElement("div");e.classList.add("image_container");var n=document.createElement("img");return n.style.width="".concat(t.width-10,"px"),n.style.height="".concat(t.height,"px"),n.style.background="#aaa",n.dataset.echo="".concat(u,"/").concat(t.width,"/").concat(t.height,"/?image=").concat(t.id),e.appendChild(n),e}var h={container:document.querySelector("#image_collection"),container_width:1200,columns:4,image_buffer:[],image_group_buffer:[],image_containers_buffer:[],direction_switch:!1,init:function(t){this.init_image_group(this.columns),this.add_images(t)},init_image_group:function(t){this.image_containers_buffer=[];for(var e=0;e<this.columns;e++){var n=document.createElement("div");n.style.float="left",n.style.width="".concat((1/t*100).toFixed(2),"%"),this.image_containers_buffer.push(n),this.container.appendChild(n)}},image_data_process:function(t){var e=this;return t.map(function(t){var n=Math.floor(e.container_width/e.columns),r=Math.floor(t.height*n/t.width+100*Math.random());return t.width=n,t.height=r,t})},add_images:function(t){this.direction_switch=!this.direction_switch;var e=this.image_data_process(t);this.image_buffer=this.image_buffer.concat(e);var n=function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=t.reduce(function(t,e){return t+e.height},0),r=Math.floor(n/e),i=[],o=[],u=0;u<e;u++){var f=a(t.filter(function(t){return!o.some(function(e){return e.id===t.id})}),r);o=[].concat(c(o),c(f[1])),i.push(f)}return i.map(function(t){return t[1]})}(e,this.columns);n=this.direction_switch?n.reverse():n,this._add_image_group(n),this.render(n)},_add_image_group:function(t){var e=c(this.image_group_buffer);if(t.length===e.length){for(var n=0;n<t.length;n++)e[n].concat(t[n]);this.image_group_buffer=e}},render:function(t){for(var e=t[0].length,n=0;n<t.length;n++)t[n].length>e&&(e=t[n].length);for(var r=0;r<e;r++)for(var o=0;o<t.length;o++)t[o][r]&&this.image_containers_buffer[o].appendChild(f(t[o][r]));i.a.init({offset:100,throttle:250,unload:!1,callback:function(t,e){}})}};fetch("https://picsum.photos/list",{method:"GET"}).then(function(t){return t.json()}).then(function(t){h.init(t.splice(1,100))})}});