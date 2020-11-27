/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-24 17:44:13
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-24 18:21:33
 */
export const name = 'lison'
export const age = 18
export const address = '北京'

export class A {}

function func1 () { console.log(1)}
class B {}
const b = '12'
export {
  func1 as Function1,
  B as ClassB,
  b as StringB,
  b as stringb
}

export let time = new Date()
// setInterval(() => {
//   time = new Date()
// }, 1000);
 
const info = {
  name: 'lison',
  age: 18
}

export default info