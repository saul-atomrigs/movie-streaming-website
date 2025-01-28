## 해결했던 문제들
### 문제 I
- 나는 `pages` 디렉토리에 각 페이지에서만 사용되는 컴포넌트, 타입, 훅 등을 해당 페이지 폴더에 넣는 방식을 택했다.

  문제는 `pages` 디렉토리에는 기본적으로 라우팅되는 "페이지" 컴포넌트만 있어야 한다는 것.

  개발 서버 localhost에서 실행할 때는 문제가 되지 않았지만, production 배포 시 다음 에러와 함께 배포가 중단된다:

   > Build optimization failed: found pages without a React Component as default export in 

- 해결: `next.config.js`에 간단히 다음 설정을 추가하였다.

   >   pageExtensions: ['page.tsx', 'page.ts']
  
  그리고 실제 "페이지"로 렌더링 되어야 할 파일들을 위 포맷으로 바꾸어 주었다. 

  여기서 주의할 점은 _app.tsx, index.tsx 등도 바꿔줘야 한다 (_app.page.tsx, index.page.tsx).

  그리고 tailwind도 바로 먹히질 않아서 한 줄 더 추가해줘야 한다:

```ts
  content: [
    './pages/*.page.{js,ts,jsx,tsx,mdx}', // 추가!
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```

## 스크린샷
| Login                                                                                                | Signup                                                                                                | What is being tested against |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------- |
| ![Login Screenshot](https://github.com/user-attachments/assets/5fcf8b45-d2ee-4ed5-a998-17c3e4b42a7d) | ![Signup Screenshot](https://github.com/user-attachments/assets/186c4eed-e378-4f85-905c-9421815b430a) | Test description goes here   |
