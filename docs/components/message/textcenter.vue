<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-08 14:50:12
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 14:51:37
-->
<template>
  <tass-button @click="showMsg">Centered text</tass-button>
</template>
<script setup lang="ts">
  import { TassMessage } from '@tass-ui/components/message';
  function showMsg() {
    TassMessage({
      message: 'this is a message',
      type: 'info',
      center: true,
      showIcon: true,
      closeable: true
    });
  }
</script>
