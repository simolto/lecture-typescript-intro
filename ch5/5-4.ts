// 5-4. 인터페이스 - 인덱싱 방식을 정의할 수 있는 인터페이스

// 예제1: TS 인터페이스
interface StringArray {
  [index: number]: string
}

const arr: StringArray = ['a', 'b', 'c']
arr[0] // 'a'
