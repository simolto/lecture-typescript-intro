// 10-9. 제네릭 - 정의되어 있는 타입으로 제네릭 타입 제한

// 설명: 정의된 타입과 extends 키워드를 활용해서 매개변수에 대한 타입을 구분할 수 있습니다.

// 예제1: TS 제네릭
interface LengthType {
  length: number
}

function getTextLength<T extends LengthType>(text: T): number {
  return text.length // ✨
}

getTextLength(1) // error
getTextLength('1')
getTextLength({ a: 1 }) // error
