/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 20:34:09
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-03 11:38:05
 */
function getTitle() {
  return document ? document.title : ''
}
function setTitle(value) {
  document && (document.title = value)
}
const title = getTitle()
console.log(title)