/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  const aux = (current, acc) => {
    if (!current) {
      return acc
    }
    return aux(current.next, {
      val: current.val,
      next: acc,
    })
  }
  return aux(head, null)
}