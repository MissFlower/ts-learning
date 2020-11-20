/*
 * @Description: 基础类型
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 13:31:51
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-20 17:23:26
 */
// 布尔类型
const bool: boolean = false
let bool1: boolean
bool1 = true
// bool1 = 123 // 只能赋值布尔值

// 数值类型
let num: number
// ts支持2进制 8进制 10进制 16进制的值
// 2进制的123
num = 0b1111011
// 8进制的123
num = 0o173
// 10进制的123
num = 123
// 16进制的123
num = 0x7b
// console.log(num)

// 字符串类型
let str: string
str = 'str'
str = `数值是：${num}`
// console.log(str)

// 数组类型
// 写法1  egg: [1, 2, 3]
let arr: number[]
arr = [1, 2, 3]
// arr = [1, '2'] // error
// 写法2
// let arr1: Array<number>
// 多种类型的数组
const arr3: (number | string)[] = [1, '2']

// 元组类型  固定长度 固定位置
let tuple: [string, number, boolean]
// 第一个只能是字符串 第二个只能是number 第三个是boolean 多写少写都不可以
// 2.6版本之前可以超出这个长度范围 超出的叫做越界数据 2.6之后不可以
tuple = ['1', 1, true]

// 枚举类型
// 习惯枚举值大写字母开头
enum Roles {
  SUPER_ADMIN, // 0
  ADMIN = 4, // 4
  USER // 5
}
// console.log(Roles.ADMIN)
// console.log(Roles[4])

// any类型 能不用就不用
let value: any // 可以赋值任何类型值

// void类型 什么类型都不是 一般用于函数返回值
const consoleText = (text: string): void => {
  console.log(text)
}

let v: void
v = undefined
// v = null  // strict下不行 在tsconfig中关闭即可

// undefined null只能赋予自己本身

// never类型 以下两种类型
// 抛出错误
const errorFunc = (message: string): never => {
  throw new Error(message)
}
// 死循环
const infiniteFunc = ():never => {
  while (true) {
    // do somthing
  }
}
// never可以是其它类型的子类型 但是没有一个类型是never的子类型
// ts类型推导 neverVarible为never类型
// let neverVarible = (() => {
//   while (true) {}
// })()
// neverVarible = 123 // 不能将类型“number”分配给类型“never”
// num = neverVarible // 证明可以将never类型赋给number类型

// object类型 存储内存地址
let obj1 = {
  name: 'heihei'
}
let obj2 = obj1
obj2.name = 'hha'
console.log(obj1)

function getObject(obj: object): void {
  console.log(obj)
}
// getObject(123) // 类型“number”的参数不能赋给类型“object”的参数

// 类型断言 强行制定某个值为哪个类型 有时候我们比程序更能知道什么类型
// 我们知道下面程序是没有问题的， 只是ts帮我们做类型推导时候出现了问题 此时我们应该使用 类型断言
// const getLength = (target: number | string): number => {
//   if (target.length || target.length === 0) { // 类型“number”上不存在属性“length”
//     return target.length
//   } else {
//     return target.toString().length
//   }
// }
// 类型断言写法1
const getLength1 = (target: number | string): number => {
  if ((<string>target).length || (<string>target).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
// 类型断言写法2
const getLength2 = (target: number | string): number => {
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}

