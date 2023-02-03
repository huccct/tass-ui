<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-30 11:59:28
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-30 12:18:11
-->
<template>
  <!--手风琴组件-->
  <div class="ec-collapse">
    <ul class="ec-collapse-ul">
      <li>
        <div v-for="item in posts" :key="item.id">
          <div class="ec-collapse-title" @click="toggle(item.id)">
            {{ item.title }}
            <echo-icon name="chevronright" :class="[show == item.id?'icon-select':'icon-unselect']" style=" float:right;"></echo-icon>
          </div>
          <transition  >
            <div class="ec-collapse-content" v-show="show === item.id">
              {{ item.body }}
            </div>

          </transition>
        </div>
      </li>
     
    </ul>
  </div>
</template>

<script lang="ts" setup name="EchoCollapse">
  import { ref } from 'vue';
  import { computed, provide } from 'vue';
  const props = defineProps({
    posts: {
      type: Array,
      default: [],
      required: false
    },
  
   
  });
  

  let show = ref(0);
  let state = ref(false);

  function toggle(index) {
    // 获取index 来判断当前点击并展示
    // console.log(show.value, index);

    if (show.value === index) show.value = 0;
    else show.value = index;
  }


</script>

