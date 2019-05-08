# PackManProject
[ javascript ] 팩맨 게임 개인 프로젝트

<img src="https://postfiles.pstatic.net/MjAxOTA1MDhfMjA1/MDAxNTU3MjQ4NzA0MDA4.ggJmPe1iIojOusQv-MW8bRGe6BLHPis0rPn3JtGq_Kwg.nY0JosOP7wCAaILDFGBLNDKg2cW8CR3KYzJcgxLXuQ4g.PNG.kwjing93/PACKMAN1.png?type=w966">

<img src="https://postfiles.pstatic.net/MjAxOTA1MDhfMzkg/MDAxNTU3MjQ4NzA1OTA3.iXJjpCmZVkuy36NO3bI_JX0l1PbiG00xFx45Qtr3AcMg.lxji8kn2CKjECAQfQllAICkJps1X5_VkBEPxDr2ja1og.PNG.kwjing93/PACKMAN2.png?type=w966">

[ 디자인 ]
- modal 창 사용
- map.js 파일에 메서드를 정의하여 맵을 화면에 출력

[ 객체 처리 ]
- objectManager 파일을 정의하여 화면에 등장할 객체들의 부착, 삭제를 관리
- 객체의 생성자를 통해 객체의 초기값을 주입하여 설정
- switch case문을 사용해 키보드 값에 따라 캐릭터의 이동을 설정

[ 유저 처리 ]
- json 객체에 유저의 정보를 저장하여 배열에 넣어 활용

[ 게임 프레임웍 ]
- setTimeout 메서드로 gameLoop를 구현하여 사용
- tick, render 메서드를 사용해 객체들의 움직임과 화면 구현을 관리

[ 처리 ]
- javascript 파일의 외부 참조 <script src="">
- flag 값을 활용하여 흑백논리에 해당하는 코드에 적용
- onKeyDown, onClick 등의 이벤트 속성을 활용
- EventListener, init(), 익명함수를 활용해 문서가 로드된 이후 javascript코드의 실행을 유도

<img src="https://postfiles.pstatic.net/MjAxOTA1MDhfODEg/MDAxNTU3MjQ4NzA3MjMw.XyGcy4JQ_HPLFmTPt2dBB2sKqwfGKzsCuyJn_ImAbaEg.PAsrNqsNCdUogUYTD9c2PajrBEe6tkg4s_9UB9CBS1og.PNG.kwjing93/PACKMAN3.png?type=w966">

[ 주요 코드 ]

1) 이중 배열을 활용한 맵 생성
2) 맵 블록 위에 Math객체의 random() 메서드를 사용하여 아이템 생성 
3) JSON 객체에 유저정보 저장



<img src="https://postfiles.pstatic.net/MjAxOTA1MDhfMTc3/MDAxNTU3MjQ4NzA4MzIy.FxNnwB8L7SbAukauIxLOSbtecyt2rWrB9gczBEjy7usg.6cWJwTVd8AE528ZPTdoFpsEV-4NRna6ieFZnu8Ka8gEg.PNG.kwjing93/PACKMAN4.png?type=w966">

[ 센서를 활용한 충돌검사 ]

- common.js를 정의하여 충돌체크 메서드 사용
- sensor.js를 정의하여 캐릭터 객체 상하좌우 부착하여 속도와 방향값 변경에 사용

