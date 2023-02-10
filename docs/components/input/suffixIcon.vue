<template>
  <div>
    <tass-input v-model="inputVal" prefix-icon="upload" />
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  let inputVal = ref('');
</script>
<style></style>
