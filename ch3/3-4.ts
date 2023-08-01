// 3-4. 함수 타입 - 옵셔널 파라미터, rest 파라미터, 콜백 this 선언

// 예제1-1: TS 옵셔널 파라미터
//  - 가변적일 수 있는 매개변수 갯수 지정
function sum(a: number, b: number, c?: number): number {
  return a + b + c // 💩, 해당 에러에 대해 자세한 설명은 3-4-1.ts 참고
}
sum(1, 2, 3)

// 예제1-2: TS rest 파라미터
//  - ES6, rest 문법(...args)에서의 타입 지정
function getNumbers(...num: number[]) {
  return num
}
getNumbers(1, 2, 3)

// 예제1-3: TS 콜백 this
class Handler {
  info: string

  onClick(this: Handler, e: Event) {
    console.log(this.info) // Handler 클래스의 인스턴스인 handler의 info에 접근
  }
}
const handler = new Handler()
const buttonEl = document.createElement('button')
buttonEl.addEventListener('click', handler.onClick)

class Handler2 {
  info: string

  onClick(this: void, e: Event) {
    // console.log(this.info) // 오류: 'this'를 사용하여 'info'에 접근할 수 없음
    console.log('clicked')
  }
}

const handler2 = new Handler2()
const buttonEl2 = document.createElement('button')
buttonEl2.addEventListener('click', handler2.onClick)
