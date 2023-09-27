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