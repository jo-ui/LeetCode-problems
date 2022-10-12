/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
const connect = (root) => {
  let frontier = [root]
  while (frontier.length) {
    const next = []
    frontier.forEach((node) => {
      if (node && node.left) {
        node.left.next = node.right
        const last = next[next.length - 1]
        if (last) {
          last.next = node.left
        }
        next.push(node.left, node.right)
      }
    })
    frontier = next
  }
  return root
}