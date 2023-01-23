<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 14:30:35
-->
<template>
  <EchoButtonGroup>
    <EchoButton @click="add">button</EchoButton>
    <EchoButton type="primary">button</EchoButton>
    <EchoButton type="success">button</EchoButton>
    <EchoButton type="danger">button</EchoButton>
    <EchoButton type="warning">button</EchoButton>
    <EchoButton type="info">button</EchoButton>
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

  <EchoButton plain type="primary">
    <EchoIcon name="ico_med_doctor" />
    朴素按钮
  </EchoButton>
  <EchoButton round type="primary">椭圆</EchoButton>
  <EchoButton disabled type="primary">禁止</EchoButton>
  <EchoButton circle type="primary">圆</EchoButton>
  <br />
  <br />

  <EchoButton type="success" icon="ec-icon-ico_med_doctor">button</EchoButton>
  <EchoButton type="primary" loading>button</EchoButton>
  <br />
  <br />

  <EchoIcon name="ico_med_doctor"></EchoIcon>
  <EchoIcon name="ico_doc_chart_curve"></EchoIcon>
  <EchoIcon name="ico_med_band-bid"></EchoIcon>
  <EchoIcon name="ico_med_board"></EchoIcon>
  <EchoIcon name="ico_doc_chart_trend"></EchoIcon>
  <EchoIcon name="loading"></EchoIcon>
</template>
<script setup lang="ts">
  function add() {
    alert('This is a fun test.');
  }
</script>
<style></style>
