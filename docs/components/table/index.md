<!--
 * @Author: 申恒杰
 * @Date: 2023-02-12 20:32:59
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\table\index.md
-->
<script setup>
  import Detail from './detile.vue';
  import Size from './size.vue';
  import Slot from './slot.vue';
  import Style from './style.vue'
</script>
<style>
  .example{
      border: 1px solid #f5f5f5;
      border-radius: 5px;
      padding:20px
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
# Table 表格
用于展示多层次结构的数据，可自定义并保持高度灵活。
## 基础用法
table 表格基本使用示例,需要一个主要的 options 参数。

<div class="example">
    <Detail></Detail>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-table :options="options"></tass-table>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  const state = reactive({
      options:{
        fileds:[
          {field:'id',title:'ID',align:'center'},
          {field:'name',title:'姓名',align:'center'},
          {field:'address',title:'地址',align:'center'},
          {field:'telephone',title:'电话',align:'center'}
        ],
        datas:[
          {id:1,name:'张三',address:'山东青岛',telephone:"13812312312"},
          {id:2,name:'李四',address:'山东济南',telephone:"13812312312"},
          {id:3,name:'王五',address:'北京',telephone:"13812312312"},
          {id:4,name:'赵六',address:'上海',telephone:"13812312312"},
        ]
        },
    });
  const { options } = state;
</script>
```
</details>

## 不同大小
你可以传入一个 size 来确定表格的不同大小，以适配不同的应用场景
<div class="example">
    <Size></Size>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <p>small</p>
  <tass-table :options="options" size="small"></tass-table>
  <p>mini</p>
  <tass-table :options="options" size="mini"></tass-table>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  const state = reactive({
    options:{
        fileds:[
          {field:'id',title:'ID',align:'center'},
          {field:'name',title:'姓名',align:'center'},
          {field:'address',title:'地址',align:'center'},
          {field:'telephone',title:'电话',align:'center'}
        ],
        datas:[
          {id:1,name:'张三',address:'山东青岛',telephone:"13812312312"},
          {id:2,name:'李四',address:'山东济南',telephone:"13812312312"},
          {id:3,name:'王五',address:'北京',telephone:"13812312312"},
          {id:4,name:'赵六',address:'上海',telephone:"13812312312"},
        ]
    }
  });
  const { options } = state;
</script>
```
</details>

## 自定义插槽内容
根据需要自定义表格的插槽内容，插槽接受需要定义表格列的 field 并返回当前行的数据 rowItem ，如果是定义表头，需要在插槽名加上 head- 前缀作为识别符
<div class="example">
    <Slot></Slot>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-table :options="options">
    <template #id="item">
      <div style="color: #008dff">{{ item.scope.row.id }}</div>
    </template>
    <template #action="item">
      <tass-button type="primary" size="small" :disabled="item.scope.rowIndex % 2 == 0" >编辑</tass-button >
      <tass-button type="danger" size="small" >删除</tass-button >
    </template>
  </tass-table>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";
  const state = reactive({
    options:{
        fileds:[
          {field:'id',title:'ID',align:'center'},
          {field:'name',title:'姓名',align:'center'},
          {field:'address',title:'地址',align:'center'},
          {field:'telephone',title:'电话',align:'center'},
          {field:'action',title:'操作',align:'center'}
        ],
        datas:[
          {id:1,name:'张三',address:'山东青岛',telephone:"13812312312"},
          {id:2,name:'李四',address:'山东济南',telephone:"13812312312"},
          {id:3,name:'王五',address:'北京',telephone:"13812312312"},
          {id:4,name:'赵六',address:'上海',telephone:"13812312312"},
        ]
    }
  });
  const dropchange = (item, index) => {
    console.log(item, index);
  };
  const { options, dorpoptions } = state;
</script>

```

</details>

## 自定义表头及表格样式
使用 headStyle 自定义表头的样式，使用 rowStyle 自定义表格内容区域的样式
<div class="example">
    <Style></Style>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <tass-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle" size="mini" ></tass-table>
</template>

<script lang="ts" setup>
  import { reactive, ref } from "vue";
  const state = reactive({
    options:{
        fileds:[
          {field:'id',title:'ID',align:'center'},
          {field:'name',title:'姓名',align:'center'},
          {field:'address',title:'地址',align:'center'},
          {field:'telephone',title:'电话',align:'center'},
        ],
        datas:[
          {id:1,name:'张三',address:'山东青岛',telephone:"13812312312"},
          {id:2,name:'李四',address:'山东济南',telephone:"13812312312"},
          {id:3,name:'王五',address:'北京',telephone:"13812312312"},
          {id:4,name:'赵六',address:'上海',telephone:"13812312312"},
        ]
    },
    headStyle: {
      color: "#fff",
      borderColor: "#855E42",
      backgroundColor: "#9090c0",
    },
    rowStyle: {
      borderColor: "#855E42",
    },
  });
  const { options, headStyle, rowStyle } = state;
</script>
```
</details>