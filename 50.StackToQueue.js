// 用两个栈实现队列

let stack1 = []
let stack2 = []
function push(node)
{
    stack1.push(node)
}
function pop()
{
    if (!stack2.length) {
        if (!stack1.length) {
            return
        }
        for (let i = 0, len = stack1.length; i < len; i++) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}