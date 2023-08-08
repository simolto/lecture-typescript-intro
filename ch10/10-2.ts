// 10-2. 제네릭 - 기본 문법

// 예제1: TS 제네릭
function getText<T>(text: T): T {
  return text
}

getText<string>('1')
getText<number>(1)
