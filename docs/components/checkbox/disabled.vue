<template>
  <tass-checkbox disabled>Disabled</tass-checkbox>
  <tass-checkbox v-model="checked1">Not Disabled</tass-checkbox>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  const checked1 = ref(true);
</script>
<style></style>
