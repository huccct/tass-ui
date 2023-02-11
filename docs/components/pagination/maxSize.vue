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
  const pageSize = ref(1);
  const changePage = (page: number) => {};
</script>
<style></style>
