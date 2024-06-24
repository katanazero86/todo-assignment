# todo-assignment

---

- 사용 기술스택

Vite, React, TypeScript, react-hook-form, yup, tailwindCSS, eslint, prettier

- node, npm 버전

npm: 10.2.1   
node: 18.18.0

- 프로젝트 구조
1. src/components: 리액트 컴포넌트를 관리하는 디렉토리
2. components/atoms: 아토믹한 단위에 컴포넌트를 관리하는 디렉토리
3. components/Todo: Todo UI를 구성하는 컴포넌트를 관리하는 디렉토리
4. src/pages: 페이지 단위에 컴포넌트를 관리하는 디렉토리
5. src/validations: 유효성 검사 코드를 관리하는 디렉토리
6. src/validations/yup: yup 패키지를 사용한 유효성 검사를 위한 스키마를 관리하는 디렉토리
7. src/@types: 재사용하는 타입 별칭 또는 인터페이스를 관리하는 디렉토리

- 실행방법
1. 개발모드: npm run dev
2. 프로덕션모드: npm run build 이후, npm run preview



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
