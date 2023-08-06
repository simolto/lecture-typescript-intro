// 8-2. 이넘 - 숫자 및 문자형 이넘 정의

// 예제1: TS 숫자형 이넘
enum Characters {
  Kitty,
  Kunge,
  Hoya,
}
const myCharacters = Characters.Hoya
console.log(myCharacters) // 2

// ······················································
// 예제2: TS 문자형 이넘
enum Characters2 {
  Kitty = 'kitty',
  Kunge = 'kunge',
  Hoya = 'hoya',
}
const myCharacters2 = Characters2.Hoya
console.log(myCharacters2) // 'hoya
