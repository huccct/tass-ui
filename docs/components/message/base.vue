<template>
  <tass-button @click="showMsg">show Message</tass-button>
</template>
<script setup lang="ts">
  import { TassMessage } from '@tass-ui/components/message';
  function showMsg() {
    TassMessage({
      message: 'this is a message',
      type: 'info',
      center: false,
      showIcon: true
    });
  }
</script>
