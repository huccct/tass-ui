<template>
  <div>
    <tass-input v-model="inputVal" />&nbsp; <tass-input v-model="inputVal" size="medium" />&nbsp;
    <tass-input v-model="inputVal" size="mini" />&nbsp;
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>
