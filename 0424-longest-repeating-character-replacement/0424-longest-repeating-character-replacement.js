/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s = '', k) => {
  const map = {}
  let max = 0
  let left = 0
  let maxCount = 0
  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    map[c] = (map[c] || 0) + 1
    maxCount = Math.max(maxCount, map[c])
    while (right - left + 1 - maxCount > k) {
      map[s[left]] -= 1
      left += 1
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}