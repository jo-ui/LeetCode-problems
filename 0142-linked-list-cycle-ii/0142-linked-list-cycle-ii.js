/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
  let fast = head
  let slow = head
  let isCycle = false
  while (slow && fast) {
    if (fast.next && fast.next.next) {
      fast = fast.next.next
    } else {
        break
    }
    slow = slow.next
    if (slow === fast) {
      isCycle = true
      break
    }
  }
  if (!isCycle) {
    return null
  }
  fast = head
  while (fast !== slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
}