/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (str) {
  const words = str.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};
