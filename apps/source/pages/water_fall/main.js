import './styles.scss';

const IMAGE_BASE_URL = 'https://picsum.photos';
const MAINCONTENT_WIDTH = 1200;
const IMAGE_COLUMNS = 4;

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
function createImage(data, width=1200) {
  let static_width = width / 4 - 10;
  let container = document.createElement('div');
  container.classList.add('image_container');
  let image = document.createElement('img');
  image.style.width = `${static_width}px`;
  image.style.height = `${data.height * static_width / data.width}px`;
  image.style.background = "#aaa";
  image.src = `${IMAGE_BASE_URL}/${data.width}/${data.height}/?image=${data.id}`;
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
    for(let j = 1;j<sets.length;j++) {
      let cur_sum = sum(sets[j], (i) => i.height);
      if(cur_sum < smallest_s) {
        smallest_s = cur_sum;
        smallest_index = j;
      }
    }

    // Add current item to array in sets which have smallest sum.
    sets[smallest_index].push(sortedList[i]);
  }

  return sets;
}

let water_fall = (function() {
  return {
    container: document.querySelector('#image_collection'),
    image_containers: [],
    init: function(list, length) {
      for(let i=0;i<IMAGE_COLUMNS;i++) {
        let column = document.createElement('div');
        column.style.float = "left";
        column.style.width = `${(1/4 * 100).toFixed(2)}%`;
        this.image_containers.push(column);
        this.container.appendChild(column);
      }

      let initial_collection = find_partition_greedy(list, length);

      this.addImage(initial_collection);
    },
    addImage: function(collection) {
      let maxLength = collection[0].length;

      for(let i=0;i<collection.length;i++) {
        if(collection[i].length>maxLength) maxLength=collection[i].length;
      }

      // append image from top to bottom
      for(let i=0;i<maxLength;i++) {
        for(let j=0;j<collection.length;j++) {
          if(collection[j][i]) {
            this.image_containers[j].appendChild(createImage(collection[j][i]));
          }
        }
      }
    }
  }
})();

getImages().then(jsonData => {
  water_fall.init(jsonData.splice(200, 30), IMAGE_COLUMNS)
});