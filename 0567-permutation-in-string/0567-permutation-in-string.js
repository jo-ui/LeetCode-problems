/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1 = '', s2 = '') => {
  const map1 = {}
  const count = s1.length
  for (const c of s1) {
    map1[c] = (map1[c] || 0) + 1
  }
  let currentCount = 0
  const map2 = {}
  for (let i = 0; i < count; i++) {
    const char = s2[i]
    if (map1[char]) {
      map2[char] = (map2[char] || 0) + 1
      currentCount = map2[char] <= map1[char] ? currentCount + 1 : currentCount
    }
  }
  if (currentCount === count) {
    return true
  }
  for (let i = 1; i < s2.length + 1 - count; i++) {
    const prevChar = s2[i - 1]
    const nextChar = s2[i + count - 1]
    if (map2[prevChar]) {
      map2[prevChar] -= 1
      currentCount = map2[prevChar] < map1[prevChar] ? currentCount - 1 : currentCount
    }
    if (map1[nextChar]) {
      map2[nextChar] = (map2[nextChar] || 0) + 1
      currentCount = map2[nextChar] <= map1[nextChar] ? currentCount + 1 : currentCount
    }
    if (currentCount === count) {
      return true
    }
  }
  return false
}