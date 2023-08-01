// 2-1. 타입스크립트 프로젝트 시작 방법(라이브러리 설치 및 TSC)
// 설명: 타입스크립트 라이브러리와 라이브러리에서 제공하는 명령어를 통해 TS 프로젝트를 시작할 수 있습니다.
/**
 * [실습 순서]
 * 1. TS 전역(시스템 레벨)설치 혹은 지역(프로젝트 레벨)설치
 *  - npm i typescript -g 혹은 npm init -y 이후 npm i typescript
 *
 * 2. 터미널 창에서 TS 컴파일 명령어 입력
 *  - tsc <컴파일할 .ts파일의 위치>
 *
 * 3. 컴파일 결과 .js파일 확인
 * 4. tsc help 살펴보고 -w 구문 활용
 */
// 예제1
function printText(text) {
    return text;
}
printText('hello ts');
