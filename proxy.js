// proxy 代理
// proxy代理不会影响目标对象原有的属性和方法
// 用于修改某些操作的默认行为, 相当于在语言层面做出修改，即对编程语言进行编程
// proxy可以理解为在目标对象之前架设一层"拦截",外界对该对象的访问都必须先通过这层拦截
// 基本结构
let obj = new Proxy({}, {
    get: function(target, key, receiver) {
        console.log(`getting ${key}`)
        return Reflect.get(target, key, receiver)
    },
    set: function(target, key, value, receiver) {
        console.log(`setting ${key}`)
        return Reflect.set(target, key, value, receiver)
    }
})
obj.count = 1 // setting count
++obj.count // setting count * 2

// proxy 有两个参数，第一个参数是要拦截的目标对象，第二个参数是来定制拦截行为
// 如果没有设置拦截，就等同于直接通向愿对象
let target = {}
let handler = {}
let proxy1 = new Proxy(target, handler)
proxy1.a = 1
console.log(target.a) // 1

// 使用场景 get
// 翻译字典
let dict = {
    hello: '你好',
    fuckYou: '草泥马',
    nice: '美丽'
}
dict = new Proxy(dict, {
    get(target, key) {
        if (key in target)
            return target[key]
        return key
    }
})
console.log(dict.hello)
console.log(dict.fuckYou)
console.log(dict.nice)

// ownKeys
class A {
    constructor() {

    }
    a() {}
    b() {}
    c() {}
}
let a = new Proxy(A.prototype, {
    ownKeys(target) {
        // 在这里拦截用户对目标对象的遍历: Object.getOwnPropertyNames, Object.getOwnPropertySymbols, Object.keys
        // 要返回一个数组，对象的key, 在这里可以过滤不想让用户看到的属性
        return Object.getOwnPropertyNames(target).filter(key => key !== 'a')
    }
})
console.log(Object.keys(a)) // ['constructor', 'b' , 'c']

