/*
 * @Description: 声明合并
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 14:26:26
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 15:09:55
 */
interface IInfoInter {
  name: string
  getRes(input: string): number
}
interface IInfoInter {
  // name: number // error 后续属性声明必须属于同一类型
  age: number
  getRes(input: number): string
}
let infoInter: IInfoInter = {
  name: 'lison',
  age: 18,
  getRes(text: string|number): any {
    if (typeof text === 'string') {
      return text.length
    } else {
      return text.toString() + '字符串'
    }
  }
}
// console.log(infoInter.getRes(123).toFixed())
// console.log(infoInter.getRes('123').length)
// 多个同名接口定义的非函数成员 应该是不能重复的 如果重复了类型应该相同 否则报错
namespace Validation {
  export const numberReg = /^[0-9]+$/
  export const checkNumber = () => {}
}
namespace Validation {
  console.log(numberReg)
}
// 命名空间和类的合并  类一定写在命名空间上面(命名空间声明不能位于与之合并的类或函数前)
class ValiClass {
  constructor() {}
  public checkType(): void {}
}
namespace ValiClass {
  export const numberReg = /^[0-9]+$/
}
// console.dir(ValiClass)

// 命名空间和函数
function countUp(): void {
  countUp.count ++
}
namespace countUp {
  export let count = 0
}
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)

// 命名空间和枚举（拓展枚举）  无先后顺序
enum Color {
  Yellow,
  Blue,
  Green
}
namespace Color {
  export const Pink = 4
}
console.log(Color)
// {0: "Yellow", 1: "Blue", 2: "Green", Yellow: 0, Blue: 1, Green: 2, Pink: 4}
// 0: "Yellow"
// 1: "Blue"
// 2: "Green"
// Blue: 1
// Green: 2
// Pink: 4
// Yellow: 0
