// 7-4. 연산자를 이용한 타입 정의 - 인터섹션 타입 소개 및 정의

// 설명: 인터섹션 타입은 (and) 연산자를 활용하여 정의합니다.

// 예제1: TS 인터섹션
interface Person {
  name: string
  age: number
}
interface Developer {
  name: string
  skill: string
}

type MyUser = Person & Developer
const user: MyUser = {
  name: 'bob',
  age: 31,
  skill: 'typescript',
}
