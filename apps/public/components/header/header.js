import "../stylesheets/header.scss";
import $ from "zepto";
import anime from "animejs";

const Mustache = require("mustache");

export class Header {
  constructor(target, template, tagItems) {
    this.target = target;
    this.template = template;
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state);
    this.render();
  }

  render() {
    const {items} = this.state;

    let rendered = Mustache.render(this.template, items);
    this.target.html(rendered);
  }
}