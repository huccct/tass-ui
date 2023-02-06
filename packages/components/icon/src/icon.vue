<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 20:39:12
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 20:39:17
-->
<template>
  <i :class="`tas-icon-${name}`"></i>
</template>
<script setup lang="ts" name="TassIcon">
  const props = defineProps({
    name: {
      type: String,
      default: ''
    }
  });
</script>
<style></style>
