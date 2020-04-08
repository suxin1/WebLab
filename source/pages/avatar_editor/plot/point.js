export class Point {
  constructor(x = 0, y = 0, r = 8, ctx) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.ctx = ctx;
    this.draw();
  }

  /**
   * Move point to a new location from it's original location.
   * @param dx {Number}
   * @param dy {Number}
   */
  move(dx = 0, dy = 0) {
    this.x = this.x + dx;
    this.y = this.y + dy;
    // TODO draw
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  getPosition() {
    return [this.x, this.y]
  }

  /**
   * Check some point is in range
   * @param x
   * @param y
   */
  isInRange(ix, iy) {
    const {x, y, r} = this;
    return (ix < x + r && ix > x - r) && (iy < y + r && iy > y - r);
  }

  draw() {
    const {ctx, x, y, r} = this;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }
}
