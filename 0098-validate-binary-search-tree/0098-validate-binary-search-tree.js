/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isValidBST = function (root) {
  const aux = (node) => {
    if (!node) {
      return [true, null, null]
    }
    const [leftValid, leftMin, leftMax] = aux(node.left)
    const [rightValid, rightMin, rightMax] = aux(node.right)

    let valid = leftValid && rightValid
    if (leftMax !== null && leftMax >= node.val) {
      valid = false
    }
    if (rightMin !== null && rightMin <= node.val) {
      valid = false
    }
    const currentMin = leftMin === null ? node.val : leftMin
    const currentMax = rightMax === null ? node.val : rightMax
    return [valid, currentMin, currentMax]
  }
  return aux(root)[0]
}