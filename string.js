// 字符串的拓展

// 带标签的模版字符串
function foo(a, b, c, d) {
   console.log(a, b, c, d)
}
let a = 1
let b = 2
let c = 3
let d = 4
// 把不是变量的提出来自称一个数组,剩下的变量分配给其他的函数参数
foo`我是${a}大傻逼${b}, 你是大傻逼${c}, 他是大傻逼${d}`

// includes
console.log('aksldfj'.includes('aks')) // true

// startWith
console.log('asdklf'.startsWith('asd')) // true

// endWith
console.log('asdkljf'.endsWith('ljf')) // true

//repeat 当前字符串重复5次
console.log('a'.repeat(5))