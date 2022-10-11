/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = (grid = []) => {
  let max = 0
  const visited = {}
  const aux = (i, j) => {
    if (visited[i] && visited[i][j]) {
      return 0
    }
    visited[i] = visited[i] || {}
    visited[i][j] = true
    if (
      i >= grid.length
      || i < 0
      || j < 0
      || j >= grid[i].length
      || grid[i][j] === 0
    ) {
      return 0
    }
    return 1 + aux(i + 1, j) + aux(i - 1, j) + aux(i, j - 1) + aux(i, j + 1)
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      max = Math.max(aux(i, j), max)
    }
  }
  return max
}