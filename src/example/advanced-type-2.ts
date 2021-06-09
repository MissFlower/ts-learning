/*
 * @Description: 高级类型2
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-24 10:21:42
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-06-03 11:18:31
 */
// this类型使用 类链式操作
class Counter {
  constructor(public count: number = 0) {}
  public add(value: number): Counter {
    this.count += value
    return this
  }
  public substract(value: number): Counter {
    this.count -= value
    return this
  }
}
const counter1 = new Counter()
// console.log(counter1.add(10).substract(-5).count)

class PowerCounter extends Counter {
  constructor(public count: number = 0) {
    super(count)
  }
  public pow(value: number): PowerCounter {
    this.count = this.count ** value
    return this
  }
}
const powerCounter = new PowerCounter(2)
// console.log(powerCounter.pow(3).add(1).substract(3))

// 索引类型查询
// keyof 连接一个类型 返回该类型所有属性组成的联合类型
interface IInfo {
  name: string
  age: number
}
let infoProp: keyof IInfo // let infoProp: "name" | "age"

function getValue1<T, K extends keyof T>(obj: T, keys: K[]): Array<T[K]> {
  return keys.map(key => obj[key])
}
const InfoObj = {
  name: 'lison',
  age: 18
}
// console.log(getValue1(InfoObj, ['name', 'age']))

// 接口索引操作符
type NameTypes = IInfo['name'] // type NameTypes = string
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
// console.log(getProperty(InfoObj, 'name'))

// 索引类型和字符串索引签名
interface IMap<T> {
  [key: string]: T
}
let keys: keyof IMap<boolean> // string | number
let value1: IMap<number>['foo'] // number

// keyof 返回属性值不为 never的属性联合类型
interface IType {
  a: never,
  b: string,
  c: number,
  d: undefined,
  e: null,
  f: boolean,
  g: object
}
type Test = IType[keyof IType]

// 映射类型 Readonly partial
// Readonly
interface IReadonly {
  name: string
  age: number
  sex: string
}
type ReadonlyType<T> = {
  readonly [key in keyof T]?: T[key]
}
type ReadonlyType1 = ReadonlyType<IReadonly>
const info1: ReadonlyType1 = {
  name: 'hha',
  age: 18,
  sex: 'man'
}
// info1.age = 19 // 无法分配到 "age" ，因为它是只读属性。

// 减号移除特定修饰符
type RemoveReadyonlyType<T> = {
  -readonly [key in keyof T]-?: T[key]
}
type RemoveReadonlyType1 = RemoveReadyonlyType<ReadonlyType1>


// Readonly ts内置
type ReadonlyType2 = Readonly<IReadonly>
// Partial ts内置
type Partial1 = Partial<IReadonly>
// Pick ts内置 一个对象中部分属性和属性值构成的对象
interface IInfo {
  name: string
  age: number
  address: string
}
const info2: IInfo = {
  name: 'haha',
  age: 18,
  address: 'beijing'
}
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const res = {} as Pick<T, K>
  keys.map(key => {
    res[key] = obj[key]
  })
  return res
}
const pick1 = pick(info2, ['address', 'age'])
// console.log(pick1) // {address: "beijing", age: 18}

// Record 适用于将对象的每一个属性值转为其它值的场景
function mapObject<K extends number | string, T, U>(obj: Record<K, T>, fn: (x: T) => U): Record<K, U> {
  const res = {} as Record<K ,U>
  // Object.keys(obj).map(key => {
  //   res[key] = fn(obj[key])
  // })
  for (const key in obj) {
    res[key] = fn(obj[key])
  }
  return res
}
const names = {
  a: 'hello',
  b: 'world',
  c: 'bye'
}
const length1 = mapObject(names, s => s.length)
// console.log(length1)

// 包装一个类型的属性
interface IProxy<T> {
  get(): T
  set(newValue: T): void
}
type Proxify<T> = {
  [p in keyof T]: IProxy<T[p]>
}
function proxify<T>(obj: T): Proxify<T> {
  const res = {} as Proxify<T>
  for (const key in obj) {
    res[key] = {
      get: () => obj[key],
      set: newValue => {
        obj[key] = newValue
      }
    }
  }
  return res
}
const proxys = {
  name: 'hah',
  age: 18
}
const proxyValue = proxify(proxys)
proxyValue.age.set(20)
// console.log(proxyValue.age.get())

// 拆包
function unProxify<T>(obj: Proxify<T>): T {
  const res = {} as T
  for (const key in obj) {
    res[key] = obj[key].get()
  }
  return res
}
const unProxifyValue = unProxify(proxyValue)
// console.log(unProxifyValue)


type MapToPromise<T> = {
  [K in keyof T]: Promise<T[K]>
}
type Tuple = [string, number, boolean, object]
type PromiseTuple = MapToPromise<Tuple>
const tuple1: PromiseTuple = [
  new Promise((resolve, reject) => resolve('a')),
  new Promise((resolve, reject) => resolve(1)),
  new Promise((resolve, reject) => resolve(true)),
  new Promise((resolve, reject) => resolve({a: 1})),
]

// unknown
// 1. 任何类型都可以赋值给unknown类型
let value2: unknown
value2 = true
value2 = 123

// 2. 如果没有类型断言或基于控制流的类型细化时， unknown不可以赋值除unknown和any外的其它值
let value3: string
// value3 = value2 // 不能将类型“unknown”分配给类型“string”。
let value4: unknown
value4 = value2 // 可以赋值unknown类型
let value5: any
value4 = value5 // 可以赋值any类型

// 3. 如果没有类型断言或基于控制流的类型细化时，不能在它上面进行任何操作
// value4++ // error

// 4. unknown和任何其他类型组成的交叉类型 最后都等于其它类型
type Type1 = string & unknown  // string
type Type2 = unknown & number  // number
type Type3 = unknown & unknown  // unknown

// 5. unknown和任何其他类型(除any外)组成的联合类型 都等于unknown类型
type Type4 = unknown | string // unknown
type Type5 = number | unknown // unknown
type Type6 = any | unknown // any

// 6. never类型是unknown的子类型
type Type7 = never extends unknown ? true : false  // true

// 7. keyof unknown 等于 never
type Type8 = keyof unknown // never

// 8. 只能对unknown进行等或不等操作 不能进行其它操作
let value6: unknown
let value7: unknown
console.log(value6 === value7 ? '相等' : '不相等')
// value6 += value7 // error

// 9. unknown类型的值不能访问它的属性 也不能作为函数调用或作为类创建实例
let value8: unknown
// value8.age // error  不能当做对象访问它的属性
// value8() // error 不能当做函数去调用
// new value8() // error  不能当做类去创建实例

// 10. 使用映射类型时如果遍历的是unknown类型，则不会映射任何属性
type Type9<T> = {
  [P in keyof T]: number
}
type Type10 = Type9<any>
// type Type10 = {
//   [x: string]: number;
// }
type Type11 = Type9<unknown>
// type Type11 = {} // 没有任何属性


// 条件类型  ts在2.8引入的
// T extends U ? X : Y
type Type12<T> = T extends string ? string : number
let v1: Type12<'a'>

// 分布式条件类型语句
type TypeName<T> =
              T extends string ? string :
              T extends number ? number :
              T extends boolean ? boolean :
              T extends undefined ? undefined :
              T extends null ? null :
              T extends Function ? Function :
              object
type TypeName1 = TypeName<{}>
type TypeName2 = TypeName<number|string>

type Type13<T> = {
  [P in keyof T]: T[P] extends Function ? P : never
}[keyof T] // keyof 返回不包含never类型的联合类型
interface IPart {
  name: string
  age: number
  sex: undefined
  subParts: IPart[]
  updataPart: () => void
}
type Type14 = Type13<IPart>

// 条件类型的类型推断
// infer 如果类型是一个数组则返回数组中元素的类型 反之 直接返回该类型
// 不使用infer实现
type Type15<T> = T extends any[] ? T[number] : T
type Type16 = Type15<string>
type Type17 = Type15<boolean | number []>
// 使用infer实现
type Type18<T> = T extends Array<infer U> ? U : T
type Type19 = Type18<string>
type Type20 = Type18<boolean | number []>


// 预定义的有条件类型
// Exclude Exclude<T, U> -- 从T中剔除可以赋值给U的类型 (从T中找出所有U中没有的类型)
type Type21 = Exclude<'a' | 'b' | 'c', 'a' | 'b' | 'd'> // c

// Extract Extract<T, U> -- 提取T中可以赋值给U的类型 (从T中找出所有和U中相同的类型)
type Type22 = Extract<'a' | 'b' | 'c', 'b' | 'd'> // d

// NonNullable<T> -- 从T中剔除null和undefined
type Type23 = NonNullable<'a' | 'b' | undefined | null> // a b

// ReturnType<T> -- 获取函数返回值类型
type Type24 = ReturnType<() => number> // type Type24 = number
type Type25 = ReturnType<(<T>() => T)>

// InstanceType<T> -- 获取构造函数类型的实例类型
class C1 {
  constructor(public x: number = 0, public y:number = 0) {}
}
type Type26 = InstanceType<typeof C1> // C1 
type Type27 = InstanceType<any>  // any
type Type28 = InstanceType<never>  // never
// type Type29 = InstanceType<string>  // Error
// type Type30 = InstanceType<Function>  // Error
