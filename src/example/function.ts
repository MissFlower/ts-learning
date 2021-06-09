/*
 * @Description: function
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 17:02:27
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-30 11:51:31
 */
function add(arg1: number, arg2: number): number {
  return arg1 + arg2
}

// 下面两种定义是一样的 eslint 推荐下面一种写法
// interface IAdd {
//   (x: number, y: number): number
// }
type IAdd = (x: number, y: number, z: number) => number

// 参数可少 不可超过
const add1: IAdd = (x, y) => {
  return x + y
}
// console.log(add(1, 2))

// 可选参数 必选参数不能位于可选参数后
type AddFunction = (x: number, y: number, z?: number) => number
const add2: AddFunction = (x: number, y: number, z?: number) => {
  return x + y + (z || 0)
}
console.log(add2(1, 32, 3))

// 函数重载
function handleData(x: string): string[]
function handleData(x: number): number[]
// 函数实体
function handleData(x: string | number): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').map(item => Number(item))
  }
}
// console.log(handleData('123').map(item => item.toFixed()))
// console.log(handleData(123).map(item => item.length))

// 函数双向协变
// let funcA = (arg: boolean | string): void => {}
// let funcB = (arg: boolean): void => {}
// funcA = funcB
// funcB = funcA
