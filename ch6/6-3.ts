// 6-3. 타입 별칭 - 인터페이스와 타입 별칭의 차이점

// 설명: 인터페이스와 타입 별칭은 모두 타입을 정의하는 방법이지만 차이점이 있습니다.
//  인터페이스와 타입 별칭은 어떤 것을 사용해야 할지 선택은 주로 개발자의 취향과 프로젝트의 구조에 따라 달라집니다.
//  일반적으로 데이터의 구조를 정의할 때는 인터페이스를 사용하는 경향이 있고,
//  유니온 타입이나 제네릭 타입 등을 포함하는 복잡한 타입을 정의할 때는 타입 별칭을 사용하는 경우가 많습니다.

/**
 * 요약:
 *  1. 인터페이스
 *   - 덕 타이핑 지원(이름이 같은 멤버들만 일치하면 타입 호환성을 가짐)ㅇ
 *   - 상속 지원
 *   - 동일한 이름의 인터페이스를 여러 번 선언하면 자동으로 합쳐져서 하나의 인터페이스로 처리됨
 *   - 클래스 구현 가능
 *
 *
 *  2. 타입 별칭
 *   - 구조적 타이핑 지원(구조적으로 동일한 형태면 타입 호환성을 가짐)
 *   - 상속 지원x
 *   - 동일한 이름의 인터페이스를 여러 번 선언하면 컴파일 에러 발생!
 *   - 클래스 구현 불가능!
 *
 */
