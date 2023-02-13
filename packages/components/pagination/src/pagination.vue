<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-11 09:35:12
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-13 14:10:47
-->
<template>
  <div class="tas-pagination">
    <a @click="changePage(false)" href="javascript:;">上一页</a>
    <span v-if="currentPage > 3">...</span>
    <a
      @click="changePage(item)"
      href="javascript:;"
      :class="{ active: currentPage === item }"
      v-for="item in list"
      :key="item"
      >{{ item }}</a
    >
    <span v-if="currentPage < pages - 2">...</span>
    <a @click="changePage(true)" href="javascript:;" :class="{ disabled: currentPage === pages }"
      >下一页</a
    >
  </div>
</template>
<script setup lang="ts">
  import '../style/';
  import { useAttrs, computed, ref } from 'vue';
  const props = defineProps({
    //数据总条数
    total: {
      type: Number,
      default: 80
    },
    //每页数据条数
    pagesize: {
      type: Number,
      default: 8
    }
  });
  let pages = computed(() => Math.ceil(props.total / props.pagesize));
  const emit = defineEmits(['change-page']);
  const attrs = useAttrs();

  const currentPage = ref(attrs.page || 1) as any;
  const list = computed(() => {
    const result = [];
    // 总页码小于等于5；大于5
    if (pages.value <= 5) {
      // 总页码小于等于5的情况
      for (let i = 1; i <= pages.value; i++) {
        result.push(i);
      }
    } else {
      // 总页码大于5
      if (currentPage.value <= 2) {
        // 左侧临界值
        for (let i = 1; i <= 5; i++) {
          result.push(i);
        }
      } else if (currentPage.value >= pages.value - 1) {
        // 右侧临界值
        for (let i = pages.value - 4; i <= pages.value; i++) {
          result.push(i);
        }
      } else {
        // 中间的状态
        for (let i = currentPage.value - 2; i <= currentPage.value + 2; i++) {
          result.push(i);
        }
      }
    }
    return result;
  });
  // 控制上一页和下一页变化
  const changePage = (type: any) => {
    if (type === false) {
      // 上一页
      // 页面是第一页时，禁止点击操作
      if (currentPage.value === 1) return;
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    } else if (type === true) {
      // 下一页
      // 页面是最后页时，禁止点击操作
      if (currentPage.value === pages.value) return;
      if (currentPage.value < pages.value) {
        currentPage.value += 1;
      }
    } else {
      // 点击页码
      currentPage.value = type;
    }
    emit('change-page', currentPage.value);
  };
</script>
<style></style>
