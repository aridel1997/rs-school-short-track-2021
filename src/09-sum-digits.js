/* eslint-disable no-param-reassign */
/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let sum = 0;
  let sumResult = 0;
  let remainder = 0;
  while (number > 0) {
    sum += number % 10;
    remainder = number % 10;
    number = (number - remainder) / 10;
  }
  if (sum > 9) {
    while (sum > 9) {
      sumResult += sum % 10;
      remainder = sum % 10;
      sum = (sum - remainder) / 10;
    }
    sumResult += sum;
    return sumResult;
  }
  return sum;
}

module.exports = getSumOfDigits;
