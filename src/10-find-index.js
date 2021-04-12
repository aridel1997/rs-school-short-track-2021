/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let searchIndex;
  let rightIndex = array.length - 1;
  let leftIndex = 0;
  while (leftIndex <= rightIndex) {
    searchIndex = Math.floor((rightIndex + leftIndex) / 2);
    if (array[searchIndex] < value) {
      leftIndex = searchIndex + 1;
    } else if (array[searchIndex] > value) {
      rightIndex = searchIndex - 1;
    } else return searchIndex;
  }
  return false;
}

module.exports = findIndex;
