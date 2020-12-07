class Person {
    // 类的所有方法都定义在类的prototype属性上面
    say() {
        // ...
    }

    toString() {
        // ...
    }

    toValue() {
        // ...
    }
}
// 类本身就指向构造函数
console.log(Person === Person.prototype.constructor) // true
let lee = new Person()
console.log(lee.constructor === Person.prototype.constructor) // true


// 由于类的方法都定义在prototype上，所以类的新方法可以添加在prototype对向上
class Point {
    constructor() {
    }
    // 这里定义的方法是不能枚举的, 只能通过Object.getOwnPropertyNames获取, 或者通过Reflect.ownKeys()
    a() {}
    b() {}
}
Object.assign(Point.prototype, {
    toString() {},
    toValue() {}
})

// "类内部(在class里面写的方法)" 定义的方法都是不可枚举的
console.log(Object.keys(Point.prototype)) // ['toString', 'toValue'] 没有a, b
console.log(Object.getOwnPropertyNames(Point.prototype)) // ['constructor', 'a', 'b', 'toString', 'toValue']

// constructor
// constructor是类的默认方法, 通过new命令生成对象实例时自动调用该方法
// 如果没有显示的定义，一个空的constructor方法会被默认添加：constructor() {}

// constructor默认返回对象实例，完全可以指定返回另外一个对象
class Foo{
    constructor() {
        return Object.create(null)
    }
}
console.log(new Foo() instanceof Foo) // false

// 类的构造函数，不使用new是没法调用的，会报错
// TypeError: class constructor Foo cannot be invoked without 'new'

// 类的实例对象
// 实例的属性除非定义在constructor函数里，否则都是定义在原型上

// class不存在变量提升

// class表达式
const myClass = class {}
// eg: 在这里，person是一个立即执行的类的实例
let person = new class{
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}('lee')
console.log(person.getName()) // lee

// 私有方法, 将私有方法移出模块，因为模块内部的所有方法都是对外可见的
class Widget {
    foo(baz) {
        bar.call(this, baz)
    }
}
function bar(baz) {
    return this.snaf = baz
}

// 严格模式
// 类和模块的内部默认就是严格模式， 所以不需要use strict再次指定运行模式。

// name属性 name属性总是返回紧跟在class关键字后面的类名
let haha = class{}
console.log(haha.name) // haha
