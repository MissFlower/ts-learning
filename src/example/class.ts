/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-23 10:55:55
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-27 16:11:44
 */

// new过程：
// 创建一个空的简单JavaScript对象（即{}）var obj = {};
// 链接该对象（设置该对象的constructor）到另一个对象 obj.proto = ClassA.prototype;
// 将步骤1新创建的对象作为this的上下文 ClassA.call(obj);
// 如果该函数没有返回对象，则返回this 新建的空对象obj作废
class Point {
  public x: number
  public y: number
  public getPoints: () => void
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.getPoints = function(): void {
      console.log(1)
    }
  }

  public getPoint(): string {
    return `${this.x}-${this.y}`
  }
}
// es5中的构造函数不使用new直接调用 相当于调用函数 只是不会发生new的一系列过程
// es6中如果直接调用构造函数会报错
// console.log(Point())
const p1 = new Point(2, 3)
// 实例的属性 方法 写在constructor中
// 判断是否是实例属性 方法
// console.log(p1.hasOwnProperty('x')) // true
// console.log(p1.hasOwnProperty('getPoints')) // true
// console.log(p1.hasOwnProperty('getPoint')) // false
// console.log(Point.prototype.hasOwnProperty('getPoint')) // true
// console.log(p1)

// 存取值函数
const info = {
  _age: 18,
  get age(): number {
    return this._age
  },
  set age(newValue: number) {
    if (newValue < 18) {
      console.log('依然很年轻啊')
    } else {
      console.log('好汉不提当年勇--')
    }
  }
}
// info.age = 19
// info.age = 17
// console.log(info.age)

class Info {
  public _age: number
  constructor(age: number) {
    this._age = age
  }
  get age(): number {
    console.log(`访问年龄得到----${this._age}`)
    return this._age
  }
  set age(newValue: number) {
    console.log(`年龄被设置为----${newValue}`)
    this._age = newValue
  }
}

const i1 = new Info(18)
// console.log(i1.age)
// i1.age = 20
// console.log(i1.age)

// 静态方法 static
class Point1 {
  public static q: number = 10 // 静态属性
  public static getPoint(): string {
    return Point1.name
  }
  public z: number = 0 // 可以在constructor明确赋值 也可以在初始化时赋值
  public x: number
  public y: number
  public getPoints: () => void
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.getPoints = function(): void {
      // console.log(Point1.q)
      // console.log(this.q) // error 实例上访问不到static修饰的方法和属性
    }
  }
}
const p2 = new Point1(2, 3)
// console.log(p2.getPoint()) // error 实例访问不到静态方法 继承不了
// console.log(Point1.getPoint()) // 类本身可以进行访问
// console.log(p2.q) // error 实例访问不到静态属性
// console.log(Point1.q) // 类本身可以进行访问

// 继承
class Parent {
  public static getNames(): string {
    return this.name
  }
  constructor(public name: string) {

  }
  public getName(): string {
    return this.name
  }
}

class Child extends Parent {
  public age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
}

const c1 = new Child('jser', 18)
// console.log(c1)
// console.log(Child.getNames()) // 子类继承父类的静态方法 相当于在子类中重新定义一遍
// console.log(Object.getPrototypeOf(Child) === Parent) // true

// super作为函数
// 1.代表父类的构造函数 constructor 所以继承时子类在super中传递的参数和父类constructor的参数一致
// 2.es6要求子类构造函数中必须先调用一次super (没有参数可以不传参数) 才能使用this

// super作为对象
// 1.在子类普通方法中调用 super指向 父类的原型对象
// 2.在子类静态方法中调用 super指向 父类本身

// es6的类和es5的构造函数两种形式实现继承的机制上是存在差异的：
// es5构造函数式先创建子构造函数的实例this 然后把父构造函数的方法 属性添加到this上
// es6是先从父类取到实例对象this, 然后在调用super函数之后 再将子类的属性和方法加到this上

// private修饰符

// protected修饰符 
// 和private不同是 在该类的子类中可以访问
class Parent1 {
  protected address: string
  private age: number
  // 类“Parent1”的构造函数是受保护的 不能创建实例只能用继承的子类创建实例
  // protected constructor(age: number, address: string) {
  //   this.age = age
  //   this.address = address
  // }
  constructor(age: number, address: string) {
    this.age = age
    this.address = address
  }
  protected getAddress(num: string): string {
    // console.log(this.age)
    return this.address + num
  }
}
const p = new Parent1(18, '北京')
// 属性“age”为私有属性，只能在类“Parent1”中访问
// console.log(p.age)
// console.log(Parent1.age) // 访问不到 只能在Parent1内部进行访问

class Child1 extends Parent1 {
  constructor(age: number, address: string = '北京') {
    super(age, address)
    // 通过 "super" 关键字只能访问基类的公共方法和受保护方法  仍然访问不到private修饰的属性
    // console.log(super.age)
    // console.log(super.address)

    // 属性“age”为私有属性，只能在类“Parent1”中访问
    // console.log(this.age) // error
    // console.log(this.address)
    // console.log(super.getAddress('123'))
    // console.log(this.getAddress('234'))
  }
}
const c2 = new Child1(18, '北京')

// private修饰符
// 被修饰的属性和方法只能在类内部访问 子类和实例都无法访问
// protected修饰符
// 被修饰的属性和方法能在内部类中访问 也可以在该类的子类中访问 实例无法访问

// 相同点： 
// 实例都是无法访问被private和protected修饰的属性和方法
// private和protected修饰constructor时 该类都不可以创建实例 只能子类进行实例创建

// 不同点： 
// 相比于private修饰符 protected能够在自己子类中进行访问被修饰的属性和方法

// readonly
class UserInfo {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}
const user = new UserInfo('aa')
// user.name = 'hha' // error 无法分配到 "name" ，因为它是只读属性

// abstract抽象类
abstract class A {
  constructor(public name: string) {}
  // 抽象方法只声明 不实现 需要在子类实现
  public abstract getName(): string
}
// const a = new A('aa') // error 无法创建抽象类的实例

class B extends A {
  constructor(name: string) {
    super(name)
  }
  // 抽象类的方法在子类必须实现
  public getName(): string {
    return this.name
  }
}
const b = new B('aa')
// console.log(b.getName())

// 抽象属性 抽象类可以有具体实现的方法细节 但是抽象方法不行 只声明不实现 并且必须在派生类中实现
abstract class C {
  public abstract _name: string
  abstract get insideName(): string
  abstract set insideName(value: string)
  public getName(): string {
    return '123'
  }
  // 方法“getAge”不能具有实现，因为它标记为抽象
  // public abstract getAge(): number {
  //   return 18
  // }
}
// 抽象类不能被实例化
// const c12 = new C()

class D extends C {
  public _name: string
  constructor(name: string) {
    super()
    this._name = name
  }
  get insideName(): string {
    return this._name
  }
  set insideName(newValue: string) {
    this._name = newValue
  }
  public getAddres(): string {
    return 'beijing'
  }
}
const d = new D('jsoner')
// console.log(d.insideName)
// d.insideName = 'hah'
// console.log(d.insideName)
// console.log(d.getAddres()) // 若实例d类型为C 报错 没有getAddres方法

class People {
  constructor(public name: string) {}
}
let people:People = new People('man')

class Animal {
  constructor(public name: string) {}
}
people = new Animal('cat')

class Vegetable {
  constructor(public type: string) {}
}
// 类型 "Vegetable" 中缺少属性 "name"，但类型 "People" 中需要该属性。
// people = new Vegetable('circle') // error
// 所以判断实例还是要使用instanceof
// console.log(people instanceof People) // false
// console.log(people instanceof Animal) // true

// 类实现接口 (接口检测是该接口创建出的实例)
interface IFood {
  type: string
}
class FoodClass implements IFood {
  public type: string // 这里只能使用public  protected和private创建出的类 实例上不能访问 违反了 接口检测 是检测类创建出来的实例
  constructor(type: string) {
    this.type = type
  }
}

// 接口继承类
class X {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}
interface IName extends X {
  type: string
}
// 这里没法直接进行类实现接口 因为接口中含有受保护的属性
// class Y implements I {
//   public name: string = 'YYY'
// }
class Y extends X implements IName {
  public type: string
  constructor(name: string, type: string) {
    super(name)
    this.type = type
  }
}
const y = new Y('tomato', 'circle')
console.log(y)

// 泛型中使用类 类类型
// const create = <T>(c: { new(): T}): T => {
//   return new c()
// }
const create = <T>(c: new() => T): T => {
  return new c()
}
class Infos {
  public age: number = 10
  constructor() {
    this.age = 18
  }
}
// console.log(create<Infos>(Infos))


