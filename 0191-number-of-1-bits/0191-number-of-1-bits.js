/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let mask = 1
  let count = 0
  for (let i = 0; i < 64; i++) {
    if ((n & mask) !== 0) {
      count += 1
    }
    mask <<= 1
  }
  return count
}