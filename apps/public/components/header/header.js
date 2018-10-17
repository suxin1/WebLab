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
    this.sideBarWidth = 280;

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

  closeMenu() {
    const windowWidth = window.innerWidth;
    this.sideBarControllButton.removeClass("opened");
    this.menuOpened = false;

    if(windowWidth<=414) {
      $(this.sideBar).hide();
      $(".main-content").show();
      return;
    }
    anime({
      targets: this.sideBar,
      translateX: [-this.sideBarWidth, 0],
      easing: 'easeOutQuart',
      duration: 300,
    });
    anime({
      targets: this.header,
      right: [this.sideBarWidth, 0],
      easing: 'easeOutQuart',
      duration: 300,
    });
  }

  openMenu() {
    const windowWidth = window.innerWidth;
    this.sideBarControllButton.addClass("opened");
    this.menuOpened = true;

    if(windowWidth<=414) {
      $(this.sideBar).show();
      $(".main-content").hide();
      return;
    }
    anime({
      targets: this.sideBar,
      translateX: [0, -this.sideBarWidth],
      easing: 'easeOutQuart',
      duration: 300,
    });
    anime({
      targets: this.header,
      right: [0, this.sideBarWidth],
      easing: 'easeOutQuart',
      duration: 300,
    });
  }

  render() {
    const {tags} = this.state;

    let rendered = Mustache.render(this.template, {tags: tags});
    this.target.html(rendered);

    // Extract Dom node necessary for later use for performance concern.
    this.sideBarControllButton = $(".header .menu-button");
    this.sideBar = $(".sidebar")[0];
    this.header = $(".header header")[0];
    this.navItems = $(".nav-group .nav-item");

    this.sideBarControllButton.on("click", (e) => {
      const {menuOpened} = this;
      if (menuOpened) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });

    this.navItems.on("click", (e) => {
      this.closeMenu();
    })
  }
}