// symbol 独一无二的，唯一的， 新的javascript数据类型
// number string boolean undefined null object symbol


// 声明  括号里面写symbol的描述
let s = Symbol('foo') //每个都是唯一的
let ss = Symbol('foo')
console.log(s === ss) // false

// 第二种声明方式
// 这种声明方式Symbol定义在全局变量中
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
console.log(s1) // foo
console.log(s2) // foo
console.log(s1 === s2) // true 用for声明的时候，如果传入的描述一样，这两个值就相等

// 应用场景
// 可以用作key值, 一个班级可能有好多个人，人的名字有可能有重复，就可以用symbol
// eg:
// const grade = {
//     'liu': {name:1, age: 1},
//     'lee': {name:2, age: 2},
//     'lee': {name:3, age: 3},
// }
const stu1 = Symbol('lee')
const stu2 = Symbol('lee')
const grade = {
    [stu1]: {name:2, age: 2},
    [stu2]: {name:3, age: 3},
}
console.log(grade[stu1]) //{name:2, age: 2}
console.log(grade[stu2]) //{name:3, age: 3}
