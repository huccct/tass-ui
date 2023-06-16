<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-06 13:30:25
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-16 16:46:05
-->
<h1 align="center">
    <img src="https://img1.imgtp.com/2023/06/02/e2evKisd.png">
</h1>
<p align="center">
    <a href="#">
        <img src="https://img.shields.io/github/package-json/v/huccct/tass-ui">
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/stars/huccct/tass-ui">
    </a>
    <a href="#">
        <img src="https://img.shields.io/github/license/huccct/tass-ui">
    </a>
</p>

- 💪 Vue 3 Composition API
- 🔥 Written in TypeScript

## 安装

```
npm i tass-ui -S
```

## 快速开始

```vue
<template>
  <tass-button type="primary">按钮</tass-button>
</template>
```

```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import TassUI from 'tass-ui';
import 'tass-ui/es/style.css';
const app = createApp(App);
app.use(TassUI).mount('#app');
```

## 在线文档

https://huccct.github.io/

## 使用仓库相关命令

### 安装 pnpm

```
npm i pnpm -g
```

### 安装所有依赖

```
pnpm install
```

### 启动本地测试项目

```
pnpm run dev
```

### 打包组件库

```
pnpm run build:components
```

### 启动文档

```
pnpm run docs:dev
```

### 单元测试

```
pnpm run test
```

### 查看测试覆盖率

```
pnpm run coverage
```
