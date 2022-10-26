/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s = '') => {
  const map = {}
  for (const c of s) {
    map[c] = (map[c] || 0) + 1
  }
  let count = 0
  Object.keys(map).forEach((key) => {
    if (map[key] % 2 === 0) {
      count += map[key]
    } else {
      count += map[key] - 1
    }
  })
  return count < s.length ? count + 1 : count
}