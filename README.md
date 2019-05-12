# PackManProject
[ javascript ] 팩맨 게임 개인 프로젝트

<img src="https://postfiles.pstatic.net/MjAxOTA1MTJfMTQ0/MDAxNTU3NjQ0NTUyMTc3.6jtkP4lESBoONX3Yb1p_MPuQTSCzwEEA5WcHYbirM6cg.F2etHUIA3dMpJUpEel9byjE5oGQcrLyYCkoCW91R8RQg.PNG.kwjing93/PACKMAN1(0512)png.png?type=w966">


<img src="https://postfiles.pstatic.net/MjAxOTA1MTJfNzYg/MDAxNTU3NjQ0NTU0NTEx.1eXQn-rsaROUgKVSn-Ev1eR7QDpHZBnm5sWPQJOqQuUg.st6y-9SA2BdjhLwymrFoUBFfW6jhwrRPhT5Xd1jddjEg.PNG.kwjing93/PACKMAN2-1.png?type=w966">


[ 디자인 ]
- (1) 게임스테이지 정보를 가진 2차원 배열을 map.js로 정의하여 유지보수성 고려
- (2) Modal PopUp을 이용한 결과 출력

[ 게임 오브젝트 처리 ]
- (3) 게임에 사용되는 모든 객체들의 등장 및 제거를 처리하는 ObjectManager 클래스 정의
- 객체마다 고유한 속성을 인스턴스 생성시 클래스의 생성자 인수로 처리
- 키보드 이벤트를 이용한 캐릭터의 이동 설정

[ 게임 LOOP ]
- setTimeout 메서드로 GameLoop 구현
- 모든 객체들의 공통 기능은 최상위 클래스인 GameObject의 tick, render 메서드로 정의하여 하위 객체들이 재정의 할 수 있도록 설계

<img src="https://postfiles.pstatic.net/MjAxOTA1MTJfMjEw/MDAxNTU3NjQ0NTU2MTkw.OZF6A-JjsWTgmxpBnZYLQHdm9dRHRBJ1TGjfHWRQh1Ig.h3--6FZ5QnvxzsYwfFdsQQ-bNds1oF97p-wK20UQFhUg.PNG.kwjing93/PACKMAN3(0512).png?type=w966">


[ 유저 처리 ]
- 유저에 대한 데이터베이스를 JSON 객체와 배열을 이용하여 관리

<img src="https://postfiles.pstatic.net/MjAxOTA1MTJfOTkg/MDAxNTU3NjQ0NTU3NjUy.udTjnLoYyqTupQ4YBlaZ2Ow00L1HcmYgosUXk4595h8g.60-btkIVjf3-pVmEZlKKggYxynvBYxfKqn4W4ZPYfOMg.PNG.kwjing93/PACKMAN4(0512).png?type=w966">


[ 주요 코드 ]

- (1) 게임스테이지 정보를 가진 2차원 배열을 map.js로 정의하여 유지보수성 고려
- (2) 맵 블록 위에 Math객체의 random() 메서드를 사용하여 아이템 생성 




<img src="https://postfiles.pstatic.net/MjAxOTA1MTJfMjE4/MDAxNTU3NjQ0NTU4OTg4.eVSMrDljyLeHlxpULwctV9KTzAD8ZkE8yxGJ345ZrgYg.DSEGF-g4zHavn1x5eaDF4VZZ7dnA-b27S7tOvlqvelsg.PNG.kwjing93/PACKMAN5(0512).png?type=w966">

[ 센서를 활용한 충돌검사 ]

- (1) 두 객체의 포지션 스타일 속성을 비교한 충돌체크 메서드 정의
- (2) sensor.js를 정의하여 캐릭터 객체 상하좌우에 부착하여 속도와 방향값 변경에 사용

