# 😎 Mike's portfolio source code

Here is the source code of my portfolio.

> You can check it online at https://mikezotov.dev

## Integrations and features
- Vue 3 (composition API, script setup)
- TypeScript
- Pinia
- Vite
- Vue-i18n
- SSG (vite-ssg) = pre-rendering
- SEO-friendly config
   - open graph support
   - twіtter meta support
   - sitemap
- Dark, light, and system color schemes/modes
- SVG sprite
- eslint and stylelint support.

## Requirements
- Node version >= 18

## Project Setup

### Init project
```sh
yarn
```

### Run dev server

```sh
yarn run dev
```

### Generate static pages (SSG = pre-rendering)

```sh
yarn run generate
```

### Preview SSG result (run generate first!)

```sh
yarn run preview
```

<details>
<summary>⛏ Lint options</summary>

### Lint and fix (scripts and styles)

```sh
yarn run lint
```

### Lint and fix (only scripts)

```sh
yarn run lint:eslint
```

### Lint and fix (only styles)

```sh
yarn run lint:stylelint
```

</details>
