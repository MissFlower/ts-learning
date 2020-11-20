/*
 * @Description: interface
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 15:52:16
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-20 17:24:15
 */
interface INameInfo {
  firstName: string
  lastName: string
}
const getFullName = ({ firstName, lastName }: INameInfo): string => {
  return `${firstName} ${lastName}`
}
console.log(getFullName({
  firstName: 'hah',
  lastName: '18'
}))

// 可选类型接口
interface IVegetable {
  type: string
  [prop: string]: string | undefined
  color?: string
}

const getVegetable = ({ color, type }: IVegetable): string => {
  return `A ${color ? color + ' ' : ''} ${type}`
}

console.log(getVegetable({
  type: 'tomato',
  color: 'green'
}))


// 接口的继承
interface IVegetables {
  color: string
}

interface ITomato extends IVegetables {
  radius: number
}

interface ICarrot extends IVegetables {
  length: number
}

const tomato: ITomato = {
  radius: 50,
  color: 'red'
}

// 混合类型接口
interface ICounter {
  (): void,
  count: number
}

const getCounter = ():ICounter => {
  const c = () => {
    console.log(c.count ++)
  }
  c.count = 0
  return c
}
const counter:ICounter = getCounter()
counter()
counter()
counter()
