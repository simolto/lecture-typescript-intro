// 5-6. 인터페이스 - 그 밖에 특징 및 보다 효과적인 선언 방식도 가능한 인터페이스

// 예제1: TS 인터페이스(정의하지 않아도 되는, 물음표 기호! (?))
interface Cat {
  name: string
  type?: string
}

const myCat: Cat = {
  name: 'myCat-name',
}

// ······················································
// 예제2: TS 인터페이스(수정 불가한, 읽기 전용 속성! readonly)
interface Dog {
  name: string
  readonly type: string
}

let myDog: Dog = {
  name: 'myDog-name',
  type: 'pomeranian',
}
myDog.type = 'chihuahua' // 💩

// ······················································
// 예제3: TS 인터페이스(읽기 전용 배열, ReadonlyArray<T>)
let arr: ReadonlyArray<number> = [1, 2, 3]
arr.splice(0, 1) // 💩
arr[0] = 100 // 💩

// ······················································
// 예제4: TS 인터페이스(객체 선언 시 타입 체킹)
interface CraftBeer {
  brand?: string
}

function brewBeer(beer: CraftBeer) {}
brewBeer({ brandon: 'what' }) // 💩

//  - 해결 방법1
let myBeer = { brandon: 'what' }
brewBeer(myBeer as CraftBeer) // ✨

//  - 해결 방법2
interface CraftBeer2 {
  brand?: string
  [propName: string]: any
}

// ······················································
// 예제5: TS 인터페이스(클래스 타입 선언)
interface User {
  name: string
  getName(): void
}

class person implements User {
  name: string = 'ellie'
  getName() {
    return this.name
  }
  constructor() {}
}

// ······················································
// 예제6: TS 인터페이스(하이브리드 타입 선언, 함수와 속성을 동시에 가지는 인터페이스, 보다 유연한 객체 구조 및 라이브러리 등에서 API를 제공할 때 유용!)
interface HybridObject {
  (): void
  count: number
}

const hybridObj: HybridObject = function () {
  return 'called!'
}

hybridObj.count = 42

hybridObj() // called!
hybridObj.count // 42
