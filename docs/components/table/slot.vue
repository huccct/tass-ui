<!--
 * @Author: 申恒杰
 * @Date: 2023-02-12 20:52:10
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\table\slot.vue
-->
<template>
  <tass-table :options="options">
    <template #id="item">
      <div style="color: #008dff">{{ item.scope.row.id }}</div>
    </template>
    <template #action="item">
      <tass-button type="text" size="small" :disabled="item.scope.rowIndex % 2 == 0" >编辑</tass-button >
      <tass-button type="text" style="color: #ec3437" size="small" >删除</tass-button >
    </template>
  </tass-table>
</template>

<script setup>
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
      },
});
const dropchange = (item, index) => {
  console.log(item, index);
};
const { options, dorpoptions } = state;
</script>