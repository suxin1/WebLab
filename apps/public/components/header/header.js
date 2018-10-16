/**
 * Created by Suxin(suxin1@live.com) in 2018/10/16.
 */
import headerTemp from "./header.html";
const Mustache = require("mustache");

import "./style.scss";
import anime from "animejs";

export class Header {
  constructor(target, tagItems) {
    this.target = target;
    this.template = headerTemp;
    this.tagItems = tagItems;

    this.state = {
      tags: tagItems, // {Array}
    };
    this.menuOpened = false;
    this.render();
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state);
    this.render();
  }

  render() {
    const {tags} = this.state;

    let rendered = Mustache.render(this.template, {tags: tags});
    this.target.html(rendered);

    // let menuAnimation = anime({
    //   targets: 'header .nav-group',
    //   translateX: [-250, 0],
    //   direction: 'alternate',
    //   opacity: [0, 1],
    //   loop: false,
    //   easing: 'easeOutQuart',
    //   delay: 300,
    //   duration: 1000,
    // });

    $(".menu-button").on("click", function(e) {
      const {menuOpened} = this;
      let animationArr = [0, -240];
      if(menuOpened) {
        animationArr = [-240, 0]
      }
      this.menuOpened = !menuOpened;
      anime({
      targets: 'header .nav-group',
      translateX: animationArr,
      direction: 'alternate',
      loop: false,
      easing: 'easeOutQuart',
      duration: 300,
    });
    })
  }
}