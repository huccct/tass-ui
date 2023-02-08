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
              :class="[show == item.id ? 'icon-select' : 'icon-unselect']"
              style="float: right"
            ></tass-icon>
          </div>
          <transition name="tas-collapse">
            <div class="tas-collapse-content" v-show="show === item.id">
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
    }
  });

  let show = ref(0);

  function toggle(index) {
    // 获取index 来判断当前点击并展示
    // console.log(show.value, index);

    if (show.value === index) show.value = 0;
    else show.value = index;
  }
</script>
