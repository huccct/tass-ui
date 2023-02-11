<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-11 20:45:56
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-11 21:58:25
-->
<template>
  <tass-checkbox isChecked v-model="checked1">Option 1</tass-checkbox>
  <tass-checkbox disabled>Option 2</tass-checkbox>
  <tass-checkbox v-model="checked2">Option 3</tass-checkbox>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked1 = ref(true);
  const checked2 = ref(false);
</script>
<style></style>
