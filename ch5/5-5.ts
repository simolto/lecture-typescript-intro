// 5-5. 인터페이스 - 딕셔너리 패턴을 인덱싱 방식으로 정의할 수 있는 인터페이스

// 예제1: TS 인터페이스
interface StringRegexDictionary {
  [key: string]: RegExp
}

const obj: StringRegexDictionary = {
  something: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
Object.keys(obj).forEach(function (o) {}) // o => string으로 추론!
