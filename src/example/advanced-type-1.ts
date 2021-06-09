/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-23 17:25:51
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-03 11:36:40
 */
const a = 1
// 交叉类型
const mergeFunc = <T, U>(param1: T, param2: U): T & U => {
  let res = {} as T & U
  res = Object.assign(param1, param2)
  return res
}
// console.log(mergeFunc({a: 1}, {b: 2}))

// 类型保护
// typeof
const valueList = [123, 'abc']
const getValue = () => {
  const number = Math.random() * 10
  let res
  res = number < 5
      ? valueList[0]
      : valueList[1]
  // 类型断言1
  // console.log((res as string).length ? (res as string).length : (res as number).toFixed())
  // 函数定义判断2
  // console.log((isString(res)) ? res.length : res.toFixed())
  // typeof 3 string / number/ boolean / symbol 中的一种  而且只能用===或者!==比较符
  console.log((typeof res === 'string') ? res.length : res.toFixed())
}
// 2
// function isString(value: number | string):value is string {
//   return typeof value === 'string'
// }
getValue()

// instanceof
class Class1 {
  constructor(public name: string = 'aaa') {}
}
class Class2 {
  constructor(public age: number = 18) {}
}
const getClass = () => {
  const item = Math.random() > 0.5
               ? new Class1()
               : new Class2()
  console.log(item instanceof Class1 ? item.name : item.age)
}
getClass()

// 可辨识联合类型
// 1. 具有普通的单例类型属性
// 2. 一个类型别名包含的类型联合
interface ISquare {
  kind: 'square', // 具有普通的单例类型属性
  size: number
}
interface IRectangle {
  kind: 'rectangle', // 具有普通的单例类型属性
  height: number,
  width: number
}
interface ICircle {
  kind: 'circle', // 具有普通的单例类型属性
  radius: number
}

type Shape = ISquare | IRectangle | ICircle // 一个类型别名包含的类型联合

// 类型保护
const assertNever = (value: never): never => {
  throw new Error('Unexpected object:' + value)
}

function getArea(s: Shape): number {
  switch (s.kind) {
    case 'square':
      return s.size ** 2
      break

    case 'rectangle':
      return s.width * s.height
      break

    case 'circle':
      return Math.PI * s.radius ** 2
      break
    default:
      return assertNever(s)
      break
  }
}
