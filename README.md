# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



# CSS 네이밍 규칙


1. 시작의 이름은 영문 소문자를 사용하며 두 번째 단어부터 언더바(-)으로 연결하며 대문자는 사용하지 않는다.
2. 영문 소문자, 숫자, 언더바(_)만 사용할 수 있다.
3. 언더바(_)는 2개 이상의 단어를 조합할 때만 사용한다.
4. 클래스 예약어에 숫자, 영문소문자, 언더바(_)을 조합하여 사용할 수 있다.
5. 언더바(_)을 이용하여 3단계를 초과하여 사용하는 방법은 지양한다.
6. 다중의 클래시 지정을 허용하며 최대 3개 이상 사용하지 않도록 주의한다.


# Git 커밋 메세지 정의

## 예제
```bash 
style: [섹션명] 작업내용
```

## Commit Message 구조

```bash 

type(타입) : title(제목)
body(본문, 생략 가능) 
Resolves : #issueNo, ...(해결한 이슈 , 생략 가능) 
See also : #issueNo, ...(참고 이슈, 생략 가능)
```

## 기본 규칙

1. 제목과 본문을 빈 행으로 구분
2. 제목은 영문 기준 50글자 이하
3. 첫 글자는 대문자로 작성
4. 제목 끝에 마침표X
5. 제목은 명령문으로 사용, 과거형X
6. 본문의 각 행은 영문 기준 72글자 이하
7. 어떻게 보다는 무엇과 


## Type
```
Type : 키워드	사용 시점
feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등)
기능 수정이 없는 경우
design : 사용자 UI 디자인 변경 (CSS 등)
test : 테스트 코드, 리팩토링 테스트 코드 추가
refactor : 코드 리팩토링
build : 빌드 파일 수정
ci : CI 설정 파일 수정
perf : 성능 개선
chore : 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등)
rename : 파일 혹은 폴더명을 수정만 한 경우
remove : 파일을 삭제만 한 경우
```

참고 URL https://jane-aeiou.tistory.com/93

## vscode 를 사용 하는데 pritter 적용이 안될때.

```
prettier를 설치했는데 적용이 안되고 있다면, 다음과 같은 방법을 시도해보세요.

VSCode 설정에서 format on save가 체크되어 있는지 확인해보세요.
VSCode 설정에서 default formatter가 null로 되어있는 경우가 있습니다. 이 경우에는 esbenp.prettier-vscode로 변경해주세요.
```