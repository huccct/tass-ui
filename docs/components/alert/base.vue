<template>
  <tass-alert show-icon title="Hello Tass" type="error" closeable> </tass-alert>
  <tass-alert show-icon title="Hello Tass" type="success" closeable @close="alertClose"
    >alert with callback</tass-alert
  >
</template>
<script setup lang="ts">
  const alertClose = () => {
    alert('Hello Tass');
  };
</script>
