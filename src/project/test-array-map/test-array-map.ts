/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-26 13:33:03
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-26 18:17:08
 */
const arrayMap = <T, U>(array: T[], callback: (item: T, index: number, array: ReadonlyArray<T>) => U): U[] => {
  let i = -1
  const Len = array.length
  const resArray = []
  while (++i < Len) {
    resArray.push(callback(array[i], i, array))
  }
  return resArray
}
export = arrayMap
