/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

const addTwoNumbers = (l1, l2) => {
  let h1 = l1
  let h2 = l2
  let digit = 0
  let head = null
  let current = null
  while (h1 || h2) {
    const num1 = h1 ? h1.val : 0
    const num2 = h2 ? h2.val : 0
    let value = num1 + num2 + digit
    if (value >= 10) {
      value -= 10
      digit = 1
    } else {
      digit = 0
    }
    h1 = h1 ? h1.next : null
    h2 = h2 ? h2.next : null
    const node = new ListNode(value)
    if (!head) {
      head = node
      current = node
    } else {
      current.next = node
      current = node
    }
  }
  if (digit === 1) {
    current.next = new ListNode(1)
  }
  return head
}