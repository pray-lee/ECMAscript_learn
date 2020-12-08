// set 一种数据结构
// set里面的值都是唯一的
// set的参数是一个可以迭代的数据集合
// set 的key和value的值是一样的
const set = new Set('sett') // {'s', 'e', 't'}

// set的方法
set.add('imooc')
set.delete('e')
// set.clear() //清空
console.log(set.has('imooc')) // 判断是否有值
console.log(set.size) //里面有几个
set.forEach(item => console.log(item)) //可以遍历出每一项

// 应用场景
// 数组去重
let arr = [1,2,3,4,5,5,5,5,5,5]
let s = new Set(arr)
console.log(s) // [1,2,3,4,5]

//合并去重
let arr1 = [1,2,3,4]
let arr2 = [1,2,4,5,6]
let s1 = new Set([...arr1, ...arr2])
console.log([...s1]) //得到的是数组
console.log(Array.from(s1)) //得到的也是数组

// 求交集
let ss1 = new Set(arr1)
let ss2 = new Set(arr2)
const result = new Set(arr1.filter(item => ss2.has(item)))
console.log([...result], 'result')
console.log(Array.from(result), 'result')

// 求差集
const result1 = new Set(arr1.filter(item => !ss2.has(item)))
const result2 = new Set(arr2.filter(item => !ss1.has(item)))
console.log([...result1, ...result2])

// WeakSet
// WeakSet只能存放对象, 并且不可以遍历
// 弱引用,不可以遍历循环
// 不会被垃圾回收机制考虑
let ws = new WeakSet()
const obj1 = {name: 'lee'}
ws.add(obj1)
console.log(ws) // WeakSet {<item unknown>}
console.log(ws.has(obj1)) // true

















