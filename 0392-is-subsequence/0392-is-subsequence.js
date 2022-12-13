/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s = '', t = '') => {
  let index = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[index]) {
      index += 1;
    }
  }
  return index >= s.length;
}
