// 9-4. 클래스 - 문법 정의

// 예제1: TS 클래스
class Person {
  private name: string
  private age: number
  readonly log: string

  constructor(name: string, age: number, log: string) {
    this.name = name
    this.age = age
    this.log = log
  }
}

const ellie = new Person('ellie', 21, 'log')
console.log(ellie.log) // log
