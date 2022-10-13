/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (matrix) {
  const result = new Array(matrix.length)
    .fill(0)
    .map(() => [])
  const getValue = (i, j) => {
    if (i < 0 || i >= matrix.length || j < 0 || j >= matrix[i].length) {
      return Infinity
    }
    return result[i][j]
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        result[i][j] = 0
      } else {
        result[i][j] = 1 + Math.min(
          getValue(i, j - 1),
          getValue(i - 1, j),
        )
      }
    }
  }
  for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = matrix[i].length - 1; j >= 0; j--) {
      if (matrix[i][j] !== 0) {
        result[i][j] = Math.min(
          1 + Math.min(
            getValue(i, j + 1),
            getValue(i + 1, j),
          ),
          result[i][j],
        )
      }
    }
  }

  return result
}