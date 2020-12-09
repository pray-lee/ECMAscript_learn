// isFinite 判断一个数是不是有限的
// Infinity 无穷大的数
console.log(Number.isFinite(1.1278312893123)) // true
console.log(Number.isFinite(5/0)) // false
console.log(Number.isFinite(Infinity)) // false

// isNaN  判断一个值是不是 isNaN
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(15)) // false

// es6将之前的parseInt, parseFloat的全局方法都放在了Number类型上面
console.log(Number.parseInt(10)) // 10
console.log(Number.parseFloat(10.1)) // 10.1

// 判断是不是一个整数
console.log(Number.isInteger(100)) // true
console.log(Number.isInteger(100.1)) // false

// 最大最小的数
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// 判断一个数是不是在安全值的范围内
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false

// Math新增的方法
// 去除小数部分
console.log(Math.trunc(5.5)) // 5
console.log(Math.trunc(true)) // 1  *******会做隐式转换

// 判断是整数还是负数还是0
console.log(Math.sign(5)) // 1
console.log(Math.sign(0)) // 0
console.log(Math.sign(-5)) // -1

// 计算一个数的立方根
console.log(Math.cbrt(8)) // 2
