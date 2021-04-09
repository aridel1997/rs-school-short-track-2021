/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const arrResult = [];
  let index = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === -1) {
      sortedArr.shift();
      i = -1;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(arr[i]);
    if (arr[i] !== -1) {
      for (let j = 0; j < sortedArr.length; j++) {
        if (index !== 0) {
          arrResult[i] = sortedArr[index];
          index++;
          j = sortedArr.length;
        } else {
          arrResult[i] = sortedArr[j];
          index = 1;
          j = sortedArr.length;
        }
      }
    }
  }

  return arrResult;
}

module.exports = sortByHeight;
