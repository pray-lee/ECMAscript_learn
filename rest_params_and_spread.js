// 拓展运算符和rest参数
// 拓展运算符 把数组或者类数组展开成一个一个的值, 字符串也可以打散
function a(a, b, c) {
    console.log(a, b, c) // [1, 2, 3]
}
let arr = [1, 2, 3]
a(...arr)
let string = 'lee'
console.log([...string]) // ['l', 'e', 'e']

// rest参数
function foo(...arr) {
   console.log(arr) // [1, 2, 3]
}
foo(1, 2, 3)
