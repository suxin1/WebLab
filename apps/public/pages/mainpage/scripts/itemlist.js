/**
 * Created by Suxin(suxin1@live.com) in 2018/10/12.
 */

import $ from "zepto";
import anime from "animejs";

const Mustache = require("mustache");

export class ItemList {
  constructor(target, template) {
    this.target = target;
    this.template = template;
    Mustache.parse(template);
  }

  setState(state) {
    let newState = Object.assign({}, this.state, state);
    this.state = newState;
    this.render();
  }

  setFilter(filter) {
    this.filter = filter;
    this.render();
  }

  render() {
    const {filter} = this;
    const {items} = this.state;
    if (filter) {
      items.items = filter(items.items);
    }
    let rendered = Mustache.render(this.template, items);
    this.target.html(rendered);

    // 元素已经加载到文档树，可以在此添加事件和访问元素。
    let functionBasedDuration = anime({
      targets: '.list-view .item-card-item',
      translateX: [-250, 0],
      direction: 'alternate',
      opacity: [0, 1],
      loop: false,
      easing: 'easeOutQuart',
      delay: function (el, i) {
        return i * 300
      },
      duration: 500
    });

    $(".item-card").on({
      "mouseenter": function (e) {
        let dom = $(e.currentTarget);
        dom.addClass("active");
      },
      "mouseleave": function (e) {
        let dom = $(e.currentTarget);
        dom.removeClass("active");
      }
    })
  }
}
