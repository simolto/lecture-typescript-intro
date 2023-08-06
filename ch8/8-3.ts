// 8-3. 이넘 - 활용 사례

// 설명: 이넘은 함수에 들어가는 인자로 다양한 데이터의 모습들이 들어갈 때 그것을 분기 처리하는 구문에서 유용합니다.

// 예제1: 이넘 활용
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestions(answer: Answer) {
  if (answer === Answer.Yes) '정답'
  if (answer === Answer.No) '오답'
}

askQuestions(Answer.Yes) // ✨
askQuestions(Answer.No) // ✨
// askQuestions('y') 💩
// askQuestions('yes') 💩
// askQuestions('yes!') 💩
