
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:0px;
  }
  
  details > summary:first-of-type {
      font-size: 10px;
      padding: 8px 0;
      cursor: pointer;
      color: #1989fa;
  }
</style>
# Collapse 折叠面板
## 基础用法
每次能展开多个面板。
<div class="example">
    <div>
        <tass-collapse :posts="list" :types="true">
           <div style="height: 200px"></div>
        </tass-collapse>
    </div>
</div>

<script>
export default {
  data() {
    return {
      list: [{
      title: '标题1',
      body: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that',
      id: 1
    },
    {
      title: '标题2',
      body: 'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive ',
      id: 2
    },
    {
      title: '标题3',
      body: 'Simplify the process: keep operating process simple and intuitive;Definite and clear: enunciate your intentions clearly so that the users can quickly',
      id: 3
    },
    {
      title: '标题4',
      body: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;Controlled consequences: users should be granted the',
      id: 4
    }
   ]
    }
  }
}
</script>
<details>
<summary>展开查看</summary>

```vue
<template>
    <div>
      <tass-collapse :posts="list" :types="true">
         <div style="height: 200px"></div>
      </tass-collapse>
    </div>
</template>

<script lang="ts" setup>
   const list = ref([
    {
      title: '标题1',
      body: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that',
      id: 1
    },
    {
      title: '标题2',
      body: 'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive ',
      id: 2
    },
    {
      title: '标题3',
      body: 'Simplify the process: keep operating process simple and intuitive;Definite and clear: enunciate your intentions clearly so that the users can quickly',
      id: 3
    },
    {
      title: '标题4',
      body: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;Controlled consequences: users should be granted the',
      id: 4
    }
  ]);
</script>
```
</details>

## 手风琴效果
每次只能展开一个面板。
<div class="example">
    <div>
      <tass-collapse :posts="list" :types="false">
         <div style="height: 200px"></div>
      </tass-collapse>
    </div>
</div>


<details>
<summary>展开查看</summary>

```vue
<template>
    <div>
      <tass-collapse :posts="list" :types="false">
         <div style="height: 200px"></div>
      </tass-collapse>
    </div>
</template>

<script lang="ts" setup>
   const list = ref([
    {
      title: '标题1',
      body: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that',
      id: 1
    },
    {
      title: '标题2',
      body: 'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive ',
      id: 2
    },
    {
      title: '标题3',
      body: 'Simplify the process: keep operating process simple and intuitive;Definite and clear: enunciate your intentions clearly so that the users can quickly',
      id: 3
    },
    {
      title: '标题4',
      body: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;Controlled consequences: users should be granted the',
      id: 4
    }
  ]);
</script>
```
</details>