// 6-1. 타입 별칭 - 예제 코드

// 예제1: TS 숫자와 문자열 타입 별칭
type Name = string
type Age = number

const myName: Name = 'bob'
const myAge: Age = 21

// ······················································
// 예제2: TS 객체 타입 별칭
type Person = {
  name: string
  age: number
}
const person: Person = {
  name: 'wang',
  age: 31,
}

// ······················································
// 예제3: TS 함수 타입 별칭
type MathOperation = (a: number, b: number) => number

const add: MathOperation = (a, b) => a + b
const multiply: MathOperation = (a, b) => a * b

// ······················································
// 예제4: TS 유니온 타입 별칭
type Status = 'idle' | 'loading' | 'success' | 'error'

const currentStatus: Status = 'loading'
