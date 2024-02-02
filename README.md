# Adriel Frontend Assignment

## 배포 페이지(vercel)

https://adriel-fe-assignment-h01010.vercel.app/

## 직접 실행하는 방법

1) git clone을 해주세요

2) 아래 명령어를 순서대로 실행해주세요.

```bash
npm install
npm start
```

## 과제 요구사항

### **조건**

1. SPA framework 중 하나를 사용할 것<br />
**⇒ React + Typescript를 사용하였습니다.**
2. Statement management 라이브러리를 사용할 것<br />
**⇒ MobX를 사용하였습니다.**

### **목적**

1. SPA framework 및 Statement management library를 사용하는 이유, 설계 의의를 이해하고 그에 맞게 코드를 작성할 수 있는가
2. Component를 적절히 나눌 수 있는가

**⇒ Clock과 Tooltip 컴포넌트로 나누어 구현**

**⇒ Clock과 Tooltip은 상위 컴포넌트(App)에 동일한 레벨에 두어, 공유가 필요한 자원은 props drilling이 일어나지 않도록 Mobx-store를 통해 접근**

**⇒ `현재 시간 정보`와 `사용자가 시계에 마우스를 오버했는지`에 대한 상태값을 store에 두고 관리**

## 실제 구현 태스크

- [x]  실시간 반영 시계 & 시침, 분침, 초침 구현
- [x]  마우스 우상단 툴팁 구현
- [x]  시간 정보 및 공유 상태 store 관리
- [x]  마우스 위치 custom hook 처리

## Structures

*본 프로젝트는 Create-React-App(Typescript)를 통해 생성되었습니다.*

*아래는 `src/` 하위 폴더 및 파일에 대한 설명입니다.*

- `/components`: 여러 페이지에서 공유되는 shared(or common) 컴포넌트를 두는 폴더
- `/custom-hooks`: 커스텀 훅 함수를 정의하는 폴더
(본 프로젝트에서는 마우스 포지션에 대한 정보를 훅을 통해 접근할 수 있도록 처리)
- `/store`: Mobx store를 이용하여 컴포넌트 간에 공유가 필요한 상태값 저장
- `App.tsx`: 상위 컴포넌트

## 사용기술 및 라이브러리

- `React`
- `Typescript`
- `MobX & Mobx-react-lite`
- `eslint & prettier`
- `styled-components`

## GIT

### Commit & Branch

- branch: 
작업 단위로 커밋을 나누었고, `feature/analog-clock-page`에서 개발 후 `master` merge 하였습니다.<br />
- commit msg type
[참고 링크](https://medium.com/humanscape-tech/%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9D%B8-commit-message-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-conventional-commits-ae885898e754)
    - **build**: 모듈 설치 및 package 변화
    - **feat**: 새로운 기능 및 컴포넌트 구현
    - **fix**: 버그 수정
    - **refactor**: 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링
    - **style**: 스타일 적용 및 수정
    - **chore**: 기타 변경사항(assets, [readme.md](http://readme.md) 등)

## Reference

- analog clock: https://codesandbox.io/p/sandbox/analog-clock-using-react-idkpz?file=%2Fsrc%2Fstyles.css%3A87%2C14
- mouse position hooks: https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/
