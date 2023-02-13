<!--
 * @Author: 申恒杰
 * @Date: 2023-02-12 18:23:39
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\table\src\table.vue
-->
<template>
  <div :class="[`tas-table-${size}`,customClass]">
    <table>
      <thead v-if="showHeader">
        <tr>
          <th v-for="(x,index) in options.fileds" :key="index" :style="[headStyle,{'text-align':x.align}]">
            <!-- 表头插槽 -->
            <slot :name="'head-'+x.field" :scope="x" v-if="$slot['head-'+x.field]"></slot>
            <div v-else>{{x.title}}</div>
          </th>
        </tr>  
      </thead>
      <tbody>
        <tr v-for="(v,i) in options.datas" :key="i">
          <!-- 内容数据格式 -->
          <td v-for="(m,j) in options.fileds" :key="j" 
          :style="
            [
              rowStyle,
              {
                width:options.fileds[j].width?(options.fileds[j].width):'','text-align':options.fileds[j].align
              }
            ]
            ">
            <slot :name="options.fileds[j].field" 
            :scope="{rowIndex:i,cellIndex:j,row:v}" 
            v-if="$slot[options.fileds[j].field]"></slot>
            <div v-else>{{options.datas[i][options.fileds[j].field]}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
import { ref, useSlots } from 'vue'
import '../style/'
const props = defineProps({
  // 传入数据,object类型
  options:{
    type:Object,
    default:()=>{
      return {
        // options定义的参数名字,对应name
        fileds:[],
        // 数据
        datas:[],
      }
    }
  },
  // 尺寸
  size:{
    type:String,
    default:"default"
  },
  // 是否显示表头
  showHeader:{
    type:Boolean,
    default:true
  },
  // 表头样式
  headStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  // 表格内容样式
  rowStyle:{
    type:Object,
    default:()=>{
      return {}
    }
  },
  customClass:String
})
const $slot = useSlots()
</script>