import "../stylesheets/style.scss";
import "../../shared/stylesheets/article.scss";
import items from "./resource";
import $ from "zepto";
import anime from "animejs";

const Mustache = require("mustache");

import {Button} from "../../shared/lib/ui";

class ItemList {
  constructor(target, template) {
    this.target = target;
    this.template = template;
    Mustache.parse(template);
  }

  setState(state) {
    let newState = Object.assign({}, this.state, state);
    this.state = state;
    this.render();
  }

  render() {
    const {items} = this.state;
    let rendered = Mustache.render(this.template, items);
    this.target.html(rendered);

    // 元素已经加载到文档树，可以在此添加事件和访问元素。
    let functionBasedDuration = anime({
      targets: '.list-view .item-card-item',
      translateX: [-250, 0],
      direction: 'alternate',
      opacity: [0, 1],
      loop: false,
      easing: 'easeInOutQuart',
      delay: function(el, i) { return i * 300 },
      duration: 800
    });
  }
}

(function () {
  let itemCardTemp = $("#item-template").html();
  let target = $("#item-list");
  let itemList = new ItemList(target, itemCardTemp);
  itemList.setState({items: items});
})();