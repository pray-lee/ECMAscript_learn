const myObject = {
    foo: 1,
    get baz() {
        return this.foo + this.bar
    },
    set bar(value) {
        return this.foo = value
    },
    get bar() {
        return this.foo
    }
}

// get
console.log(Reflect.get(myObject, 'foo'))
console.log(Reflect.get(myObject, 'bar'))
console.log(Reflect.get(myObject, 'baz'))
console.log(Reflect.get(myObject, 'bazr')) // undefined

// set
Reflect.set(myObject, 'foo1', 11)
console.log(myObject.foo1)

// set receiver
const receiver = {
    bar: 2,
    foo: 1
}
Reflect.set(myObject, 'bar', 22, receiver)
console.log(receiver) // bar: 2 foo 22

// has
console.log(Reflect.has(myObject, 'foo'))

// delete
Reflect.deleteProperty(myObject, 'foo') // return true/false
console.log(Reflect.get(myObject, 'foo')) // undefined

// construct //构造函数
function Greeting(name) {
    this.name = name
}
const instance = new Greeting('lee')
const instance_new = Reflect.construct(Greeting, ['lee'])
console.log(instance, instance_new)

// getPropertyOf setPropertyOf