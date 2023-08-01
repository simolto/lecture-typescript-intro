// 3-2-2. 기본 타입 - 이넘, 애니, 보이드, 네버 선언

// 예제1-1: TS 이넘
//  - 특정 값(상수)들의 집합
enum Fruits {
  Apple,
  Banana,
  Melon,
}
const apple: Fruits = Fruits.Apple
const banana: Fruits = Fruits['Banana']
const Melon: Fruits = Fruits[2] // 💩, 해당 에러에 대해 자세한 설명은 3-2-2-1.ts 참고

// 예제1-2: TS 애니
//  - 모든 타입에 허용
let num: any = 1
num = '1'
num = undefined

// 예제1-3: TS 보이드
//  - 없는 반환 타입
function doNothing(): void {
  return
}
doNothing()

// 예제1-4: TS 네버
//  - 코드 블럭 끝에 절대 도달하지 않는 함수
function neverEnd(): never {
  while (true) {}
  // ..생략된 코드..(실행x)
}
function throwError(message: string): never {
  throw new Error(message) // ! 함수의 실행 흐름 중단
  // ..생략된 코드..(실행x)
}
