<script setup lang="ts">
  import Base from './base.vue';
  import MaxSize from './maxSize.vue';
</script>
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding: 20px;
  }
  .tass-button {
      margin:10px 5px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>

# Pagination 分页
当数据量过多时，使用分页分解数据。

## 基础用法
total表示总条目数，pagesize用于设置每页显示的页码数量，page默认起始页
<div class="example">
    <Base/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-pagination
      @change-page="changePage"
      :pagesize="pageSize"
      :total="total"
      :page="1"
    ></tass-pagination>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const total = ref(6);
  const pageSize = ref(2);
  const changePage = (page: number) => {};
</script>
```
</details>

## 设置最大页码按钮数
当总页数超过 pagesize 时，Pagination 会折叠多余的页码按钮。通过调节 pagesize 来设置 
<div class="example">
    <MaxSize/>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <tass-pagination
      @change-page="changePage"
      :pagesize="pageSize"
      :total="total"
      :page="1"
    ></tass-pagination>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const total = ref(6);
  const pageSize = ref(1);
  const changePage = (page: number) => {};
</script>
```
</details>