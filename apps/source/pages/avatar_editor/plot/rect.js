
export class Polygon {
  constructor(points, ctx) {
    this.points = points;
    this.ctx = ctx;
    this.draw();
  }

  draw() {
    const {ctx, points} = this;
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 0; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
}
