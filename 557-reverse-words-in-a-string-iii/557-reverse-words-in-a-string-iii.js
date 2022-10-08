/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = str => str.trim()
  .split(/\s+/)
  .map((s) => {
    let returned = ''
    for (let i = s.length-1; i >= 0; i--) {
      returned += s[i]
    }
    return returned
  })
  .join(' ')