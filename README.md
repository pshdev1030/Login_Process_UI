## 로그인 ui

로그인 ui를 그려본다

## 이유

로그인 과정에서 loading indicator만 보여주는 것은 지루할 수 있다.

더 나은 사용자 경험을 위해선 사용자를 지루하지 않게 해야한다.

예시)

- 엘리베이터의 거울 / 기다리는 시간에 거울을 보게해서 로그인을 지루하지 않게 느껴지도록 함
- 롤 로딩화면 / 주기적으로 바뀌는 재밌는 문구들을 보여줌

## 과정

1차 토큰 발급 => 2차 토큰 발급(3초 안에 요청이 안 오게 되면 fallback ui를 보여줌) => 로그인 완료

## TODO

에러가 발생했을 경우 처리
토큰을 중앙에서 관리할 수 있도록 auth provider 수정
