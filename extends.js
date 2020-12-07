// class的继承
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    getName() {
        return Point.name
    }
}
console.log(new Point().getName()) // Point

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color
    }
    toString() {
        return this.color + ' ' + super.getName() // 调用父类的getName
    }
}
console.log(new ColorPoint('1', '2', 'red').toString()) // red Point

// 子类必须在constructor方法里面调用super方法，否则新建实例会报错
// 这是因为子类没有自己的this对象，而是继承父类的this，然后对其进行加工
// 如果不调用super方法，子类就得不到this对象
// 只有super方法才能返回父类实例

// 判断一个类是否继承另外一个类
console.log(Object.getPrototypeOf(ColorPoint) === Point) // true

// super关键字
// 既可以当成函数使用，也可以当成对象使用

// 当作函数调用时，代表父类的构造函数, es6要求，子类的构造函数必须执行一次super函数
// 作为函数时，super()只能用在子类的构造函数之中，用在其他地方会报错!!!!!!!!

// super作为对象时，指向父类的原型对象
class A {
    p() {
        return 2
    }
}
class B extends A {
    constructor() {
        super();
        console.log(super.p()) // 2
    }
}
let b = new B()
// **************es6规定，通过super调用父类的方法时，super会绑定子类的this*************************
// ************使用super的时候，必须显式的指定时作为函数，还是作为对象使用，否则会报错******************

// class的静态方法
class Foo {
    static classMethod() {
        return 'hello'
    }
}
console.log(Foo.classMethod()) // hello

//父类的静态方法，可以被子类继承
// 静态方法也可以从super对象上调用
class Bar extends Foo {
   static classMethod() {
       return super.classMethod() + ', too'
   }
}
console.log(Bar.classMethod()) // hello, too

// class的静态属性和实例属性
class MyClass {
    // 这就是实例属性, 就不一定非要写在constructor里面了
    myProp = 30
    // 这就是静态属性
    static myStaticProp = 30
}