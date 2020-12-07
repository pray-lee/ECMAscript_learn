// 对象拓展

// assign 合并对象 相同属性名会覆盖
console.log(Object.assign({}, {a:1}))

// in 对象是否包含属性  如果是数组，是判断某个位置是否有值
let x = {a: 1, b: 2}
console.log('a' in x) // true

let arr = [1, 2, 3]
console.log(3 in arr) // false arr没有下标为3的内容

// getOwnPropertyNames 获取属性名
let obj = {a: 1, b: 2}
Object.getOwnPropertyNames(obj).forEach(key => console.log(key))

// ownKeys 获取属性名
Reflect.ownKeys(obj).forEach(key => console.log(key))