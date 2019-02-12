export function fastSolve(items, avail, memo=null) {

  let result = [];
  if(!memo) memo = {};

  if(items.length === 0 || avail === 0) {
    result = [0, []];
  }
  else if(items[0].height > avail) {
    result = fastSolve(items.splice(1), avail);
  }
  else {
    let current_item = items[0];

    // Explore left branch
    let [withValue, withItems] = fastSolve(items.splice(1), avail - current_item.height);
    withValue += current_item.height;
    withItems.push(current_item);

    // Explore right branch
    let [withoutValue, withoutItems] = fastSolve(items.splice(1), avail);

    // this will ensure always choose the best option.
    if(withValue > withoutValue) {
      result = [withValue, withItems];
    } else {
      result = [withoutValue, withoutItems];
    }
  }

  return result;
}