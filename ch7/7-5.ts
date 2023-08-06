// 7-5. 연산자를 이용한 타입 정의 - 유니온 타입과 인터섹션 타입의 차이점

// 설명: 인터섹션 타입을 썼을 때는 두 개 이상의 타입을 포함하는 새로운 타입을 만드는 반면에(합집합),
//  유네온 타입을 썼을 때는 함수를 작성한다면 함수 내부에 타입 가드를 다시 쳐야(타입 추론을 시켜나가야 하는) 하는 코드를 작성해야 한다는 것(교집합)이 차이입니다.