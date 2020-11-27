/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-25 17:02:57
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 17:47:07
 */
class MixinA {
  public mixinA: string = 'mixinA'
  public functionA (): void {
    console.log(this.mixinA)
  }
}
class MixinB {
  public mixinB: string = 'mixinB'
  public functionB (): void {
    console.log(this.mixinB)
  }
}
class MixinAB implements MixinA, MixinB {
  public mixinA: string = ''
  public mixinB: string = ''
  public functionA!: () => void
  public functionB!: () => void
  constructor(a?: string, b?: string) {
    this.mixinA = a || ''
    this.mixinB = b || ''
  }
}
function mixins(target: any, resource: any[]): void {
  resource.forEach(item => {
    Object.getOwnPropertyNames(item.prototype).forEach(prop => {
      target.prototype[prop] = item.prototype[prop]
    })
  })
}
mixins(MixinAB, [MixinA, MixinB])
const mixinAB = new MixinAB('hello', 'world')
console.log(mixinAB)
mixinAB.functionA()
