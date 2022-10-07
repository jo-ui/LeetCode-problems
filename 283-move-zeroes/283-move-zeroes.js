/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let index = 0
  for (const num of nums) {
    if (num !== 0) {
      nums[index++] = num
    }
  }
  while (index < nums.length) {
    nums[index++] = 0
  }
}