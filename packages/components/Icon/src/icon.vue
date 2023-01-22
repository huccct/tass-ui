<template>
  <i :class="`ec-icon-${name}`"></i>
</template>
<script setup lang="ts" name="EchoIcon">
  const props = defineProps({
    name: {
      type: String,
      default: '',
    },
  });
</script>
<style></style>
