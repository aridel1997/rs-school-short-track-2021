/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(numb1) {
  const numb = String(numb1);
  const array = numb.split('');
  const newArray = [];
  let minNumb = array[0];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (minNumb > array[i]) {
      minNumb = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== minNumb) {
      newArray.push(array[i]);
    } else if (array[i] === minNumb && count === 0) {
      count++;
    } else {
      newArray.push(array[i]);
    }
  }
  const resultStr = newArray.join('');
  return +resultStr;
}

module.exports = deleteDigit;
