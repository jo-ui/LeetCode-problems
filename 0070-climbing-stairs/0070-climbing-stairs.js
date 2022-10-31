/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  const memo = {}
  const aux = (count = 0) => {
    if (memo[count] !== undefined) {
      return memo[count]
    }
    if (count === n) {
      return 1
    }
    if (count > n) {
      return 0
    }
    memo[count] = aux(count + 1) + aux(count + 2)
    return memo[count]
  }
  return aux()
}
