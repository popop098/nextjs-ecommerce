# Nextjs Ecommerce App

> React, Next.js, Typescript, Redux를 활용한 간단한 쇼핑몰 앱입니다.

&nbsp;

### 목차

- [미리 보기](#미리-보기)
- [웹 사이트](#웹-사이트)
- [사용 방법](#사용-방법)
- [설계](#설계)
- [기능](#기능)
- [폴더 구조](#폴더-구조)
- [사용 기술](#사용-기술)
- [문제 해결](#문제-해결)
- [학습 내용](#관련-학습-내용)

---

## 미리 보기

### 웹 뷰
<p float="left">
    <img width="250" alt="web1" src="https://user-images.githubusercontent.com/52603436/135758932-5f49714f-329a-401d-b461-99909647587a.png">
    <img width="250" alt="web2" src="https://user-images.githubusercontent.com/52603436/135758958-e722db3c-7db8-47a8-b2a8-723337510576.png">
    <img width="250" alt="web4" src="https://user-images.githubusercontent.com/52603436/135759010-41b41e4a-a1b1-46b3-aa64-2009ff933fe4.png">
    <img width="250" alt="web5" src="https://user-images.githubusercontent.com/52603436/135760779-c003b598-bd72-4cba-b482-b771b8536f45.png">
</p>

### 모바일 뷰
<p float="left">
    <img width="200" alt="mobile1" src="https://user-images.githubusercontent.com/52603436/135758825-42eea750-9728-4f92-b219-6c9864d2ee88.png">
    <img width="200" alt="mobile3" src="https://user-images.githubusercontent.com/52603436/135758845-b57d9f1e-bd42-43dd-9621-f43ed4c19644.png">
    <img width="200" alt="mobile4" src="https://user-images.githubusercontent.com/52603436/135758879-5ca68284-eb27-4172-a690-c06c5e7b2bf9.png">
    <img width="200" alt="mobile5" src="https://user-images.githubusercontent.com/52603436/135760762-e8fae0e2-c905-4656-8431-e8f45bce3a8e.png">
</p>

&nbsp;

---

## 웹 사이트

👇 배포된 사이트는 하단의 링크에서 확인 가능합니다. <br/>
> [https://nextjs-ecommerce-golee.vercel.app/](https://nextjs-ecommerce-sandy.vercel.app/)

&nbsp;

---

## 사용 방법

```
# Repository 복제하기
$ git clone https://github.com/goleedev/nextjs-ecommerce

# Repository로 이동하기
$ cd nextjs-ecommerce

# Dependencies 설치하기
$ npm install

# App 실행하기
$ npm run dev
```

&nbsp;

---

## 설계

![architecture view](https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/build-seo-friendly-what-is-redux.gif)

### Actions
- addToCart: 장바구니에 아이템을 추가하는 액션으로, cart state를 변경시킨다.
- incrementQuantity: 장바구니에 추가된 아이템 수량을 추가하는 액션으로, cart state를 변경시킨다.
- decrementQuantity: 장바구니에 추가된 아이템 수량을 제거하는 액션으로, cart state를 변경시킨다.
- removeFromCart: 장바구니에 아이템을 제거하는 액션으로, cart state를 변경시킨다.

&nbsp;

---

## 기능

- 카테고리 별 리스트 및 이동
- 아이템 가격 순 필터링 기능
- 아이템 디테일 페이지
- 아이템 장바구니 추가 및 제거 기능
- 아이템 수량 (quantity) 조절 기능

### 카테고리 별 리스트 및 이동

네비게이션의 카테고리 명 클릭 시, 카테고리 별 데이터를 가져와서 리스트로 볼 수 있다.

<img width="250" alt="web4" src="https://user-images.githubusercontent.com/52603436/135759010-41b41e4a-a1b1-46b3-aa64-2009ff933fe4.png">

|카테고리 이동|이동 완료|
|---|---|
|<img width="250" alt="mobile2" src="https://user-images.githubusercontent.com/52603436/135759140-9df7267d-17fc-432d-bbda-e74a87e3eebf.png"> | <img width="250" alt="mobile3" src="https://user-images.githubusercontent.com/52603436/135758845-b57d9f1e-bd42-43dd-9621-f43ed4c19644.png"> |


### 아이템 가격 순 필터링 기능

아이템을 낮은 가격과 높은 가격 순으로 필터링 할 수 있다.

|낮은 가격 순|높은 가격 순|
|---|---|
|<img width="250" alt="web2" src="https://user-images.githubusercontent.com/52603436/135759245-15c2da07-dc90-497e-a49a-2abb844619f5.png"> | <img width="250" alt="web3" src="https://user-images.githubusercontent.com/52603436/135759292-6bf03218-13a0-4110-af7e-eb3c4c08d4b0.png"> |

### 아이템 디테일 페이지

아이템 클릭 시, 해당 아이템을 장바구니에 담을 수 있는 장바구니 버튼을 포함한 아이템 디테일 페이지로 넘어간다.

<img width="250" alt="web4" src="https://user-images.githubusercontent.com/52603436/135759010-41b41e4a-a1b1-46b3-aa64-2009ff933fe4.png">

### 아이템 장바구니 추가 및 제거 기능

아이템을 장바구니에 추가 및 제거할 수 있다.

|장바구니 추가|장바구니 제거|
|---|---|
|<img width="250" alt="mobile4" src="https://user-images.githubusercontent.com/52603436/135759537-32fea068-c02e-410e-8ace-72bb20be9320.png"> | <img width="250" alt="mobile5" src="https://user-images.githubusercontent.com/52603436/135760762-e8fae0e2-c905-4656-8431-e8f45bce3a8e.png"> |


### 아이템 수량 (quantity) 조절 기능

장바구니에 이미 추가된 아이템에 대해 수량을 추가/제거할 수 있다.

<img width="250" alt="web5" src="https://user-images.githubusercontent.com/52603436/135760779-c003b598-bd72-4cba-b482-b771b8536f45.png">

&nbsp;

---

### 로그인 기능

| 로그인페이지(PC)                                   | 로그인페이지(모바일)                                     |
|----------------------------------------------|-------------------------------------------------|
| <img alt="web6" src="/preview/login_pc.png"> | <img alt="mobile6" src="/preview/login_mb.png"> |

### 로그인 기능 - 에러

| 로그인페이지(PC)                                       | 로그인페이지(모바일)                                         |
|--------------------------------------------------|-----------------------------------------------------|
| <img alt="web7" src="/preview/login_err_pc.png"> | <img alt="mobile7" src="/preview/login_err_mb.png"> |
|<img src="/preview/login_field_err_pc.png" alt="web8"> | <img src="/preview/login_field_err_mb.png" alt="mobile8"> |

### 회원가입 기능

| 회원가입페이지(PC)                                     | 회원가입페이지(모바일)                                       |
|-------------------------------------------------|----------------------------------------------------|
| <img alt="web9" src="/preview/register_pc.png"> | <img alt="mobile9" src="/preview/register_mb.png"> |

### 회원가입 기능 - 에러

| 회원가입페이지(PC)                                                        | 회원가입페이지(모바일)                                                  |
|--------------------------------------------------------------------|---------------------------------------------------------------|
| <img alt="web10" src="/preview/register_id_err_pc.png"> | <img alt="mobile10" src="/preview/register_id_err_mb.png">    |
| <img src="/preview/register_field_err_pc.png" alt="web11">         | <img src="/preview/register_field_err_mb.png" alt="mobile11"> |

### 헤더

<img src="/preview/header.png">

## 폴더 구조

```
├── node_modules (.gitignore)
├── public
│ └── favicon.ico
├── assets
│ ├── icon
│ └── image
├── staet
│ ├── cart.slice.ts
│ └── store.ts
├── components
│ ├── CategoryCard.tsx
│ ├── Footer.tsx
│ ├── Header.tsx
│ ├── Navbar.tsx
│ └── ProductCard.tsx
├── styles
│ ├── CartPage.module.css
│ ├── CategoryCard.module.css
│ ├── Footer.module.css
│ ├── globals.css
│ ├── Header.module.css
│ ├── Home.module.css
│ ├── Navbar.module.css
│ ├── NotFoundPage.module.css
│ ├── Product.module.css
│ ├── ProductCard.module.css
│ └── ProductPage.module.css
├── pages
│ ├── api
| │ └── products
| | │ ├── data.json
| | │ ├── index.ts
| | │ └── [category].ts
│ ├── product
| │ └── [slug].tsx
| └── [category].ts
│ ├── _app.tsx
│ ├── _document.tsx
│ ├── cart.tsx
│ ├── index.tsx
│ ├── sale.tsx
│ └── upcoming.tsx
├── types
│ ├── product-type.ts
│ └── products-type.ts
├── utils
│ └── filter.ts
├── .gitignore
├── tsconfig.json
├── package.json
├── package-lock.json (.gitignore)
└── README.md
```

&nbsp;

---

## 사용 기술

- ReactJS
- TypeScript
- Next.js
- Redux

&nbsp;

---

## 문제 해결

### Link 태그 내에서 Image 컴포넌트 사용

- 문제상황: Next.js의 Link 태크 내에서 Image 컴포넌트를 사용할 때 렌더링 에러 발생함
  
- 해결 방법: Image property 중 width와 height 값을 주면서 에러 해결함
[Getting error when using next/image within <Link />](https://github.com/vercel/next.js/issues/20434)

### Next.js Request & Response Data 타입

- 문제상황: 데이터를 받아올 때 response와 request의 타입을 명시하지 않아 에러가 발생함
  
- 각각 NextApiRequest, res: NextApiResponse 타입을 사용하여 에러 해결함
[Request & Response Data](https://nextjs.org/docs/basic-features/typescript)

&nbsp;

---

## 관련 학습 내용

### getStaticProps

### CSS Grid Layout
그리드를 사용하여 해당 디자인에 맞춘 레이아웃 디자인을 학습함
[CSS Grid Layout](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Grid_Layout)

### 숫자 세자리 수 마다 콤마 추가
원화와 같이 세자리 마다 콤마가 사용되는 숫자는 `toLocaleString()` 메서드를 이용하여 처리할 수 있음

### Strike Through 텍스트 스타일
text-decoration 프로퍼티의 line through를 사용하여 중간 줄 효과를 줌
[text-decoration](https://www.w3schools.com/cssref/pr_text_text-decoration.asp)

&nbsp;

## 구현하지 못한 기능

- 소분류 카테고리 필터링

## 추가로 구현한 기능

- 아이템 수량(quantity) 컨트롤 기능

## 실제로 운영되는 사이트라면 필요한 기능

- 결제 기능
- Auth 기능
- 아이템 Favorite 기능
