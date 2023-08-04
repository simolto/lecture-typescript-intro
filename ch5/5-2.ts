// 5-2. 인터페이스 - 함수의 매개변수로 정의할 수 있는 인터페이스

// 예제1: TS 인터페이스
interface User {
  name: string
  age: number
}

function getUser(user: User) {
  return user
}

getUser({ name: 'bob', age: 23, job: 'teacher' })
getUser({ name: 'bob', age: 23 })
