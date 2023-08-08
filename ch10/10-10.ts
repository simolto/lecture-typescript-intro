// 10-10. 제네릭 - keyof 예약어로 타입 제한

// 설명: 정의되어 있는 제네릭 타입과 keyof 키워드(예약어)를 활용해서 키값만 들어갈 수 있도록 타입 제한할 수 있습니다.

// 예제1: TS 제네릭
interface ProductItem {
  name: string
  price: number
  stock: number
}

function getProductItemOption<T extends keyof ProductItem>(itemOption: T): T {
  return itemOption
}

getProductItemOption('name')
getProductItemOption('price')
getProductItemOption('stock')
