// 为了操作对象而提供的新api
// 目的
// 1 将Object对象上的一些明显属于语言内部的方法，（比如Object.defineProperty）放到Reflect对象上
// 2 修改某些Object方法的返回结果，让其变的更合理
//      比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
//      而Reflect.defineProperty(obj, name, desc)则会返回false。
// 3 让Object操作都变成函数行为.
//      某些Object操作是命令式，比如name in obj和delete obj[name]，
//      而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
// 4 Reflect对象的方法和Proxy对象的方法一一对应，只要是proxy对象的方法，在reflect对象上就能找到.

// Reflect的一些方法

// 查找并返回target对象的name属性，如果没有该属性，则返回undefined。
// 如果name属性部署了读取函数，则读取函数的this绑定receiver
// Reflect.get(target, name, receiver)

// 设置target对象的name属性等于value。如果name属性设置了赋值函数，则赋值函数的this绑定receiver。
// Reflect.set(target, name, value, receiver)

// 等同于 name in obj
// Reflect.has(obj, name)

// 等同于 delete obj[name]
// Reflect.deleteProperty(obj, name)

// 等同于new Target(...args) 这提供了一种不使用new, 来调用构造函数的方法
// Reflect.construct(target, args)

// 读取对象的__proto__属性，对应Object.getPrototypeOf(obj)
// Reflect.getPrototypeOf(obj)

// 设置对象的__proto__属性，对应Object.setPrototypeOf(obj, newProto)
// Reflect.setPrototypeOf(obj, newProto)

// 等同于Function.prototype.apply.call(fun, thisArg, args)
// Reflect.apply(fun, thisArg, args)

// 使用Proxy写一个观察者模式
const queuedObservers = new Set()
const observe = fn => queuedObservers.add(fn)
const observable = obj => new Proxy(obj, {set})
function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver)
    queuedObservers.forEach(observer => observer())
    return result
}