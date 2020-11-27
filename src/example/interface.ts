/*
 * @Description: interface
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 15:52:16
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-27 14:33:16
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

// 混合类型接口
interface ICounter12 {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter1(): ICounter12 {
  const counter = function (start: number): string { return '123' }
  counter.interval = 123
  counter.reset = function (): void { }
  return counter
}

let c = getCounter1()
c(10)
c.reset()
c.interval = 5.0
console.dir(c)


//  ------------------------------------------------------------------- -->
interface ILabelledValue {
  label: string,
  // color?: number
}

function printLabel(labelledObj: ILabelledValue): void {
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)
// printLabel({size: 10, label: 'Size 10 Object'})

interface IString {
  [prop: number]: string
  1: 'hahha'
  // '1': 18
  // 2: 20
  name: 'hah'
  age: 18
}

class HAnimal {
  public name: string = 'hah'
}
class Dog extends HAnimal {
  public breed: string = '20'
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// TypeScript支持两种索引签名：字符串和数字。 
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 
// 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 
// 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致
// interface INotOkay {
//   [x: number]: HAnimal
//   [x: string]: Dog
// }
interface INotOkay1 {
  [x: number]: Dog
  [x: string]: HAnimal
}

interface IClockInterface {
  currentTime: Date
  getTime(d: Date): void
}

class Clock implements IClockInterface {
  public currentTime: Date = new Date()
  constructor() { }
  public getTime(): void {
      console.log(this.currentTime)
  }
}

const clock = new Clock()
clock.getTime()


type IClockConstructor = new (hour: number, minute: number) => IClockInterface1
interface IClockInterface1 {
  tick(): void
}

function createClock(ctor: IClockConstructor, hour: number, minute: number): IClockInterface1 {
  return new ctor(hour, minute)
}

class DigitalClock1 implements IClockInterface1 {
  constructor(h: number, m: number) { }
  public tick(): void {
      console.log('beep beep')
  }
}
class AnalogClock1 implements IClockInterface1 {
  constructor(h: number, m: number) { }
  public tick(): void {
      console.log('tick tock')
  }
}

let digital = createClock(DigitalClock1, 12, 17)
let analog = createClock(AnalogClock1, 7, 32)

