/**
 * Created by Suxin(suxin1@live.com) in 2018/10/16.
 */
import headerTemp from "./header.html";

const Mustache = require("mustache");

import "./style.scss";
import anime from "animejs";

export class Header {
  constructor({target, tagItems, onSidebarClose, onSidebarOpen, onCatClick}) {
    this.target = target;
    this.template = headerTemp;
    this.sideBarWidth = 280;

    this.onSidebarClose = onSidebarClose;
    this.onSidebarOpen = onSidebarOpen;
    this.onCatClick = onCatClick;

    this.state = {
      tags: tagItems, // {Array}
    };
    this.menuOpened = false;
    this.render();

    // TODO Register Event for close sidebar. Using Observer pattern.
  }

  setState(state) {
    this.state = Object.assign({}, this.state, state);
    this.render();
  }

  closeMenu() {
    const windowWidth = window.innerWidth;
    this.sideBarControllButton.removeClass("opened");
    this.menuOpened = false;
    $(this.sideBar).removeClass("opened");

    if (this.onSidebarClose) this.onSidebarClose(windowWidth);

    if (windowWidth <= 414) {
      return;
    }

    anime({
      targets: this.sideBar,
      translateX: [-(this.sideBarWidth), 0],
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
    $(this.sideBar).addClass("opened");
    if (this.onSidebarOpen) this.onSidebarOpen(windowWidth);

    if (windowWidth <= 414) {
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
    this.navItems = $("nav.sidebar .nav-item");
    this.catItems = $(".tag-list .nav-item");

    this.sideBarControllButton.on("click", (e) => {
      const {menuOpened} = this;
      if (menuOpened) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    });

    this.catItems.on("click", (e) => {
      this.closeMenu();
      this.onCatClick(e);
      let _target = $(e.currentTarget);
      this.catItems.removeClass("active");
      _target.addClass("active");
    });
  }
}