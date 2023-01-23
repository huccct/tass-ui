<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 19:59:09
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
  <echo-button type="danger">button</echo-button>
  <br />
  <br />

  <EchoIcon name="ico_med_doctor"></EchoIcon>
  <EchoIcon name="ico_doc_chart_curve"></EchoIcon>
  <EchoIcon name="ico_med_band-bid"></EchoIcon>
  <EchoIcon name="ico_med_board"></EchoIcon>
  <EchoIcon name="ico_doc_chart_trend"></EchoIcon>
  <EchoIcon name="ico_doc_chart_curve"></EchoIcon>
  <EchoIcon name="ico_med_board"></EchoIcon>
  <EchoIcon name="ico_doc_chart_trend"></EchoIcon>
  <EchoIcon name="ico_doc_chart_pie"></EchoIcon>
  <EchoIcon name="ico_med_stethoscope"></EchoIcon>
  <EchoIcon name="jia"></EchoIcon>
  <EchoIcon name="ico_med_records5"></EchoIcon>
  <br />
  <br />

  <echo-row>
    <echo-col :span="24">
      <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-row>
    <echo-col :span="12">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </echo-col>
    <echo-col :span="12">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-row tag="div">
    <echo-col tag="span" :span="12">
      <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-row tag="div" :gutter="20" justify="end">
    <echo-col tag="span" :span="6">
      <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </echo-col>
  </echo-row>
</template>
<script setup lang="ts">
  function add() {
    alert('This is a fun test.');
  }
</script>
<style lang="scss"></style>
