export class Rect {
  constructor(x, y, width, height, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.draw();
  }

  draw() {
    const {ctx, x, y, width, height} = this;
    ctx.save();
    ctx.strokeStyle = "black";
    ctx.strokeWidth = 3;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
    ctx.restore();
  }
}