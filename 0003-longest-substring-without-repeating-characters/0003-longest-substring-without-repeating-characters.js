/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s = '') => {
  const map = {}
  let max = 0
  let left = -1
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      left = Math.max(left, map[s[i]])
      max = Math.max(i - left, max)
    } else {
      max = Math.max(i - left, max)
    }
    map[s[i]] = i
  }
  return max
}