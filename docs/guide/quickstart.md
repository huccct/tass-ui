# 快速开始

本节将介绍如何在项目中使用 Tass UI.
## 用法
### 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
```
// main.ts
import { createApp } from 'vue';
import App from './App.vue';
import TassUI from 'tass-ui';
import 'tass-ui/es/style.css';
const app = createApp(App);
app.use(TassUI);
app.mount('#app');
```
# 开始使用
现在你可以启动项目了。 对于每个组件的用法，请参考单个组件对应的文档。