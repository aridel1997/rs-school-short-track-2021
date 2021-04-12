/* eslint-disable no-unused-vars */
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(listNumber, k) {
  let head = listNumber;
  let tail = null;
  let current = listNumber;
  let prev = null;
  while (current != null) {
    if (prev != null) {
      if (current.value === k) {
        prev.next = current.next;
        if (current.next == null) {
          tail = prev;
        }
      }
    } else {
      head = head.next;
      if (head == null) {
        tail = null;
      }
    }
    prev = current;
    current = current.next;
  }
  return head;
}

module.exports = removeKFromList;
