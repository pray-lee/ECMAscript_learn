// map 一种数据结构 任何数据类型都可以作为key
let m = new Map()
// 对象形式的key
let obj = {
    name: 'lee'
}
m.set(obj, 'es6')
console.log(m.get(obj)) // es6
// console.log(m.delete(obj))
console.log(m.has(obj)) // true

// 数组形式
let m1 = new Map([
    ['name', 'lee']
])
console.log(m1) // name => lee
console.log(m1.size) // 1
console.log(m1.has('name')) // true
console.log(m1.get('name')) // lee

