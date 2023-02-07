# 安装


### 环境支持
Tass UI 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。

由于 Vue 3 不再支持 IE11，Tass UI 也不再支持 IE 浏览器。

### 版本
Tass UI 目前还处于快速开发迭代中。


### npm安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
```
npm i tass-ui -S
```
### CDN方式
```
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/tass-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/tass-ui/lib/index.js"></script>
```