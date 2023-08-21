// 12-5. 타입 추론 - ts language server

// 설명: vscode단에서 제공해주는 속성 API의 규칙들, 자동완성 기능은 전부
//  vscode에 내장되어있는 intelliSense로 동작합니다.
//  그러나 intelliSense가 일어나기 위해서는 기본적으로 vscode 내부적으로 ts language server가 돌아야(가동되어야) 합니다.
//  한편 타입스크립트를 npm을 통해 설치하면 node_modules에서 bin폴더 내부에 tsserver라는 폴더를 확인할 수 있는데요,
//  이를 통해서 라이브러리 내부뿐만 아니라 vscode 내부적으로는 타입스크립트를 지원하는 ts language server 파일이 내부적으로 탑재되어 있다는 것을 확인해 볼 수 있겠습니다.

// 참고:
//  - VSCode 타입스크립트 소개: https://code.visualstudio.com/docs/languages/typescript#_code-suggestions
//  - VSCode Language Server Extension 가이드: https://code.visualstudio.com/api/language-extensions/language-server-extension-guide
//  - Language Server 소개: https://langserver.org
//  - Language Server Protocol 개요: https://learn.microsoft.com/ko-kr/visualstudio/extensibility/language-server-protocol?view=vs-2019
