import plot from "./plot";

function draggableBox(plt) {
  let anchors = [plt.Point(20, 20), plt.Point(280, 20), plt.Point(280, 280), plt.Point(20, 280)];
  let box = plt.Rect(anchors[0].x, anchors[0].y, anchors[2].x - anchors[0].x, anchors[2].y - anchors[0].y);

  let canvas = plt.ctx.canvas;
  let activeAnchorIndex;

  function getNearbyPointIndex(x, y) {
    let result;
    for (let i = 0; i < anchors.length; i++) {
      if (anchors[i].isInRange(x, y)) {
        result = i;
        break;
      }
    }
    return result;
  }

  function updatePoints(x, y) {
    let baseAnchor = anchors[activeAnchorIndex];
    baseAnchor.x = x;
    baseAnchor.y = y;

    let prevAnchor = activeAnchorIndex === 0?anchors[anchors.length-1]:anchors[activeAnchorIndex-1];
    let nextAnchor = activeAnchorIndex === anchors.length-1?anchors[0]:anchors[activeAnchorIndex+1];

    if(activeAnchorIndex % 2 === 0) {
      prevAnchor.moveTo(baseAnchor.x, prevAnchor.y);
      nextAnchor.moveTo(nextAnchor.x, baseAnchor.y);
    }
    if(activeAnchorIndex % 2 !== 0) {
      prevAnchor.moveTo(prevAnchor.x, baseAnchor.y);
      nextAnchor.moveTo(baseAnchor.x, nextAnchor.y);
    }
  }


  canvas.addEventListener("mousemove", function (e) {
    console.log("event:mousemove");
    if(activeAnchorIndex === undefined) return;
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;

    plt.clean();
    updatePoints(mouseX, mouseY);
    plt.Rect(anchors[0].x, anchors[0].y, anchors[2].x - anchors[0].x, anchors[2].y - anchors[0].y);
    for(let i=0;i<anchors.length;i++) {
      anchors[i].draw();
    }
  });

  canvas.addEventListener("mousedown", function (e) {
    console.log("event:mousedown");
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;
    activeAnchorIndex = getNearbyPointIndex(mouseX, mouseY);
    console.log(mouseX, mouseY, activeAnchorIndex);
  });

  canvas.addEventListener("mouseup", function () {
    console.log("event:mouseup");
    activeAnchorIndex = undefined;
  });
}


(function () {
  let canvas = document.getElementById("draggable");
  let ctx = canvas.getContext("2d");
  let plt = plot(ctx);

  draggableBox(plt);
})();