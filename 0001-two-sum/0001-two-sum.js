/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const memo = {}
  const aux = (index) => {
    if (memo[nums[index]] !== undefined) {
      return [memo[nums[index]], index]
    }
    memo[target - nums[index]] = index
    return aux(index + 1)
  }
  return aux(0, nums.length - 1)
}