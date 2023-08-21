// 12-2. 타입 추론 - 인터페이스와 제네릭을 활용한 타입 추론 방식

// 예제1: TS 추론
interface Dropdown<T> {
  value: T
  title: string
}
const shoppingItem: Dropdown<string> = {
  value: '',
  title: '',
}
