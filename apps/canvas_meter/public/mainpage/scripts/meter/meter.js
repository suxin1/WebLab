import {easing} from "../../lib/draw/easing";
import {Draw} from "../../lib/draw/core";

export const Meter = function (ctx, w, h, padding, duration, name, unit, min, max) {
  const dctx = new Draw(ctx);

  const raduis = w / 2 - padding,
    radiusIndicator = raduis - 20,
    center = [w / 2, h / 2];

  let currentAngle = null,
    previousStop = null,
    previousValue = null,
    value = null,
    currentValue = 0,
    stoped = null,
    interval = null;

  const circle = function (ea) {
    let gradient = dctx.LinerGradient(padding, padding, w - padding, h - padding, [[0, "#f8d231"], [1, "#f4b83c"]]);

    dctx.Arc({
      shape: {
        x: w / 2,
        y: h / 2,
        r: w / 2 - 3,
        sa: 0 - Math.PI / 2,
        ea: ea - Math.PI / 2
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 5,
        lineCap: "round",
      }
    });
  };

  const plate = function () {
    let gradient = dctx.LinerGradient(0, padding, 0, h - padding, [[0, "#dfe3e6"], [1, "#fff"]]);
    dctx.Circle({
      shape: {
        x: center[0] + 5,
        y: center[1] + 5,
        r: raduis
      },
      styles: {
        fill: "rgba(0,0,0,.3)"
      }
    }, "fill");

    // Shadow
    dctx.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: raduis
      },
      styles: {
        fill: gradient
      }
    }, "fill");

  };

  const scale = function () {
    let x1, x2;
    for (let i = 0; i < 31; i++) {
      if (i % 5 == 0) {
        x1 = raduis - 8;
        x2 = raduis;
      }
      else {
        x1 = raduis - 8;
        x2 = raduis - 4;
      }
      dctx.Line({
        shape: {
          x1: x1,
          y1: 0,
          x2: x2,
          y2: 0,
        },
        styles: {
          lineWidth: 1,
          strokeStyle: "#aaaeb1",
          lineCap: "round",
        },
        translate: [center[0], center[1]],
        rotate: -Math.PI / 30 * i
      });
    }
  };

  const centerPlate = function() {
    dctx.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator - 5
      },
      styles: {
        fill: "#2f2f2f"
      }
    }, "fill");

    dctx.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator - 15,
      },
      styles: {
        fill: "white"
      }
    }, "fill");


    let gradient = dctx.LinerGradient(padding, padding, w - padding, h - padding, [[0, "#f8d231"], [1, "#f4b83c"]]);
    dctx.Arc({
      shape: {
        x: w / 2,
        y: h / 2,
        r: radiusIndicator - 25,
        sa: 0,
        ea: Math.PI * 2
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 8,
        lineCap: "round",
      }
    });
  };

  const indicator = function(p) {
    let v;
    if (value < min) {
      v = min;
    }
    else if (value > max) {
      v = max;
    }
    else {
      v = value;
    }
    let target =  Math.PI * v / max;
    let ea = target * p;
    if(previousStop) {
      ea = previousStop - (previousStop - target) * p;
    }
    currentAngle = ea;

    let gradient = dctx.LinerGradient(padding, 0, w - padding, 0, [[0, "#f8d231"], [1, "#f4b83c"]]);

    let backgradient = dctx.LinerGradient(padding, 0, w - padding, 0, [[0, "#dadbdd"],[1, "#d7dbdc"]]);
    let backgradient2 = dctx.LinerGradient(0, padding, 0, h - padding, [[0, "#babfc3"],[1, "#d7dbdc"]]);
    dctx.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator,
        sa: - Math.PI,
        ea: 0,
      },
      styles: {
        strokeStyle: backgradient,
        lineWidth: 15,
        lineCap: "round",
      }
    });
    dctx.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator,
        sa: - Math.PI,
        ea: 0,
      },
      styles: {
        strokeStyle: backgradient2,
        lineWidth: 10,
        lineCap: "round",
      }
    });

    dctx.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: radiusIndicator,
        sa: - Math.PI,
        ea: - Math.PI + ea,
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: 8,
        lineCap: "round",
      }
    })
  };

  const text = function (p) {
    let target =  value;
    let nowValue = target * p;
    if(previousValue) {
      nowValue = previousValue - (previousValue - target) * p;
    }
    previousValue = nowValue;

    dctx.Text({
      text: parseInt(nowValue),
      x: center[0],
      y: center[1],
      styles: {
        fill: "#5f5d5e",
        font: `${w / 2 - 80}px FjallaOne`,
        textBaseline: "middle",
        textAlign: "center"
      }
    });

    dctx.Text({
      text: name,
      x: center[0],
      y: center[1] - 40,
      styles: {
        fill: "#5f5d5e",
        font: `14px FjallaOne`,
        textBaseline: "middle",
        textAlign: "center"
      }
    });

    dctx.Text({
      text: unit,
      x: center[0],
      y: center[1] + 40,
      styles: {
        fill: "#5f5d5e",
        font: `14px FjallaOne`,
        textBaseline: "middle",
        textAlign: "center"
      }
    });
  };

  const draw = function (p) {
    plate();
    scale();
    centerPlate();
    indicator(p);
    text(p);
    ctx.draw();
  };

  const setValue = function(v) {
    previousStop = currentAngle;
    value = v;
    startAnimation();
  };

  const startAnimation = function() {
    let currentTime = 0,
      delta = 30,
      start = (new Date).getTime();

    // 清除前一次动画
    if(interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      let progress = easing.quinticInOut(currentTime / duration);
      if (currentTime > duration) {
        draw(progress);
        clearInterval(interval);
        return;
      }
      draw(progress);
      currentTime = (new Date).getTime() - start;
    }, delta)
  };
  const stop = function() {
    clearInterval(interval);
  }
  return {
    setValue: setValue,
    draw: draw,
    stop: stop,
  }
};