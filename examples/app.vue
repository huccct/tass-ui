<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-06 20:56:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-02 19:16:12
-->
<template>
  <tass-button>Default</tass-button>
  <tass-button type="primary">Primary</tass-button>
  <tass-button type="success">Success</tass-button>
  <tass-button type="info">Info</tass-button>
  <tass-button type="warning">Warning</tass-button>
  <tass-button type="danger">Danger</tass-button>

  <br />
  <br />

  <tass-button>按钮默认尺寸</tass-button>
  <tass-button size="medium">按钮中等尺寸</tass-button>
  <tass-button size="small">按钮小尺寸</tass-button>
  <tass-button size="mini">按钮极小尺寸</tass-button>
  <tass-button size="tiny">按钮超小尺寸</tass-button>
  <br />
  <br />

  <tass-button plain type="primary"> 朴素按钮 </tass-button>
  <tass-button round type="primary">椭圆</tass-button>
  <tass-button disabled type="primary">禁止</tass-button>
  <tass-button circle type="primary">圆</tass-button>
  <br />
  <br />

  <tass-button type="success" icon="tas-icon-magnifier">Search</tass-button>
  <br />
  <br />

  <tass-icon name="pluscircle"></tass-icon>&nbsp; <tass-icon name="pushpin"></tass-icon>&nbsp;
  <tass-icon name="textalignjustify"></tass-icon>&nbsp; <tass-icon name="danger"></tass-icon>&nbsp;
  <tass-icon name="success"></tass-icon>&nbsp; <tass-icon name="info"></tass-icon>&nbsp;
  <tass-icon name="warning"></tass-icon>
  <br />
  <br />

  <tass-row>
    <tass-col :span="24">
      <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />

  <tass-row>
    <tass-col :span="12">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col :span="12">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />

  <tass-row tag="div">
    <tass-col tag="span" :span="12">
      <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />

  <tass-row tag="div" :gutter="20" justify="end">
    <tass-col tag="span" :span="6">
      <div style="background-color: #d3dce6; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </tass-col>
    <tass-col tag="span" :span="6">
      <div style="background-color: #e5e9f2; height: 35px; border-radius: 8px"></div>
    </tass-col>
  </tass-row>
  <br />
  <br />

  <tass-checkbox disabled>Not disabled</tass-checkbox>
  <tass-checkbox v-model="check1" @change="handlerChange">Option A</tass-checkbox>
  <tass-checkbox v-model="check2">Option B</tass-checkbox>
  <br />
  <br />

  <h2>{{ checkList }}</h2>
  <tass-checkbox-group v-model="checkList">
    <tass-checkbox v-for="(item, index) in showList" :key="index" :label="item"></tass-checkbox>
  </tass-checkbox-group>
  <br />
  <br />

  <tass-transfer v-model="rightValue" :data="transferData" :props="transferProps"></tass-transfer>
  <br />
  <br />

  <tass-button type="success" @click="ClickMessage_1">Click Message</tass-button>
  <tass-button type="danger" @click="ClickMessage_2">Click Message</tass-button>
  <tass-button type="warning" @click="ClickMessage_3">Click Message</tass-button>
  <tass-button type="info" @click="ClickMessage_4">Click Message</tass-button>
  <br />
  <br />

  <tass-collapse :posts="list">
    <div style="height: 200px"></div>
  </tass-collapse>
  <br />
  <br />

  <tass-dropdown
    class="my-dropdown-toggle"
    :options="arrayOfObjects"
    :selected="selectedObject"
    :close-on-outside-click="false"
    v-on:updateoption="methodToRunOnSelect"
    >{{ selectedObject }}
  </tass-dropdown>
  <br />
  <br />

  <tass-button type="primary" :visible="!normalViaible" @click="changeView">dialog</tass-button>
  <tass-dialog
    :visible="normalViaible"
    title="这是"
    width="500px"
    @cancel="handleClickCancelButton"
    @confirm="handleConfirmButton"
  >
  </tass-dialog>
  <br />
  <br />

  <tass-alert show-icon title="hello tassUI" closeable type="error" content="bbbccc"> </tass-alert>
  <tass-alert show-icon title="hello tassUI" closeable type="success" center> </tass-alert>
  <tass-alert show-icon title="hello tassUI" closeable type="info"> </tass-alert>
  <tass-alert show-icon title="hello tassUI" closeable type="warning"> </tass-alert>

  <br />
  <br />

  <br />
  <br />
  <br />
  <br />

  <tass-carousel v-model="carouseltest">
    <tass-carousel-item id="1">
      <div
        style="
          color: white;
          text-align: center;
          width: 100%;
          height: 300px;
          line-height: 300px;
          background-color: #d3dce6;
        "
      >
        1
      </div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div
        style="
          color: white;
          text-align: center;
          width: 100%;
          height: 300px;
          line-height: 300px;
          background-color: skyblue;
        "
      >
        2
      </div>
    </tass-carousel-item>
  </tass-carousel>
  <br />
  <br />
  <tass-carousel v-model="carouseltest2" width="600px" anim="updown">
    <tass-carousel-item id="1">
      <div
        style="
          color: white;
          text-align: center;
          width: 100%;
          height: 300px;
          line-height: 300px;
          background-color: #d3dce6;
        "
      >
        1
      </div>
    </tass-carousel-item>
    <tass-carousel-item id="2">
      <div
        style="
          color: white;
          text-align: center;
          width: 100%;
          height: 300px;
          line-height: 300px;
          background-color: skyblue;
        "
      >
        2
      </div>
    </tass-carousel-item>
  </tass-carousel>
  <br />
  <br />
  <!-- switch默认开关 -->
  <div style="width: 20px">
    <tass-switch v-model="switchtest"></tass-switch>
  </div>
  <br />
  <!-- 禁用状态 -->
  <div style="width: 20px">
    <tass-switch v-model="switchtest" :disabled="disabled"></tass-switch>
  </div>
  <br />
  <!-- 等待状态 -->
  <div style="width: 20px">
    <tass-switch v-model="switchtest1" :loading="loading" :disabled="true"></tass-switch>
    <tass-switch v-model="loading" style="margin-left: 10px"></tass-switch>
  </div>
  <br />
  <br />

  <div style="width: 500px; border: 1px solid #ddd; padding: 20px">
    <tass-upload @changeUpload="changeUpload" @deleteUpload="deleteUpload"></tass-upload>
  </div>
  <br />
  <br />

  <tass-input v-model="inputVal" clearable />&nbsp;{{ inputVal }}

  <br />
  <br />
  <tass-slider :min="0" :max="100"></tass-slider>
  <tass-slider disabled></tass-slider>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { TassMessage } from '../packages/components/message';
  import { TassSlider } from '../packages/components/slider';
  let carouseltest = ref('1');
  let carouseltest2 = ref('1');

  let switchtest = ref(false);
  let switchtest1 = ref(false);
  let loading = ref(true);
  let disabled = ref(true);

  let check1 = ref(false);
  let check2 = ref(true);

  let checkList = ref(['Shanghai', 'Hangzhou']);
  let showList = ref(['Shanghai', 'Hangzhou', 'Beijing', 'Guangzhou']);

  let arrayOfObjects = ref(['厦门', '福州', '杭州', '上海']);
  let selectedObject = ref(['1', '2', '3', '4']);
  let normalViaible = ref(false);

  const list = ref([
    {
      title: '标题1',
      body: 'Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that',
      id: 1
    },
    {
      title: '标题2',
      body: 'Operation feedback: enable the users to clearly perceive their operations by style updates and interactive ',
      id: 2
    },
    {
      title: '标题3',
      body: 'Simplify the process: keep operating process simple and intuitive;Definite and clear: enunciate your intentions clearly so that the users can quickly',
      id: 3
    },
    {
      title: '标题4',
      body: 'Decision making: giving advices about operations is acceptable, but do not make decisions for the users;Controlled consequences: users should be granted the',
      id: 4
    }
  ]);

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
    TassMessage({
      message: 'Success',
      type: 'success',
      center: false,
      showIcon: true,
      closeable: true
    });
  };

  const ClickMessage_2 = () => {
    TassMessage({
      message: 'Error',
      type: 'error',
      center: false,
      showIcon: true
    });
  };

  const ClickMessage_3 = () => {
    TassMessage({
      message: 'Warning',
      type: 'warning',
      center: true,
      showIcon: true
    });
  };

  const ClickMessage_4 = () => {
    TassMessage({
      message: 'Info',
      type: 'info',
      center: false,
      showIcon: true
    });
  };

  const methodToRunOnSelect = playload => {
    selectedObject.value = playload;
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

  // 上传更新文件，第一个参数为当前上传文件，第二个参数为上传之后的文件列表
  const changeUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };
  // 删除更新文件，第一个参数为当前删除文件，第二个参数为上传之后的文件列表
  const deleteUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };

  let inputVal = ref('');
</script>

<style lang="scss">
  .my-dropdown-toggle {
    border-radius: 5px;
    ::v-deep .dropdown-toggle {
      color: tomato;
      font-size: 25px;
      font-weight: 800;
    }
    ::v-deep .dropdown-toggle-placeholder {
      color: #c4c4c4;
    }
  }
  .el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
