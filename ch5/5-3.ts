// 5-3. 인터페이스 - 함수의 스펙(구조)으로 정의할 수 있는 인터페이스

// 예제1: TS 인터페이스
interface SumFn {
  (a: number, b: number): number
}

//  - 방법1
const sum: SumFn = sumFunction()
function sumFunction(): SumFn {
  return (a, b) => a + b
}
//  - 방법2
const sum2: SumFn = (a, b) => a + b
