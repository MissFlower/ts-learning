/*
 * @Description: 泛型
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 17:53:58
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-03 18:05:11
 */

function handleData1<T>(x: T): T[] {
  if (typeof x === 'string') {
    return x.split('') as []
  } else if (typeof x === 'number') {
    return x.toString().split('').map((item: string) => Number(item)) as []
  } else {
    return []
  }
}
// console.log(handleData1<object>({}))

const getArray = <T>(value: T, times:number = 5): T[] => {
  return new Array(times).fill(value)
}
// console.log(getArray<number>(2))

const getArray1 = <T, U>(param1: T, param2: U, times: number = 3): Array<[T, U]> => {
  return new Array(times).fill([param1, param2])
}
getArray1<number, string>(1, 'a').forEach(item => console.log(item[0], item[1]))

// 泛型定义函数类型
let getArray2: <T>(arg1: T, times: number) => T[]
getArray2 = (arg1: any, times: number): any[] => {
  return new Array(times).fill(arg1)
}
// getArray2('4', 3).forEach(item => console.log(item.length))

type GetArray = <T>(arg1: T, times: number) => T[]
const getArray3: GetArray = (arg1: any, times: number): any[] => {
  return new Array(times).fill(arg1)
}

interface IGetArray<T> {
  (arg1: T, times: number): T[],
  array: T[]
}

// 泛型继承
// 需求：传进来的参数必须有类型属性
interface IValueWithLenth {
  length: number
}
const getArray4 = <T extends IValueWithLenth>(arg1: T, times: number = 3): T[] => {
  return new Array(times).fill(arg1)
}
// console.log(getArray4({length: 1}))

// 访问对象上面key的值
const getArray5 = <T, U extends keyof T>(arg1: T, arg2: U): any => {
  return arg1[arg2]
}
const obj3 = {
  a: 1,
  b: 2
}
// console.log(getArray5(obj3, 'c'))
