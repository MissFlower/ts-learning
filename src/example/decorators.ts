/*
 * @Description: 装饰器
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 15:11:41
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-27 11:47:58
 */
// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。
// 装饰器使用 @expression这种形式，expression求值后必须为一个函数，
// 它会在运行时被调用，被装饰的声明信息做为参数传入。
function setName(): Function {
  // console.log('get setName')
  return function (target: new() => any): void {
    // console.log('setName')
    // console.log(target)
  }
}
function setAge(): Function {
  // console.log('get setAge')
  return function(target: new() => any): void {
    // console.log('setAge')
    // console.log(target)
  }
}
@setName()
@setAge()
class ClassDec {

}

function addName(constructor: new() => any): void {
  constructor.prototype.name = 'lison'
}
@addName
class IClassD {}
interface IClassD {
  name: string
}
const d1 = new IClassD()
// console.log(d1.name)

function classDecorator<T extends new(...arg: any[]) => any>(target: T): new(...arg: any[]) => any {
  return class extends target {
    public newProperty: string = 'new property'
    public hello: string = 'override'
    public age: number = 18
  }
}
@classDecorator
class Greeter {
  public property : string = 'property'
  public hello: string
  public age: string
  constructor(hello: string) {
    this.hello = hello
    this.age = '19'
  }
}
const g = new Greeter('hah')
// console.log(g)


interface IObjWithKey {
  [prop: string]: any
}
const obj12: IObjWithKey = {}
Object.defineProperty(obj12, 'name', {
  value: 'json12313123',
  writable: false,
  configurable: true,
  enumerable: true
})
// console.log(obj12.name)
// obj12.name = 'hahah'
// console.log(obj12.name)
for (const key in obj12) {
  console.log(key)
}

// 方法装饰器
function enumerable(bool: boolean): Function {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor): void {
    console.log(target, propertyName)
    descriptor.enumerable = bool
  }
}
class ClassF {
  constructor(public age: number) {}
  @enumerable(false)
  public getAge(): number {
    return this.age
  }
  public getName(): string {
    return '123'
  }
}
const f = new ClassF(123)
for (const key in f) {
  console.log(key)
}

// 属性装饰器
// 定义属性装饰器
function logProperty(params: any): Function {
  // target--->类的原型对象；attr--->传入的参数url
  return function (target: any, attr: any): void {
    console.log(target, attr)

    target[attr] = params
  }
}

class HttpClient {

  @logProperty('http://www.baidu.com')
  public url: any | undefined
  constructor() {

  }
  public getData(): void {
    console.log(this.url)
  }
}

let http = new HttpClient()
http.getData()

// 参数装饰器
function params(target: any, propertyName: string, index: number): void {
  console.log(`装饰的是${propertyName}的第${index+1}个参数`)
}
class Params {
  public name: string = 'lison'
  public age: number = 18
  public getInfo(prefix: string, @params infoType: string): string {
    return prefix + '-------' + infoType
  }
}
const params1 = new Params()
console.log(params1.getInfo('hah', 'age'))
