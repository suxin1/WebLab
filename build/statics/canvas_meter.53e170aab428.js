!function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],f=0,h=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(u&&u(e);h.length;)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={6:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([97,0]),n()}({11:function(t,e,n){"use strict";var r=n(21);n.o(r,"CountDown")&&n.d(e,"CountDown",(function(){return r.CountDown})),n.o(r,"Speedometer")&&n.d(e,"Speedometer",(function(){return r.Speedometer}));var i=n(26);n.d(e,"CountDown",(function(){return i.a}));var a=n(27);n.d(e,"Speedometer",(function(){return a.a}))},118:function(t,e){},26:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(7);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var u=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}(h,t);var e,n,i,u,f=(e=h,function(){var t,n=l(e);if(c()){var r=l(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return s(this,t)});function h(t,e,n,r){var i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),(i=f.call(this,t)).ctx=t,i.width=e,i.height=n,i.padding=r;return i.state={width:e,padding:r,center:[e/2,n/2],frameWidth:6,frameRadius:e/2-r-3,progressCircleWidth:20,progressCircleRadius:e/2-r-6-10,outerCircleRadius:e/2-r-6-20,innerCircleRadius:e/2-r-6-20-20},i}return n=h,(i=[{key:"outerCircle",value:function(){var t=this.state,e=t.width,n=t.center,r=t.outerCircleRadius,i=t.progressCircleWidth,a=t.frameWidth,o=t.padding,s=o+i+a,c=e-o-i-a,l=this.LinerGradient(s,s,c,c,[[0,"#fcfcfc"],[1,"#e2e6e9"]]);this.Circle({shape:{x:this.width/2+7,y:this.height/2+7,r:r},styles:{fill:"rgba(0, 0, 0, .2)"}},"fill"),this.Circle({shape:{x:n[0],y:n[1],r:r},styles:{fill:l}},"fill")}},{key:"innerCircle",value:function(){var t=this.state,e=t.width,n=t.center,r=t.innerCircleRadius,i=t.progressCircleWidth,a=t.frameWidth,o=t.padding,s=o+i+a+20,c=e-o-i-a-20,l=this.LinerGradient(s,s,c,c,[[0,"#e0e4e7"],[1,"#f8faf9"]]);this.Circle({shape:{x:n[0],y:n[1],r:r},styles:{fill:l}},"fill")}},{key:"progressCircle",value:function(t){var e=this.state,n=e.center,r=e.progressCircleWidth,i=e.progressCircleRadius,a=this.LinerGradient(30,30,180,180,[[0,"#f8d231"],[1,"#f4b83c"]]),o=t-Math.PI/2;this.Arc({shape:{x:n[0],y:n[1],r:i,sa:o,ea:0-Math.PI/2,counterclockwise:!0},styles:{strokeStyle:a,lineWidth:r,lineCap:"round"}})}},{key:"background",value:function(){var t=this.state.center,e=this.LinerGradient(0,0,0,200,[[0,"#fefefe"],[1,"#e0e4e5"]]);this.Circle({shape:{x:t[0]+6,y:t[1]+6,r:this.width/2-this.padding},styles:{fill:"rgba(0,0,0,.2)"}},"fill"),this.Circle({shape:{x:this.width/2,y:this.height/2,r:this.width/2-3-this.padding},styles:{fill:e}},"fill")}},{key:"scale",value:function(){for(var t=this.state,e=t.center,n=t.progressCircleRadius,r=t.frameWidth,i=t.frameRadius,a=(t.padding,0);a<12;a++)this.Line({shape:{x1:n-5,y1:0,x2:n+5,y2:0},styles:{lineWidth:1,strokeStyle:"white",lineCap:"round"},translate:[e[0],e[1]],rotate:Math.PI/6*a});this.Circle({shape:{x:e[0],y:e[1],r:i},styles:{strokeStyle:"#fffdfe",lineWidth:r}},"stroke"),this.Circle({shape:{x:e[0],y:e[1],r:i-r/2},styles:{strokeStyle:"rgba(0, 0, 0, .1)",lineWidth:2}},"stroke")}},{key:"text",value:function(t){var e=this.ctx,n=this.state,r=n.center,i=n.width;e.save(),e.fillStyle="#484443",e.font="".concat(parseInt(i/6),"px FjallaOne"),e.textAlign="center",e.textBaseline="middle",e.fillText(t+'"',r[0]+5,r[1]),e.restore()}},{key:"draw",value:function(t,e){var n=this.ctx;n.clearRect(0,0,n.canvas.width,n.canvas.height),this.background(),this.progressCircle(t),this.scale(),this.outerCircle(),this.innerCircle(),this.text(e)}},{key:"start",value:function(t,e){var n=this,i=0,a=(new Date).getTime();setTimeout((function o(){var s=r.a.linear(i/t);(i=(new Date).getTime()-a)>t?e():(n.draw(2*-Math.PI*s,parseInt((t-i)/1e3)),n.stoped||setTimeout(o,40))}),40)}},{key:"stop",value:function(){console.log("stoped"),this.stoped=!0}}])&&a(n.prototype,i),u&&a(n,u),h}(n(8).a)},27:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(7),i=n(8),a=function(t,e,n,a,o,s,c,l,u){var f=new i.a(t),h=e/2-a,d=h-20,p=[e/2,n/2],y=null,v=null,x=null,b=null,g=null,w=function(t){var r,i=f.ctx;i.clearRect(0,0,i.canvas.width,i.canvas.height),r=f.LinerGradient(0,a,0,n-a,[[0,"#dfe3e6"],[1,"#fff"]]),f.Circle({shape:{x:p[0]+5,y:p[1]+5,r:h},styles:{fill:"rgba(0,0,0,.3)"}},"fill"),f.Circle({shape:{x:p[0],y:p[1],r:h},styles:{fill:r}},"fill"),function(){for(var t,e,n=0;n<31;n++)n%5==0?(t=h-8,e=h):(t=h-8,e=h-4),f.Line({shape:{x1:t,y1:0,x2:e,y2:0},styles:{lineWidth:1,strokeStyle:"#aaaeb1",lineCap:"round"},translate:[p[0],p[1]],rotate:-Math.PI/30*n})}(),function(){f.Circle({shape:{x:p[0],y:p[1],r:d-5},styles:{fill:"#2f2f2f"}},"fill"),f.Circle({shape:{x:p[0],y:p[1],r:d-15},styles:{fill:"white"}},"fill");var t=f.LinerGradient(a,a,e-a,n-a,[[0,"#f8d231"],[1,"#f4b83c"]]);f.Arc({shape:{x:e/2,y:n/2,r:d-25,sa:0,ea:2*Math.PI},styles:{strokeStyle:t,lineWidth:8,lineCap:"round"}})}(),function(t){var r;r=b<l?l:b>u?u:b;var i=Math.PI*r/u,o=i*t;v&&(o=v-(v-i)*t),y=o;var s=f.LinerGradient(a,0,e-a,0,[[0,"#f8d231"],[1,"#f4b83c"]]),c=f.LinerGradient(a,0,e-a,0,[[0,"#dadbdd"],[1,"#d7dbdc"]]),h=f.LinerGradient(0,a,0,n-a,[[0,"#babfc3"],[1,"#d7dbdc"]]);f.Arc({shape:{x:p[0],y:p[1],r:d,sa:-Math.PI,ea:0},styles:{strokeStyle:c,lineWidth:15,lineCap:"round"}}),f.Arc({shape:{x:p[0],y:p[1],r:d,sa:-Math.PI,ea:0},styles:{strokeStyle:h,lineWidth:10,lineCap:"round"}}),f.Arc({shape:{x:p[0],y:p[1],r:d,sa:-Math.PI,ea:-Math.PI+o},styles:{strokeStyle:s,lineWidth:8,lineCap:"round"}})}(t),function(t){var n=b*t;x&&(n=x-(x-b)*t),x=n,f.Text({text:parseInt(n),x:p[0],y:p[1],styles:{fill:"#5f5d5e",font:"".concat(e/2-80,"px FjallaOne"),textBaseline:"middle",textAlign:"center"}}),f.Text({text:s,x:p[0],y:p[1]-30,styles:{fill:"#5f5d5e",font:"14px FjallaOne",textBaseline:"middle",textAlign:"center"}}),f.Text({text:c,x:p[0],y:p[1]+20,styles:{fill:"#5f5d5e",font:"14px FjallaOne",textBaseline:"middle",textAlign:"center"}})}(t)},I=function(){var t=0,e=(new Date).getTime();g&&clearInterval(g),g=setInterval((function(){var n=r.a.quinticInOut(t/o);if(t>o)return w(n),void clearInterval(g);w(n),t=(new Date).getTime()-e}),30)};return{setValue:function(t){v=y,b=t,I()},draw:w,stop:function(){clearInterval(g)}}}},7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={linear:function(t){return t},quadraticIn:function(t){return t*t},quadraticOut:function(t){return t*(2-t)},quadraticInOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)},cubicIn:function(t){return t*t*t},cubicOut:function(t){return--t*t*t+1},cubicInOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},quarticIn:function(t){return t*t*t*t},quarticOut:function(t){return 1- --t*t*t*t},quarticInOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},quinticIn:function(t){return t*t*t*t*t},quinticOut:function(t){return--t*t*t*t*t+1},quinticInOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},sinusoidalIn:function(t){return 1-Math.cos(t*Math.PI/2)},sinusoidalOut:function(t){return Math.sin(t*Math.PI/2)},sinusoidalInOut:function(t){return.5*(1-Math.cos(Math.PI*t))},exponentialIn:function(t){return 0===t?0:Math.pow(1024,t-1)},exponentialOut:function(t){return 1===t?1:1-Math.pow(2,-10*t)},exponentialInOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))},circularIn:function(t){return 1-Math.sqrt(1-t*t)},circularOut:function(t){return Math.sqrt(1- --t*t)},circularInOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},elasticIn:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/.4))},elasticOut:function(t){var e,n=.1;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/.4)+1)},elasticInOut:function(t){var e,n=.1,r=.4;return 0===t?0:1===t?1:(!n||n<1?(n=1,e=.1):e=r*Math.asin(1/n)/(2*Math.PI),(t*=2)<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/r)*.5+1)},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},backInOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)},bounceIn:function(t){return 1-easingFuncs.bounceOut(1-t)},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bounceInOut:function(t){return t<.5?.5*easingFuncs.bounceIn(2*t):.5*easingFuncs.bounceOut(2*t-1)+.5}}},8:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,"a",(function(){return i})),console.log("Import Core.js");var i=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e}var e,n,i;return e=t,(n=[{key:"LinerGradient",value:function(t,e,n,r,i){for(var a=this.ctx.createLinearGradient(t,e,n,r),o=0;o<i.length;o++)a.addColorStop(i[o][0],i[o][1]);return a}},{key:"CircularGradient",value:function(t,e,n,r){for(var i=this.ctx.createCircularGradient(t,e,n),a=0;a<r.length;a++)i.addColorStop(r[a][0],r[a][1]);return i}},{key:"_setStyle",value:function(t){var e=this.ctx;if(t)for(var n in t)switch(n){case"fill":e.fillStyle=t[n];break;case"strokeStyle":e.strokeStyle=t[n];break;case"lineWidth":e.lineWidth=t[n];break;case"lineCap":e.lineCap=t[n];break;case"shadowColor":e.shadowColor=t[n];break;case"shadowOffsetX":e.shadowOffsetX=t[n];break;case"shadowOffsetY":e.shadowOffsetY=t[n];break;case"setShadow":e.setShadow(t[n][0],t[n][1],t[n][2],t[n][3]);break;case"font":e.font=t[n];break;case"textBaseline":e.textBaseline=t[n];break;case"textAlign":e.textAlign=t[n]}}},{key:"_transform",value:function(t){var e=this.ctx;for(var n in t)switch(n){case"translate":e.translate(t[n][0],t[n][1]);break;case"rotate":e.rotate(t[n])}}},{key:"Arc",value:function(t){var e=this.ctx,n=t.shape,r=t.styles;e.save(),this._setStyle(r),e.beginPath(),e.arc(n.x,n.y,n.r,n.sa,n.ea,n.counterclockwise),e.stroke(),e.restore()}},{key:"Line",value:function(t){var e=this.ctx,n=t.shape,r=t.styles;e.save(),this._setStyle(r),this._transform(t),e.beginPath(),e.moveTo(n.x1,n.y1),e.lineTo(n.x2,n.y2),e.stroke(),e.restore()}},{key:"Circle",value:function(t,e){var n=this.ctx,r=t.shape,i=t.styles;n.save(),this._setStyle(i),n.beginPath(),n.arc(r.x,r.y,r.r,r.sa||0,r.ea||2*Math.PI),e&&"fill"==e&&n.fill(),e&&"stroke"==e&&n.stroke(),"mix"==e&&(n.fill(),n.stroke()),n.restore()}},{key:"Text",value:function(t){var e=this.ctx,n=t.styles;e.save(),this._setStyle(n),this._transform(t),e.fillText(t.text,t.x,t.y),e.restore()}}])&&r(e.prototype,n),i&&r(e,i),t}()},97:function(t,e,n){"use strict";n.r(e);n(118);var r=n(11),i=n(7),a=n(8),o=document.querySelector("#circular_indicator").getContext("2d");new r.CountDown(o,200,200,10).start(6e4);var s=document.querySelector("#speedometer").getContext("2d"),c=Object(r.Speedometer)(s,200,200,10,1e3,"速度","Km/h",0,200);c.setValue(0),setInterval((function(){var t=200*Math.random();c.setValue(t)}),2e3);var l,u,f,h,d,p,y,v,x,b=document.querySelector("#indicator").getContext("2d");(l=b,u=200,f=200,h=10,d="里程",p="Km/h",y="white",v=new a.a(l),{draw:x=function(t,e){var n;l.clearRect(0,0,l.canvas.width,l.canvas.height),function(t){var e=v.LinerGradient(h,h,u-h,f-h,[[0,"#f8d231"],[1,"#f4b83c"]]);v.Arc({shape:{x:u/2,y:f/2,r:u/2-h,sa:0-Math.PI/2,ea:t-Math.PI/2},styles:{strokeStyle:e,lineWidth:5,lineCap:"round"}})}(t),n=e,l.font="".concat(parseInt(u/4),"px FjallaOne"),l.measureText(n).width,v.Text({text:n,x:u/2,y:f/2+f/12,styles:{fill:y,font:"".concat(parseInt(u/4),"px FjallaOne"),textBaseline:"middle",textAlign:"center"}}),d&&v.Text({text:d,x:parseInt(u/2),y:parseInt(f/4),styles:{fill:y,font:"".concat(parseInt(u/10),"px FjallaOne"),textBaseline:"middle",textAlign:"center"}}),p&&v.Text({text:p,x:parseInt(u/2),y:parseInt(f/2+3*f/12),styles:{fill:y,font:"".concat(parseInt(u/10),"px FjallaOne"),textBaseline:"top",textAlign:"center"}})},start:function(t,e){var n=0,r=(new Date).getTime();setTimeout((function a(){var o=i.a.exponentialOut(n/t);n>t?x(2*Math.PI*o,parseInt(e)):(x(2*Math.PI*o,parseInt(o*e)),setTimeout(a,30),n=(new Date).getTime()-r)}),30)}}).start(2e3,200)}});