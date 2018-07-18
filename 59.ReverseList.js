// 翻转链表

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  if (!pHead) {
    return pHead
  }
    
  let node = null
  let next = null
  while (pHead) {
    next = pHead.next
    pHead.next = node
    node = pHead
    pHead = next
  }
  return node
}