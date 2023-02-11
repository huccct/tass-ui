<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-11 19:45:27
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-11 20:00:57
-->
<template>
  <div>
    <tass-pagination
      @change-page="changePage"
      :pagesize="pageSize"
      :total="total"
      :page="1"
    ></tass-pagination>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  const total = ref(6);
  const pageSize = ref(2);
  const changePage = (page: number) => {};
</script>
<style></style>
