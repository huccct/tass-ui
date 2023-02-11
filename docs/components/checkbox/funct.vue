<template>
  <tass-checkbox v-model="checked1" @change="handlerChange">Option 1</tass-checkbox>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked1 = ref(true);
  const handlerChange = () => {
    alert('This is a handleChange test.');
  };
</script>
<style></style>
