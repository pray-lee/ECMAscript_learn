// 函数默认值 默认参数必须放在最后
function foo(x, y = 2) {
   console.log(x, y)
}
// foo(1)

// 函数对象默认值  注意是等于号赋值
function ajax(url, {
    body = '',
    method = 'GET',
    headers = {}
} = {}) {
   console.log(method)
}
ajax('http', {method: 'POST'}) //  POST

// 函数参数length 返回没有指定默认值的参数的个数
function func_ln(x, y, z) {}
console.log(func_ln.length) // 3
function func_ln1(x, y, z = 1) {}
console.log(func_ln1.length) // 2
function func_ln2(x, y = 1, z = 2) {}
console.log(func_ln2.length) // 1

// 函数的name属性
