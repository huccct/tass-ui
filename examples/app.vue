<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-22 16:06:45
-->
<template>
  <EchoButtonGroup>
    <EchoButton size="small" @click="add">button</EchoButton>
    <EchoButton size="small" type="primary">button</EchoButton>
    <EchoButton size="small" type="success">button</EchoButton>
    <EchoButton size="small" type="danger">button</EchoButton>
    <EchoButton size="small" type="warning">button</EchoButton>
    <EchoButton size="small" type="info">button</EchoButton>
  </EchoButtonGroup>

  <br />
  <br />
  <EchoButton>按钮默认尺寸</EchoButton>
  <EchoButton size="medium">按钮中等尺寸</EchoButton>
  <EchoButton size="small">按钮小尺寸</EchoButton>
  <EchoButton size="mini">按钮极小尺寸</EchoButton>
  <EchoButton size="tiny">按钮超小尺寸</EchoButton>
  <br />
  <br />

  <EchoButton plain type="primary">朴素按钮</EchoButton>
  <EchoButton round type="primary">椭圆</EchoButton>
  <EchoButton disabled type="primary">禁止</EchoButton>
  <EchoButton circle type="primary">圆</EchoButton>
</template>
<script setup lang="ts">
  function add() {
    alert(1 + 1);
  }
</script>
<style></style>
