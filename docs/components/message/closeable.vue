<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-08 14:18:50
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 14:40:36
-->
<template>
  <tass-button @click="showMsg1">success</tass-button>
  <tass-button @click="showMsg2">warning</tass-button>
  <tass-button @click="showMsg3">info</tass-button>
  <tass-button @click="showMsg4">error</tass-button>
</template>
<script setup lang="ts">
  import { TassMessage } from '@tass-ui/components/message';
  function showMsg1() {
    TassMessage({
      message: 'Congrats, this is a success message.',
      type: 'success',
      center: false,
      showIcon: true,
      closeable: true
    });
  }
  function showMsg2() {
    TassMessage({
      message: 'Warning, this is a warning message.',
      type: 'warning',
      center: false,
      showIcon: true,
      closeable: true
    });
  }
  function showMsg3() {
    TassMessage({
      message: 'this is a message.',
      type: 'info',
      center: false,
      showIcon: true,
      closeable: true
    });
  }
  function showMsg4() {
    TassMessage({
      message: 'Oops, this is a error message.',
      type: 'error',
      center: false,
      showIcon: true,
      closeable: true
    });
  }
</script>
