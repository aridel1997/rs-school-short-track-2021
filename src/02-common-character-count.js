/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let array1 = [];
  let array2 = [];
  array1 = s1.split('');
  array2 = s2.split('');
  let count1 = 0;
  let count2 = 0;
  const array = [];
  let sum = 0;

  for (let i = 0; i < array1.length; i++) {
    count1 = 0;
    count2 = 0;
    if (array2.indexOf(array1[i]) !== -1 && array.indexOf(array1[i]) === -1) {
      array.push(array1[i]);
      count1 = 1;
      for (let j = i + 1; j < array1.length; j++) {
        if (array1[i] === array1[j]) {
          count1++;
        }
      }
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          count2++;
        }
      }
      if (count2 > count1) {
        sum += count1;
      } else {
        sum += count2;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
