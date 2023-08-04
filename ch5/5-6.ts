// 5-6. 인터페이스 - 확장(상속) 가능한 인터페이스

// 예제1: TS 인터페이스
interface Person {
  name: string
  age: number
}

interface Developer extends Person {
  position: string
}

const ellie: Developer = {
  name: 'ellie',
  age: 21,
  position: 'front-end',
}
