<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-01 20:23:37
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
  <echo-icon name="left"></echo-icon>
  <echo-icon name="right"></echo-icon>
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

  <echo-checkbox disabled>Not disabled</echo-checkbox>
  <echo-checkbox v-model="check1" @change="handlerChange">Option A</echo-checkbox>
  <echo-checkbox v-model="check2">Option B</echo-checkbox>
  <br />
  <br />

  <h2>{{ checkList }}</h2>
  <echo-checkbox-group v-model="checkList">
    <echo-checkbox v-for="(item, index) in showList" :key="index" :label="item"></echo-checkbox>
  </echo-checkbox-group>
  <br />
  <br />

  <echo-transfer v-model="rightValue" :data="transferData" :props="transferProps"></echo-transfer>
  <br />
  <br />

  <echo-button type="success" @click="ClickMessage_1">Click Message</echo-button>
  <echo-button type="danger" @click="ClickMessage_2">Click Message</echo-button>
  <echo-button type="warning" @click="ClickMessage_3">Click Message</echo-button>
  <echo-button type="info" @click="ClickMessage_4">Click Message</echo-button>
  <br />
  <br />

  <echo-collapse>
    <template v-slot:one>
      <div style="height: 200px">标题一的内容</div>
    </template>
    <template v-slot:two>
      <div style="height: 200px">标题二的内容</div>
    </template>
    <template v-slot:three>
      <div style="height: 200px">标题三的内容</div>
    </template>
  </echo-collapse>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <echo-button type="primary" :visible="!normalViaible" @click="changeView">dialog</echo-button>
  <echo-dialog
    :visible="normalViaible"
    title="这是"
    width="500px"
    @cancel="handleClickCancelButton"
    @confirm="handleConfirmButton"
  >
  </echo-dialog>

  <br />
  <br />

  <echo-alert></echo-alert>

  <echo-button type="primary"></echo-button>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { EchoMessage } from '../packages/components/message';

  let normalViaible = ref(false);
  function add() {
    alert('This is a add test.');
  }
  let check1 = ref(false);
  let check2 = ref(true);

  let checkList = ref(['Shanghai', 'Hangzhou']);
  let showList = ref(['Shanghai', 'Hangzhou', 'Beijing', 'Guangzhou']);
  const handlerChange = () => {
    alert('This is a handleChange test.');
  };

  interface T {
    key: number;
    label: string | number;
    disabled: boolean;
  }
  const generateData = () => {
    const data: T[] = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: i,
        disabled: i % 4 === 0
      });
    }
    return ref(data);
  };
  const transferData = generateData();

  let rightValue = ref([1, 4]);
  let transferProps = reactive({
    key: 'key',
    label: 'label',
    disabled: 'disabled'
  });

  const ClickMessage_1 = () => {
    EchoMessage({
      message: 'Success',
      type: 'success',
      center: true
    });
  };

  const ClickMessage_2 = () => {
    EchoMessage({
      message: 'Error',
      type: 'error',
      center: true
    });
  };

  const ClickMessage_3 = () => {
    EchoMessage({
      message: 'Warning',
      type: 'warning',
      center: true
    });
  };

  const ClickMessage_4 = () => {
    EchoMessage({
      message: 'Info',
      type: 'info',
      center: true
    });
  };

  function changeView() {
    normalViaible.value = !normalViaible.value;
  }
  const handleClickCancelButton = () => {
    normalViaible.value = !normalViaible.value;
  };
  const handleConfirmButton = () => {
    normalViaible.value = !normalViaible.value;
  };
</script>

<style lang="scss"></style>
