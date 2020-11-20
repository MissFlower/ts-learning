/*
 * @Description: es6-symble
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 14:36:50
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-20 15:55:29
 */
// 基础 基本数据类型 独一无二的值
const s = Symbol()
// console.log(s)
const s1 = Symbol()
// console.log(s === s1)

// 标识
const s2 = Symbol('hah')
const s3 = Symbol('hah')
// s2和s3是不相等的 好比两个人起了一个相同的名字 但是仍然是两个人 hha只是标识
// 如果标识是数字或者对象 会先调用对象的toString方法
// const s4:symbol = Symbol({a: 1}) // ts环境类型推导不能这么写 在浏览器中打印为Symble([object Object])

// Symbol值是不能和其它值做运算的
// const s4 = s3 + 1 // 运算符“+”不能应用于类型“unique symbol”和“number”

// Symbol可以转换为字符串和布尔类型值
// console.log(s3.toString()) // Symbol(hah)
// console.log(Boolean(s3)) // true
// console.log(!s3) // false 隐式转换为true 取反得false

// Symble作为键
const s4 = Symbol('name')
const obj = {
  [s4]: 'hha',
  name: 'name',
  age: 14
}
// console.log(obj) // {Symbol(name): 'hha'}
// console.log(obj[s4]) // 只能用这一种方式取值

// 通过forin循环取不到symbol作为key的值
for (const key in obj) {
  // console.log(key) // name age
}
// Object.keys同样无法取到
// console.log(Object.keys(obj)) // ["name", "age"]

// Object.getOwnPropertyNames 同样不行
// console.log(Object.getOwnPropertyNames(obj)) // ["name", "age"]

// JSON.stringify 不能将Symbol作为键的那个键值对转换为字符串
// console.log(JSON.stringify(obj)) // {"name":"name","age":14}

// Object.getOwnPropertySymbols 可以 但是只取Symbol作为键的
// console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(name)]

// Reflect.ownKeys 可以取到所有的键
// console.log(Reflect.ownKeys(obj)) //  ["name", "age", Symbol(name)]

// Symbol.for() Symbol.keyFor()

const s5 = Symbol.for('hah')
const s6 = Symbol.for('hah')
// 运行机制：当使用Symbol.for('str')时候 首先会去全局范围(当前页面 嵌套的iframe servicework)寻找有没有以str为标识创建的Symbol值 如果有直接将那个值赋给现在声明的变量 没有就重新创建
// console.log(s5 === s6) // 浏览器打印为 true

// Symbol.keyFor('str') // str  返回的是标识值 
// console.log(Symbol.keyFor(s5)) // hah 
// console.log(Symbol.keyFor(s)) // undefined 

// 11个Symbol内置方法

