/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (ss) {
  const words = ss.trim().split(" ");
  return words.length > 0 ? words[words.length - 1].length : 0;
};
