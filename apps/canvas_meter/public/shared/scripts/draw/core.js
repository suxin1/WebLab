export class Draw {
  constructor(ctx) {
    this.ctx = ctx;
  }

  LinerGradient(x1, y1, x2, y2, stopList) {
    let ctx = this.ctx;
    let grad = ctx.createLinearGradient(x1, y1, x2, y2);
    for (let i = 0; i < stopList.length; i++) {
      grad.addColorStop(stopList[i][0], stopList[i][1]);
    }
    return grad;
  }

  CircularGradient(x, y, r, stopList) {
    let ctx = this.ctx;
    let grad = ctx.createCircularGradient(x, y, r);
    for (let i = 0; i < stopList.length; i++) {
      grad.addColorStop(stopList[i][0], stopList[i][1]);
    }
    return grad;
  }

  _setStyle(styles) {
    let ctx = this.ctx;
    if (styles) {
      for (let key in styles) {
        switch (key) {
          case "fill": {
            ctx.fillStyle = styles[key];
            break;
          }
          case "strokeStyle": {
            ctx.strokeStyle = styles[key];
            break;
          }
          case "lineWidth": {
            ctx.lineWidth = styles[key];
            break;
          }
          case "lineCap": {
            ctx.lineCap = styles[key];
            break;
          }
          case "shadowColor": {
            ctx.shadowColor = styles[key];
            break;
          }
          case "shadowOffsetX": {
            ctx.shadowOffsetX = styles[key];
            break;
          }
          case "shadowOffsetY": {
            ctx.shadowOffsetY = styles[key];
            break;
          }
          case "setShadow": {
            ctx.setShadow(styles[key][0], styles[key][1], styles[key][2], styles[key][3]);
            break;
          }
          case "font": {
            ctx.font = styles[key];
            break;
          }
          case "textBaseline": {
            ctx.textBaseline = styles[key];
            break;
          }
          case "textAlign": {
            ctx.textAlign = styles[key];
            break;
          }
        }
      }
    }
  }

  _transform(opt) {
    let ctx = this.ctx;
    for (let key in opt) {
      switch (key) {
        case "translate": {
          ctx.translate(opt[key][0], opt[key][1]);
          break;
        }
        case "rotate": {
          ctx.rotate(opt[key]);
        }
      }
    }
  }

  Arc(opt) {
    const ctx = this.ctx;
    let shape = opt.shape,
      styles = opt.styles;

    ctx.save();

    this._setStyle(styles);

    ctx.beginPath();
    ctx.arc(shape.x, shape.y, shape.r, shape.sa, shape.ea, shape.counterclockwise);
    ctx.stroke();

    ctx.restore();
  }

  Line(opt) {
    const ctx = this.ctx;
    let shape = opt.shape,
      styles = opt.styles;

    ctx.save();

    this._setStyle(styles);
    this._transform(opt);

    ctx.beginPath();
    ctx.moveTo(shape.x1, shape.y1);
    ctx.lineTo(shape.x2, shape.y2);
    ctx.stroke();

    ctx.restore();
  }

  Circle(opt, method) {
    const ctx = this.ctx;
    let shape = opt.shape,
      styles = opt.styles;

    ctx.save();

    this._setStyle(styles);

    ctx.beginPath();
    ctx.arc(shape.x, shape.y, shape.r, shape.sa || 0, shape.ea || Math.PI * 2);

    method && method == "fill" && ctx.fill();
    method && method == "stroke" && ctx.stroke();
    if (method == "mix") {
      ctx.fill();
      ctx.stroke();
    }

    ctx.restore();
  }

  Text(option) {
    let ctx = this.ctx,
      styles = option.styles;

    ctx.save();
    this._setStyle(styles);
    this._transform(option);

    // ctx.fillStyle = "#484443";
    // ctx.font = `${parseInt(width/ 6)}px FjallaOne`;
    // ctx.setTextAlign("center");
    // ctx.setTextBaseline("middle");

    ctx.fillText(option.text, option.x, option.y);

    ctx.restore();
  }
}