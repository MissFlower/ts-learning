
import arrayMap =  require('../dist/test-array-map')
const res = arrayMap([2, 3], item => item ** 2)
// res.forEach(item => {
//   console.log(item.length)
// })
console.log(res)
