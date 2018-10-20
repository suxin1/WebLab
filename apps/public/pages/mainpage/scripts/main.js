/**
 * Created by Suxin(suxin1@live.com) in 2018/10/12.
 */

import "../stylesheets/style.scss";
import "../../../shared/stylesheets/common/style.scss";
import "../../../shared/stylesheets/article.scss";
import "normalize.css";

import items from "./resource";

import {Header} from "../../../components/header/header";

import {ItemList} from "./itemlist";


/**
 * Extract Tag Data from resource.
 */
function getTags(items) {
  let tags = items.map((item) => {
    return item.type;
  });
  return Array.from(new Set(tags));
}

/**
 * Filter Items by type
 */
function filterByType(items, type) {
  return items.filter(item => {
    if(item.type === type) {
      return true;
    }
    return false;
  })
}


import("zepto").then($ => {
  $ = $.default;
  // if(!window.$) window.$ = $;
  let itemCardTemp = $("#item-template").html();
  let target = $("#item-list");

  let itemList = new ItemList(target, itemCardTemp);
  itemList.setState({items: items.items});

  let headerTarget = $("#header-container");

  let header = new Header({
    target: headerTarget,
    tagItems: getTags(items.items),
    onSidebarClose: function (windowWidth) {
      if (windowWidth < 414)
        $(".main-content").removeClass("hide-mobile");
    },
    onSidebarOpen: function (windowWidth) {
      if (windowWidth < 414)
        $(".main-content").addClass("hide-mobile");
    },
    onCatClick: function(e) {
      let selectedTag =  e.currentTarget.dataset.tag;
      itemList.setState({items: filterByType(items.items, selectedTag)})
    }
  });
});