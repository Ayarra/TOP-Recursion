function merge(left, right) {
  let mergedArray = [];

  while (left.length && right.length) {
    if (right[0] < left[0]) {
      mergedArray.push(right[0]);
      right.shift();
    } else {
      mergedArray.push(left[0]);
      left.shift();
    }
  }

  while (left.length) {
    mergedArray.push(left[0]);
    left.shift();
  }

  while (right.length) {
    mergedArray.push(right[0]);
    right.shift();
  }
  return mergedArray;
}

function recursiveMerge(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let leftSide = recursiveMerge(arr.slice(0, arr.length / 2));
  let rightSide = recursiveMerge(arr.slice(arr.length / 2));

  let sortedArray = merge(leftSide, rightSide);

  return sortedArray;
}
