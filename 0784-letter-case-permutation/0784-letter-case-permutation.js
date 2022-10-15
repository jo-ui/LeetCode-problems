/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = function (S = '') {
  const result = []
  const aux = (index = 0, current = '') => {
    if (index >= S.length) {
      result.push(current)
      return
    }
    if (/[a-zA-Z]/.test(S[index])) {
      aux(index + 1, current + S[index].toLowerCase())
      aux(index + 1, current + S[index].toUpperCase())
    } else {
      aux(index + 1, current + S[index])
    }
  }
  aux()
  return result
}