/*
 * @Description: 命名空间
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 13:44:49
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 14:09:39
 */
var Validation;
(function (Validation) {
    var isLetter = /[A-Za-z]/;
    Validation.isNumber = /^[0-9]+$/;
    Validation.checkLetter = function (text) {
        return isLetter.test(text);
    };
})(Validation || (Validation = {}));
/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 13:54:41
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 14:03:59
 */
// 三斜线引入命名空间
/// <reference path='./space.ts' />
var isLetter = Validation.checkLetter('abc');
console.log(Validation);
// 编译
// tsc --outFile 输出到的文件路径 要编译的文件路径
// tsc --outFile src/index.js src/ts-modules/index.ts
