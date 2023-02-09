<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-30 11:59:28
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 11:30:50
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
  import { ref } from 'vue';
  import { computed, provide } from 'vue';
  const props = defineProps({
    posts: {
      type: Array,
      default: [],
      required: false
    },
    types: {
      type: Boolean,
      default: false,
      required: false
    }
  });


  const arr = ref([]);
  function toggle(index) {
    // arr.push(index);
    // console.log(props.types)
    
  if(!arr.value.includes(index)){ //集合中是否包含
    if(props.types == true){      //普通类型
        arr.value.push(index);
    }else {                       //手风琴类型
        arr.value = [];
        arr.value.push(index);
    }
  }else arr.value.pop(index);     
}
</script>
