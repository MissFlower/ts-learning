/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 13:54:41
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 14:11:01
 */

// 三斜线引入命名空间
/// <reference path='./space.ts' />
const isLetter = Validation.checkLetter('abc')
console.log(isLetter)
// 编译
// tsc --outFile 输出到的文件路径 要编译的文件路径
// tsc --outFile src/index.js src/ts-modules/index.ts
