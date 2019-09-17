module.exports = binarySearch = (arr, n, index = 0) => {
  if (arr.length === 0) {
    return -1;
  }
  let middle = Math.floor(arr.length / 2);
  if (arr[middle] === n) {
    return index + middle;
  } else if (arr[middle] < n && arr.length > 1) {
    index += middle;
    return binarySearch(arr.slice(middle, Number.MAX_VALUE), n, index);
  } else if (arr[middle] > n && arr.length > 1) {
    return binarySearch(arr.slice(0, middle), n, index);
  } else {
    return -1;
  }
};
