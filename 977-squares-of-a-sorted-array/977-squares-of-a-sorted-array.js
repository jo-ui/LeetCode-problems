/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = new Array();
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);
  }
  result.sort(function (a, b) {
    return a - b;
  });
  return result;
};