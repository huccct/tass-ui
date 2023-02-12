<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-30 11:59:28
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-12 21:15:48
-->
<template>
  <!--手风琴组件-->
  <div class="tas-collapse">
    <ul class="tas-collapse-ul">
      <li>
        <div v-for="item in posts" :key="item.id" class="tas-collapse-panel">
          <div class="tas-collapse-title" @click="toggle(item.id)">
            {{ item.title }}
            <tass-icon
              name="chevronright"
              :class="[arr.includes(item.id) === true ? 'icon-select' : 'icon-unselect']"
              style="float: right"
            ></tass-icon>
          </div>
          <transition name="tas-collapse" >
            <div class="tas-collapse-content" v-show="arr.includes(item.id) === true">
              {{ item.body }}
            </div>
          </transition>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="TassCollapse">

  import '../style/';
  import { reactive } from 'vue';
type Iprops={
  posts:Array<{
    id:number,
    title?:string,
    body?:string
  }>,
  types:boolean
}
  const props = withDefaults(defineProps<Iprops>(),{
    types:false
  })

  const arr= reactive<number[]>([]);
  function toggle(index:number) {
    // arr.push(index);
    // console.log(props.types)
  if(!arr.includes(index)){ //集合中是否包含
    if(props.types == true){      //普通类型
        arr.push(index);
    }else {                       //手风琴类型
        arr.length = 0;
        arr.push(index);
    }
  }else {
    arr.splice(arr.indexOf(index),1)
  };
  ;
}
</script>
