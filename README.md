# PackManProject
[ javascript ] 팩맨 게임 개인 프로젝트

<img src="https://postfiles.pstatic.net/MjAxOTA1MDlfODAg/MDAxNTU3MzI4OTQ1NzQz.3M3-hgyLE94d3KrYOU44OpwdIt2VtZD92SMX74mK_OEg.mzkkn2rhS9ZG6eT9bU0aqTK4IpCzu_fdxIVXDdRMSnkg.PNG.kwjing93/PACKMAN1.png?type=w966">


<img src="https://postfiles.pstatic.net/MjAxOTA1MDlfMTYg/MDAxNTU3MzI4OTQ3MTYw.uma9ZVs-WzMaCZD7Wh0mALyI3jTUnT_kDlwcv7AS8aEg.bDwaiMdHeKnQDLIAnBmZoQ5QxQZtrWnB4hnkwEkPYXUg.PNG.kwjing93/PACKMAN2-1.png?type=w966">

[ 디자인 ]
- 게임스테이지 정보를 가진 2차원 배열을 MAP.JS로 정의하여 유지보수성 고려
- modal POPUP을 이용한 결과 출력

[ 게임 오브젝트 처리 ]
- 게임에 사용되는 모든 객체들의 등장 및 제거를 처리하는 objectManager 클래스 정의
- 객체마다 고유한 속성을 인스턴스 생성시 클래스의 생성자 인수로 처리
- 키보드 이벤트를 이용한 캐릭터의 이동 설정

[ 게임 LOOP]
- setTimeout 메서드로 gameLoop 구현
- 모든 객체들의 공통 기능은 최상위 클래스인 GameObject의 tick, render 메서드로 정의하여 하위 객체들이 재정의 할 수 있도록 설계

<img src="https://postfiles.pstatic.net/MjAxOTA1MDlfMjk3/MDAxNTU3MzI4OTQ5NTA4.jxIL8OI035VG00-yI_D4F0-Cn_XhMmxPamUAMdhS3-og.A8aux9pTaQC4nt7F8uVdgf3A4DR8mB_wiRsY-0K6d7wg.PNG.kwjing93/PACKMAN2-2.png?type=w966">


[ 유저 처리 ]
- 유저에 대한 데이터베이스를 json 객체와 배열을 이용하여 관리

<img src="https://postfiles.pstatic.net/MjAxOTA1MDlfMjAx/MDAxNTU3MzI4OTUxNzkx.b7TvbojLec5GK0T9nn6dNtOXj6dCIMJwTtSS4aV0wPsg.RWLDaKacFHBOQN-8pPXKDgWRbkYJC77_FDQywi12UK4g.PNG.kwjing93/PACKMAN3-1.png?type=w966">

[ 주요 코드 ]

1) 이중 배열을 활용한 맵 생성 (위에꺼 사용)
2) 맵 블록 위에 Math객체의 random() 메서드를 사용하여 아이템 생성 
3) JSON 객체에 유저정보 저장 (위에꺼 사용)



<img src="https://postfiles.pstatic.net/MjAxOTA1MDlfMjY1/MDAxNTU3MzI4OTUzNDYx.i16bP_zra8i8hO3IRmd1F8ab9tVXxl-IaUCFms0fRBIg.5Xh5h9XlS4C3Nt-HNyBhK6BeX0tWDi35ZjBONfwHs3og.PNG.kwjing93/PACKMAN4.png?type=w966">

[ 센서를 활용한 충돌검사 ]

- 두 객체의 포지션 스타일 속성을 비교한 충돌체크 메서드 정의
- sensor.js를 정의하여 캐릭터 객체 상하좌우에 부착하여 속도와 방향값 변경에 사용

