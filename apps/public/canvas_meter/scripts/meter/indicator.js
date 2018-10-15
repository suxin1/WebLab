import {easing} from "../../lib/draw/easing";
import {Draw} from "../../lib/draw/core";

export const Indicator = function (ctx, w, h, padding, title, unit, color) {
  const dctx = new Draw(ctx);

  const circle = function (ea) {
    let gradient = dctx.LinerGradient(padding, padding, w - padding, h - padding, [[0, "#f8d231"], [1, "#f4b83c"]]);

    dctx.Arc({
      shape: {
        x: w / 2,
        y: h / 2,
        r: w / 2 - padding,
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

  const text = function (t) {
    let titleWidth = 0;
    ctx.font = `${parseInt(w / 4)}px FjallaOne`;
    titleWidth = ctx.measureText(t).width;
    dctx.Text({
      text: t,
      x: w / 2,
      y: h / 2 + h/12,
      styles: {
        fill: color,
        font: `${parseInt(w / 4)}px FjallaOne`,
        textBaseline: "middle",
        textAlign: "center"
      }
    });

    if (title) {
      dctx.Text({
        text: title,
        x: parseInt(w / 2),
        y: parseInt(h/4),
        styles: {
          fill: color,
          font: `${parseInt(w/10)}px FjallaOne`,
          textBaseline: "middle",
          textAlign: "center"
        }
      })
    }

    if (unit) {
      dctx.Text({
        text: unit,
        // x: parseInt(w / 2 + (titleWidth?titleWidth/2:0)),
        x: parseInt(w / 2),
        y: parseInt(h / 2 + 3 * h/12),
        styles: {
          fill: color,
          font: `${parseInt(w/10)}px FjallaOne`,
          textBaseline: "top",
          textAlign: "center"
        }
      })
    }
  };

  const draw = function (ea, value) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    circle(ea);
    text(value);
  };

  const start = function (duration, value) {
    let currentTime = 0,
      delta = 30,
      start = (new Date).getTime();

    let frame = () => {
      let progress = easing.exponentialOut(currentTime / duration);

      if (currentTime > duration) {
        draw(Math.PI * 2 * progress, parseInt(value));
        return;
      }
      draw(Math.PI * 2 * progress, parseInt(progress * value));

      if (true) {
        setTimeout(frame, delta);
      }
      currentTime = (new Date).getTime() - start;
    };

    setTimeout(frame, delta);
  };

  return {
    draw: draw,
    start: start
  }
};