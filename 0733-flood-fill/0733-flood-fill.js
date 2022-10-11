/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  const color = image[sr][sc]
  let current = [[sr, sc]]
  const visited = image.map(() => [])
  visited[sr][sc] = true

  const addPixel = (row, column, next = []) => {
    if (image[row] && image[row][column] === color && !visited[row][column]) {
      next.push([row, column])
    }
  }
  while (current.length > 0) {
    const next = []
    current.forEach(([row, column]) => {
      image[row][column] = newColor
      visited[row][column] = true
      addPixel(row - 1, column, next)
      addPixel(row + 1, column, next)
      addPixel(row, column - 1, next)
      addPixel(row, column + 1, next)
    })
    current = next
  }
  return image
}