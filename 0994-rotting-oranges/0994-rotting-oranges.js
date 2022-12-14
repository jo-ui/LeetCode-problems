/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  let freshCount = 0
  let count = -1
  let current = []
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        freshCount += 1
      }
      if (grid[i][j] === 2) {
        current.push([i, j])
      }
    }
  }
  if (!freshCount) {
    return 0
  }
  while (current.length > 0) {
    count += 1
    const next = []
    const rotten = (i, j) => { // eslint-disable-line
      grid[i][j] = 2
      next.push([i, j])
      freshCount -= 1
    }
    for (const [i, j] of current) {
      if (grid[i - 1] && grid[i - 1][j] === 1) {
        rotten(i - 1, j)
      }
      if (grid[i + 1] && grid[i + 1][j] === 1) {
        rotten(i + 1, j)
      }
      if (grid[i][j - 1] === 1) {
        rotten(i, j - 1)
      }
      if (grid[i][j + 1] === 1) {
        rotten(i, j + 1)
      }
    }
    current = next
  }
  return freshCount === 0 ? count : -1
}