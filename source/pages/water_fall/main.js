import echo from "echo-js";

import './styles.scss';

import {fastSolve} from "./partition";

const IMAGE_BASE_URL = 'https://picsum.photos';

function getImages() {
  return fetch('https://picsum.photos/list', {method: "GET"}).then(response => {
    return response.json();
  });
}


/**
 * Create a styled image.
 * @param data
 * @param width
 * @returns {HTMLElement}
 */
function createImage(data, width = 1200) {
  let container = document.createElement('div');
  container.classList.add('image_container');

  let image = document.createElement('img');
  image.style.width = `${data.width - 10}px`;
  image.style.height = `${data.height}px`;
  image.style.background = "#aaa";
  // image.src = `${IMAGE_BASE_URL}/${data.width}/${data.height}/?image=${data.id}`;
  image.dataset.echo = `${IMAGE_BASE_URL}/${data.width}/${data.height}/?image=${data.id}`;
  container.appendChild(image);
  return container;
}


/**
 * Sum of a list
 * @param list
 * @param callback
 * @returns {*}
 */
function sum(list, callback) {
  return list.reduce((s, i) => {
    if (callback) {
      return s + callback(i);
    }
    return s + i;
  }, 0);
}


/**
 * The greedy algorithm use to partition a list
 * @param list
 * @param n
 * @returns {any[]}
 */
function find_partition_greedy(list, n = 3) {
  let sortedList = list.sort((a, b) => {
    return a.height - b.height;
  });

  let sets = new Array(n);
  for (let i = 0; i < n; i++) {
    sets[i] = [];
  }

  for (let i = 0; i < sortedList.length; i++) {
    // Find smallest.
    let smallest_s = sum(sets[0], (i) => i.height);
    let smallest_index = 0;
    for (let j = 1; j < sets.length; j++) {
      let cur_sum = sum(sets[j], (i) => i.height);
      if (cur_sum < smallest_s) {
        smallest_s = cur_sum;
        smallest_index = j;
      }
    }

    // Add current item to array in sets which have smallest sum.
    sets[smallest_index].push(sortedList[i]);
  }

  return sets;
}


function find_partition_dynamic(items, n = 3) {
  let sum = items.reduce((s, item) => {
    return s + item.height;
  }, 0);

  let base = Math.floor(sum / n);

  let res = [];
  let solved = [];

  for (let i = 0; i < n; i++) {
    let remains = items.filter(item => {
      return !solved.some(i => i.id === item.id);
    });
    let partial = fastSolve(remains, base);

    solved = [...solved, ...partial[1]];
    res.push(partial);
  }
  return res.map(i => i[1]);
}


// water fall controller
let water_fall = (function () {
  return {
    container: document.querySelector('#image_collection'),
    container_width: 1200,
    columns: 4,

    image_buffer: [],
    image_group_buffer: [],
    image_containers_buffer: [],

    direction_switch: false,

    init: function (list) {

      this.init_image_group(this.columns);

      this.add_images(list);
    },


    init_image_group:function(num_columns) {

      this.image_containers_buffer = [];

      for (let i = 0; i < this.columns; i++) {
        let column = document.createElement('div');
        column.style.float = "left";
        column.style.width = `${(1 / num_columns * 100).toFixed(2)}%`;
        this.image_containers_buffer.push(column);
        this.container.appendChild(column);
      }
    },

    image_data_process: function (jsonData) {
      let newData = jsonData.map((image) => {
        let width = Math.floor(this.container_width / this.columns);
        let height = Math.floor(image.height * width / image.width + Math.random() * 100);
        image.width = width;
        image.height = height;
        return image;
      });
      return newData;
    },

    add_images: function(images) {
      this.direction_switch = !this.direction_switch;

      let _images = this.image_data_process(images); // 处理图片数据
      this.image_buffer = this.image_buffer.concat(_images); // 缓存未分组图片数据
      let res = find_partition_dynamic(_images, this.columns); // 计算图片分组

      res = this.direction_switch?res.reverse():res;

      this._add_image_group(res); // 缓存已分组图片
      this.render(res);
    },

    _add_image_group: function(group) {
      let _group_buffer = [...this.image_group_buffer];

      if(group.length === _group_buffer.length) {
        for(let i=0;i<group.length;i++) {
          _group_buffer[i].concat(group[i]);
        }
        this.image_group_buffer = _group_buffer;
      }
    },

    render: function (collection) {
      let maxLength = collection[0].length;

      for (let i = 0; i < collection.length; i++) {
        if (collection[i].length > maxLength) maxLength = collection[i].length;
      }
      // append image from top to bottom
      for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < collection.length; j++) {
          if (collection[j][i]) {
            this.image_containers_buffer[j].appendChild(createImage(collection[j][i]));
          }
        }
      }

      echo.init({
        offset: 100,
        throttle: 250,
        unload: false,
        callback: function (element, op) {
          // console.log(element, 'has been', op + 'ed')
        }
      });
    }
  }
})();

getImages().then(jsonData => {
  water_fall.init(jsonData.splice(1, 100));
});