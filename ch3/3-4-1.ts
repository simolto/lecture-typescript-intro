// Q. TS 옵셔널 파라미터 오류 처리 방법

// A.c가 제공되지 않은 경우를 대비하여 if문 처리하거나, c가 제공되지 않은 경우를 대비하여 기본값 처리(default parameters)합니다.

// 예제1
function sumSolution1(a: number, b: number, c?: number): number {
  return c === undefined ? a + b : a + b + c
}

// 예제2
function sumSolution2(a: number, b: number, c: number = 0): number {
  return a + b + c
}
