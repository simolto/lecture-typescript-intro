// 10-7. 제네릭 - 인터페이스에 제네릭을 선언하는 방법

// 설명: 인터페이스에 제네릭을 선언해서 얼마든지 타입을 전달받을 수 있습니다.

// 예제1: TS 제네릭
interface Dropdown<T> {
  value: T
  selected: boolean
}

const obj: Dropdown<number> = { value: 1, selected: false }
