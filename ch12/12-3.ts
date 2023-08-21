// 12-3. 타입 추론 - 복잡한 구조에서의 타입 추론 방식

// 예제1: TS 추론
interface Dropdown<T> {
  value: T
  title: string
}
interface DetailedDropdown<K> extends Dropdown<K> {
  description: string
  tag: K
}

const detailedItem: DetailedDropdown<string> = {
  description: '',
  tag: '',
  value: '',
  title: '',
}
