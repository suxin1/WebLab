import {Point} from "./point";
import {Polygon} from "./rect";
import {Rect} from "./polygon";


export default function (context) {
  const ctx = context;
  const drawList = [];

  return {
    ctx: context,
    clean: function() {
      ctx.clearRect(0, 0, 300, 300);
    },
    Point: function (x, y, r) {
      return new Point(x, y, r, ctx);
    },
    Polygon: function (points) {
      return new Polygon(points, ctx);
    },
    Rect: function (x, y, width, height) {
      return new Rect(x, y, width, height, ctx);
    }
  }
};
