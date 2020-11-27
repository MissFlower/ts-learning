/*
 * @Description: 枚举
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-23 16:28:48
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-23 16:55:13
 */
// 数字枚举
enum Status {
  UPLOADING, // 0
  SUCCESS, // 1
  FAILED // 2
}
// console.log(Status.SUCCESS)
// console.log(Status[2])

// 字符串枚举
enum Message {
  ERROR = 'error',
  SUCCESS = 'sucees',
  FAILED = ERROR
}

// 异构枚举
enum Result {
  Failed = 0,
  Success = 'success'
}

// 枚举类型 满足下面其一皆可
// 1. enum E { A } 都是默认数值
// 2. enum E { A = 'a' } 都是字符串
// 3. enum E { A = 1 } 都是正负值
enum Animals {
  Dog = 1,
  Cat = 2
}
interface IDog {
  type: Animals.Dog
}
const animal: IDog = {
  type:  Animals.Dog
}

// 编译后不是对象 直接替换值 应用场景后台接口返回值 定死
const enum Animals1 {
  Success = 200,
  Failed = 300
}

window.onmousedown = function(e: MouseEvent): void {
  console.log(e)
}
