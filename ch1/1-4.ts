// 1-4. 자바스크립트에 타입이 있을 때 장점2

// 설명: TS를 쓴다면 안전한 프로그래밍이 에디터 단에서 가능합니다.
//  sum 함수에 들어가는 입력값에 대한 타입을 제한하고 sum 함수도 결괏값에 대한 타입을 추론하여 반환합니다.
//  이를 통해 함수 결과에 대한 데이터 형의 메서드를 편하게 안내받을 수 있습니다.

// 예제1
function sum(a: number, b: number): number {
  return a + b
}

const result = sum(1, 2)
result.toString()
