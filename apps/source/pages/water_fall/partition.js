export function fastSolve(items, avail, memo=null) {
  let result = [];
  if(!memo) memo = {};
  let memo_key = `${items.length},${avail}`;
  if(memo[memo_key]) {
    return memo[memo_key];
  }
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
  memo[memo_key] = result;
  return result;
}