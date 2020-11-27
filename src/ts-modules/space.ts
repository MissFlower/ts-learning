/*
 * @Description: 命名空间
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 13:44:49
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 14:09:39
 */
namespace Validation {
  const isLetter = /[A-Za-z]/
  export const isNumber = /^[0-9]+$/
  export const checkLetter = (text: string): boolean => {
    return isLetter.test(text)
  }
}
