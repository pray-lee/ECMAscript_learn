// es 2015
// 数组的拓展

//类数组转数组
// Array.prototype.slice.call()
// Array.from
let arrayLike = {
    0: 'es6',
    1: 'es7',
    2: 'es8',
    3: 'es9',
}
let arr = Array.from(arrayLike)

// Array.of  创建数组 替代new Array()
let arrayOf = Array.of(3)
console.log(arrayOf)

// copyWithin 三个参数 1.从哪里开始替换 2.从哪里开始截取 3. 到哪里结束    都是取的下标
let copyArr = [1, 2, 3, 4, 5]
console.log(copyArr.copyWithin(1, 3, 5))

// fill 数组填充替换
let fillArr = [1,2,3,4,5]
fillArr.fill('lee', 1, 2)
console.log(fillArr) // [1, 'lee', 3, 4, 5]
// fillArr.fill(0)  // [0,0,0,0,0] //全部替换掉了

// include 是否包含
let includeArr = [1,2,3]
console.log(includeArr.indexOf(3)) // 返回位置，如果找不到返回-1
console.log(arr.include(3)) // 返回true or false, 可以识别NaN, indexof不识别