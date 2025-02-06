## 프로젝트 구조도
<img width="537" alt="스크린샷 2025-01-31 오후 5 50 06" src="https://github.com/user-attachments/assets/fc8395e1-b873-4ccc-80f2-5d383a29c10b" />


## 고민했던 부분들

### 고민 I: "지우기 쉬운 코드"

"좋은 코드"에 대한 고민으로 비롯되어 "지우기 쉬운 코드"를 만드려고 노력하였다.

이를위해 특정 페이지에만 사용되는 모듈들은 해당 페이지 디렉토리에 모아 배치시켰다.

하지만 문제는 next.js의 `pages` 디렉토리에는 "페이지" 컴포넌트만 있어야 한다는 것이다.

트러블슈팅: https://dev.to/solleedata/peijibyeolro-keomponeonteu-yutil-hug-taib-moaseo-gwanrihagi-feat-nextjs-peiji-rauting-2hcn

### 고민 II: 반응형 컴포넌트를 깔끔하게 구현하기

모바일 디바이스와 데스크탑에서 서로 다른 컴포넌트를 보여줘야 할 경우, 이를 깔끔하게 구현해줄 방법을 고민하였다.

`<Responsive>`라는 컴포넌트를 만들어 각각 mobile, desktop 프롭을 넘겨줌으로 추상화 작업을 진행했다.

블로그: https://dev.to/solleedata/baneunghyeong-keomponeonteu-ggalggeumhage-mandeulgi-1n1c

### 고민 III: e2e 테스트와 유닛 테스트의 기준

e2e는 보통 치밀하게 모든 케이스를 테스트하진 않는다. 

경우의 수가 많다면 e2e가 아니라 component나 unit test로 분리할 수 없을지 고민해보는 게 좋다.

## 프로덕션 배포

**프로덕션 배포: https://movie-streaming-website-flax.vercel.app**
- 테스트 로그인 아이디: test@sldf.com
- 테스트 비밀번호: 123123

