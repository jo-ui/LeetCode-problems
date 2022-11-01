/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost = []) {
  const memo = []
  const aux = (index) => {
    if (memo[index] !== undefined) {
      return memo[index]
    }
    if (index > cost.length - 1) {
      memo[index] = 0
    } else {
      memo[index] = Math.min(aux(index + 1), aux(index + 2)) + cost[index]
    }
    return memo[index]
  }
  return Math.min(aux(0), aux(1))
}