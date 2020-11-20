/*
 * @Description: 泛型
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 17:53:58
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-20 18:09:42
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
console.log(getArray<object>({a: 1}))
