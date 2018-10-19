export default function canvas_obj(ele) {
  let returnable = {
    canvas: ele,
    ctx: ele.getContext("2d"),
    dpi: window.devicePixelRatio
  };

  returnable.get = {
    style: {
      height() {
        return +getComputedStyle(ele).getPropertyValue("height").slice(0, -2);
      },
      width() {
        return +getComputedStyle(ele).getPropertyValue("width").slice(0, -2);
      }
    },
    attr: {
      height() {
        return returnable.ele.getAttribute("height");
      },
      width() {
        return returnable.ele.getAttribute("width");
      }
    }
  };

  returnable.set = {
    style: {
      height(ht) {
        ele.style.height = ht + "px";
      },
      width(wd) {
        ele.style.width = wd + "px";
      }
    },
    attr: {
      height(ht) {
        ele.setAttribute("height", ht);
      },
      width(wd) {
        ele.setAttribute("width", wd);
      }
    }

  };

  return returnable;
}