/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  const arrayResult = [];
  let counter = 1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
    } else if (counter === 1) {
      arrayResult.push(array[i]);
    } else {
      arrayResult.push(`${counter}${array[i]}`);
      counter = 1;
    }
  }
  const strResult = arrayResult.join('');
  return strResult;
}

module.exports = encodeLine;
