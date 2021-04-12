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
  let arrayLength = Math.floor(array.length / 2);
  if (array[arrayLength] > value) {
    for (let i = 0; i < arrayLength; i++) {
      arrayLength = Math.floor(arrayLength / 2);
      if (array[i] === value) {
        searchIndex = i;
      }
    }
  } else {
    for (let i = arrayLength; i < array.length; i++) {
      if (array[i] === value) {
        searchIndex = i;
      }
    }
  }
  if (typeof searchIndex === 'number') {
    return searchIndex;
  }
  return false;
}

module.exports = findIndex;
