/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (x) => {
  if (x <= 0) {
    return false
  }
  return (x & (x - 1)) === 0
}