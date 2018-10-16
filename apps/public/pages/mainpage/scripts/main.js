/**
 * Created by Suxin(suxin1@live.com) in 2018/10/12.
 */

import "../stylesheets/style.scss";
import "../../../shared/stylesheets/common/style.scss";
import "../../../shared/stylesheets/article.scss";
import "normalize.css";

import items from "./resource";
import $ from "zepto";

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

(function () {
  let itemCardTemp = $("#item-template").html();
  let target = $("#item-list");

  let itemList = new ItemList(target, itemCardTemp);
  itemList.setState({items: items});

  let headerTarget = $("#header-container");
  let header = new Header(headerTarget, getTags(items.items));
})();