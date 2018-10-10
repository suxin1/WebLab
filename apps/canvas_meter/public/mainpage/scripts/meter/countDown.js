import {easing} from "../../../shared/scripts/draw/easing";
import {Draw} from "../../../shared/scripts/draw/core";

export class CountDown extends Draw {
  constructor(ctx, w, h, padding) {
    super(ctx);
    this.ctx = ctx;
    this.width = w;
    this.height = h;
    this.padding = padding;

    let frameWidth = 6;
    let progressCircleWidth = 20;

    this.state = {
      width: w,
      padding: padding,
      center: [w / 2, h / 2],
      frameWidth: frameWidth,
      frameRadius: w/2 -padding - frameWidth/2,
      progressCircleWidth: progressCircleWidth,
      progressCircleRadius: w / 2 - padding - frameWidth - progressCircleWidth / 2,
      outerCircleRadius: w / 2 - padding - frameWidth - progressCircleWidth,
      innerCircleRadius: w / 2 - padding - frameWidth - progressCircleWidth - 20,
    }
  }

  outerCircle() {
    const {width, center, outerCircleRadius, progressCircleWidth, frameWidth, padding} = this.state;
    let leftTop = padding + progressCircleWidth + frameWidth;
    let bottomRight = width - padding - progressCircleWidth - frameWidth;

    let gradient = this.LinerGradient(leftTop, leftTop, bottomRight, bottomRight, [[0, "#fcfcfc"], [1, "#e2e6e9"]]);
    // Shadow
    this.Circle({
      shape: {
        x: this.width / 2 + 7,
        y: this.height / 2 + 7,
        r: outerCircleRadius,
      },
      styles: {
        fill: "rgba(0, 0, 0, .2)"
      }
    }, "fill");

    this.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: outerCircleRadius,
      },
      styles: {
        fill: gradient,
      }
    }, 'fill');
  }

  innerCircle() {
    const {width, center, innerCircleRadius, progressCircleWidth, frameWidth, padding} = this.state;
    let leftTop = padding + progressCircleWidth + frameWidth + 20;
    let bottomRight = width - padding - progressCircleWidth - frameWidth - 20;

    let gradient = this.LinerGradient(leftTop, leftTop, bottomRight, bottomRight, [[0, "#e0e4e7"], [1, "#f8faf9"]]);
    this.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: innerCircleRadius,
      },
      styles: {
        fill: gradient,
      }
    }, "fill");
  }


  progressCircle(progress) {
    const {center, progressCircleWidth, progressCircleRadius} = this.state;
    let gradient = this.LinerGradient(30, 30, 180, 180, [[0, "#f8d231"], [1, "#f4b83c"]]);
    let target = progress - Math.PI / 2;
    this.Arc({
      shape: {
        x: center[0],
        y: center[1],
        r: progressCircleRadius,
        sa: target,
        ea: 0 - Math.PI / 2,
        counterclockwise: true
      },
      styles: {
        strokeStyle: gradient,
        lineWidth: progressCircleWidth,
        lineCap: "round",
      }
    })
  }

  background() {
    const {center} = this.state;
    let gradient = this.LinerGradient(0, 0, 0, 200, [[0, "#fefefe"], [1, "#e0e4e5"]]);

    this.Circle({
      shape: {
        x:center[0] + 6,
        y: center[1] + 6,
        r: this.width / 2 - this.padding,
      },
      styles: {
        fill: "rgba(0,0,0,.2)",
      }
    }, "fill");

    this.Circle({
      shape: {
        x: this.width / 2,
        y: this.height / 2,
        r: this.width / 2 - 3 - this.padding,
      },
      styles: {
        fill: gradient,
      }
    }, "fill");
  }

  scale() {
    const {center, progressCircleRadius, frameWidth, frameRadius, padding} = this.state;
    for (let i = 0; i < 12; i++) {
      this.Line({
        shape: {
          x1: progressCircleRadius - 5,
          y1: 0,
          x2: progressCircleRadius + 5,
          y2: 0,
        },
        styles: {
          lineWidth: 1,
          strokeStyle: "white",
          lineCap: "round",
        },
        translate: [center[0], center[1]],
        rotate: Math.PI / 6 * i
      });
    }

    this.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: frameRadius,
      },
      styles: {
        strokeStyle: "#fffdfe",
        lineWidth: frameWidth,
      }
    }, "stroke");

    this.Circle({
      shape: {
        x: center[0],
        y: center[1],
        r: frameRadius - frameWidth/2,
      },
      styles: {
        strokeStyle: "rgba(0, 0, 0, .1)",
        lineWidth: 2,
      }
    }, "stroke");
  }

  text(t) {
    let ctx = this.ctx;
    const {center, width} = this.state;
    ctx.save();
    ctx.fillStyle = "#484443";
    ctx.font = `${parseInt(width/ 6)}px FjallaOne`;
    ctx.setTextAlign("center");
    ctx.setTextBaseline("middle");
    ctx.fillText(t + "\"", center[0] + 5, center[1]);

    ctx.restore();
  }

  draw(ea, t) {
    let ctx = this.ctx;
    this.background();
    this.progressCircle(ea);
    this.scale();
    this.outerCircle();
    this.innerCircle();
    this.text(t);

    ctx.draw();
  }

  start(duration, cb) {
    let currentTime = 0,
      delta = 40,
      start = (new Date).getTime();

    let frame = () => {
      let progress = easing.linear(currentTime / duration);
      currentTime = (new Date).getTime() - start;
      if (currentTime > duration) {
        cb();
        return;
      }
      this.draw(-Math.PI * 2 * progress, parseInt((duration - currentTime)/1000));
      if(!this.stoped) {
        setTimeout(frame, delta);
      }
    };

    setTimeout(frame, delta);
  }

  stop() {
    console.log("stoped");
    this.stoped = true;
  }
}