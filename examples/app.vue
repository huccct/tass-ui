<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-23 21:37:09
-->
<template>
  <echo-button-group>
    <echo-button @click="add">button</echo-button>
    <echo-button type="primary">button</echo-button>
    <echo-button type="success">button</echo-button>
    <echo-button type="danger">button</echo-button>
    <echo-button type="warning">button</echo-button>
    <echo-button type="info">button</echo-button>
  </echo-button-group>
  <br />
  <br />

  <echo-button>按钮默认尺寸</echo-button>
  <echo-button size="medium">按钮中等尺寸</echo-button>
  <echo-button size="small">按钮小尺寸</echo-button>
  <echo-button size="mini">按钮极小尺寸</echo-button>
  <echo-button size="tiny">按钮超小尺寸</echo-button>
  <br />
  <br />

  <echo-button plain type="primary">
    <echo-icon name="ico_med_doctor" />
    朴素按钮
  </echo-button>
  <echo-button round type="primary">椭圆</echo-button>
  <echo-button disabled type="primary">禁止</echo-button>
  <echo-button circle type="primary">圆</echo-button>
  <br />
  <br />

  <echo-button type="success" icon="ec-icon-ico_med_doctor">button</echo-button>
  <echo-button type="primary" loading>button</echo-button>
  <echo-button type="danger">button</echo-button>
  <br />
  <br />

  <echo-icon name="ico_med_doctor"></echo-icon>
  <echo-icon name="ico_doc_chart_curve"></echo-icon>
  <echo-icon name="ico_med_band-bid"></echo-icon>
  <echo-icon name="ico_med_board"></echo-icon>
  <echo-icon name="ico_doc_chart_trend"></echo-icon>
  <echo-icon name="ico_doc_chart_curve"></echo-icon>
  <echo-icon name="ico_med_board"></echo-icon>
  <echo-icon name="ico_doc_chart_trend"></echo-icon>
  <echo-icon name="ico_doc_chart_pie"></echo-icon>
  <echo-icon name="ico_med_stethoscope"></echo-icon>
  <echo-icon name="jia"></echo-icon>
  <echo-icon name="ico_med_records5"></echo-icon>
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
  <br />
  <br />

  <echo-checkbox></echo-checkbox>
  <echo-checkbox-group></echo-checkbox-group>
</template>
<script setup lang="ts">
  function add() {
    alert('This is a fun test.');
  }
</script>
<style lang="scss"></style>
