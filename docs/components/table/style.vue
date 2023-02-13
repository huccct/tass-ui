<!--
 * @Author: 申恒杰
 * @Date: 2023-02-12 20:59:40
 * @Description: 铁沸物
 * @FilePath: \tass-ui\docs\components\table\style.vue
-->
<template>
  <tass-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle" size="mini" ></tass-table>
</template>

<script setup>
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