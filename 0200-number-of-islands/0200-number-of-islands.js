/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (points) {
  if (!points.length) {
    return 0
  }
  const row = points.length
  const column = points[0].length
  const parent = new Array(row * column).fill(1).map((v, index) => index)
  // const size = new Array(row * column).fill(1)
  let count = 0
  const root = (i) => {
    while (i !== parent[i]) {
      parent[i] = parent[parent[i]]
      i = parent[i]
    }
    return i
  }
  const union = (a, b) => {
    const rootA = root(a)
    const rootB = root(b)
    if (rootA === rootB) {
      return
    }
    count -= 1
    // if (size[rootA] < size[rootB]) {
      parent[rootA] = rootB
      // size[rootB] += size[rootA]
    // } else {
      // parent[rootB] = rootA
      // size[rootA] += size[rootB]
    // }
  }
  const getId = (rowIndex, columnIndex) => {
    if (rowIndex < 0 || rowIndex >= row || columnIndex < 0 || columnIndex >= column || points[rowIndex][columnIndex] === '0') {
      return -1
    }
    return rowIndex * column + columnIndex
  }
  points.forEach((items, rowIndex) => {
    items.forEach((item, columnIndex) => {
      if (item === '1') {
        count += 1
        const id = getId(rowIndex, columnIndex)
        // 只需要检查两个方向
        if (getId(rowIndex, columnIndex + 1) >= 0) {
          union(getId(rowIndex, columnIndex + 1), id)
        }
        // if (getId(rowIndex, columnIndex - 1) >= 0) {
        //   union(getId(rowIndex, columnIndex - 1), id)
        // }
        if (getId(rowIndex + 1, columnIndex) >= 0) {
          union(getId(rowIndex + 1, columnIndex), id)
        }
        // if (getId(rowIndex - 1, columnIndex) >= 0) {
        //   union(getId(rowIndex - 1, columnIndex), id)
        // }
      }
    })
  })

  return count
}