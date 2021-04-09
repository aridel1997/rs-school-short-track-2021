/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */

// eslint-disable-next-line consistent-return
function getEmailDomain(email) {
  const arr = email.split('');
  let strResult;
  const arrDomain = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== '@') {
      arrDomain.unshift(arr[i]);
    } else {
      strResult = arrDomain.join('');
      return strResult;
    }
  }
}

module.exports = getEmailDomain;
