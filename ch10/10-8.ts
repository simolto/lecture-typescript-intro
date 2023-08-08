// 10-8. 제네릭 - 제네릭 타입 제한(힌트)

// 설명: 제네릭 구문에 추가적으로 배열을 기입함으로써 매개변수의 타입을 제한할 수 있습니다.

// 예제1: TS 제네릭
function getTextLength<T>(text: T[]): number {
  return text.length
}

getTextLength<string>(['a'])
