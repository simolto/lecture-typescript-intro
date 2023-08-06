// 7-2. 연산자를 이용한 타입 정의 - 유니온 타입 정의 방식과 장점

// 설명: 유니온 타입은 (or) 연산자를 활용하여 정의하며,
//  VSCode와 함께 사용한다면 자동 추론되는 타입 결과를 통해 해당 데이터의 API를 안내받을 수 있다는 장점이 있습니다.

// 예제1: TS 유니온
function getValue(value: string | number | boolean) {
  return value
}
getValue('1')
getValue(1)
getValue(true)

// ······················································
// 예제2: TS 유니온 타입의 장점
//  - any 타입을 사용하는 경우
function getAge1(age: any) {
  age.toFixe() // 💩, 자동 완성x
  return age
}
//  - union 타입을 사용하는 경우
function getAge2(age: number | string) {
  if (typeof age === 'number') {
    age.toFixed() // ✨, 자동 완성o
    return age
  }
  if (typeof age === 'string') {
    return age
  }
  return new TypeError('age must be number or string')
}
