<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:16:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-04 10:59:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-02 19:16:12
-->
<template>
  <echo-button>Default</echo-button>
  <echo-button type="primary">Primary</echo-button>
  <echo-button type="success">Success</echo-button>
  <echo-button type="info">Info</echo-button>
  <echo-button type="warning">Warning</echo-button>
  <echo-button type="danger">Danger</echo-button>

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

  <echo-button type="success" icon="ec-icon-magnifier">Search</echo-button>
  <br />
  <br />

  <echo-icon name="pluscircle"></echo-icon>&nbsp;
  <echo-icon name="pushpin"></echo-icon>&nbsp;
  <echo-icon name="textalignjustify"></echo-icon>&nbsp;
  <echo-icon name="danger"></echo-icon>&nbsp;
  <echo-icon name="success"></echo-icon>&nbsp;
  <echo-icon name="info"></echo-icon>&nbsp;
  <echo-icon name="warning"></echo-icon>
  <br />
  <br />

  <echo-row>
    <echo-col :span="24">
      <div
        style="background-color: #d3dce6; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-row>
    <echo-col :span="12">
      <div
        style="background-color: #e5e9f2; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
    <echo-col :span="12">
      <div
        style="background-color: #e5e9f2; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-row tag="div">
    <echo-col tag="span" :span="12">
      <div
        style="background-color: #d3dce6; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div
        style="background-color: #e5e9f2; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div
        style="background-color: #e5e9f2; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-row tag="div" :gutter="20" justify="end">
    <echo-col tag="span" :span="6">
      <div
        style="background-color: #d3dce6; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div
        style="background-color: #e5e9f2; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
    <echo-col tag="span" :span="6">
      <div
        style="background-color: #e5e9f2; height: 35px; border-radius: 8px"
      ></div>
    </echo-col>
  </echo-row>
  <br />
  <br />

  <echo-checkbox disabled>Not disabled</echo-checkbox>
  <echo-checkbox v-model="check1" @change="handlerChange"
    >Option A</echo-checkbox
  >
  <echo-checkbox v-model="check2">Option B</echo-checkbox>
  <br />
  <br />

  <h2>{{ checkList }}</h2>
  <echo-checkbox-group v-model="checkList">
    <echo-checkbox
      v-for="(item, index) in showList"
      :key="index"
      :label="item"
    ></echo-checkbox>
  </echo-checkbox-group>
  <br />
  <br />

  <echo-transfer
    v-model="rightValue"
    :data="transferData"
    :props="transferProps"
  ></echo-transfer>
  <br />
  <br />

  <echo-button type="success" @click="ClickMessage_1"
    >Click Message</echo-button
  >
  <echo-button type="danger" @click="ClickMessage_2">Click Message</echo-button>
  <echo-button type="warning" @click="ClickMessage_3"
    >Click Message</echo-button
  >
  <echo-button type="info" @click="ClickMessage_4">Click Message</echo-button>
  <br />
  <br />

  <echo-collapse :posts="list">
    <div style="height: 200px" :content="collContent"></div>
  </echo-collapse>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

  <echo-dropdown
    class="my-dropdown-toggle"
    :options="arrayOfObjects"
    :selected="selectedObject"
    :close-on-outside-click="false"
    v-on:updateoption="methodToRunOnSelect"
    >{{ selectedObject }}
  </echo-dropdown>

  <echo-button type="primary" :visible="!normalViaible" @click="changeView"
    >dialog</echo-button
  >
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

  <echo-alert
    show-icon
    title="hello echoUI"
    closeable
    type="error"
    content="bbbccc"
  >
  </echo-alert>
  <echo-alert show-icon title="hello echoUI" closeable type="success">
  </echo-alert>
  <echo-alert show-icon title="hello echoUI" closeable type="info">
  </echo-alert>
  <echo-alert show-icon title="hello echoUI" closeable type="warning">
  </echo-alert>

  <echo-button type="primary"></echo-button>

  <br />
  <br />

  <br />
  <br />
  <br />
  <br />
  <echo-carousel v-model="carouseltest">
    <echo-carousel-item id="1">
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
    </echo-carousel-item>
    <echo-carousel-item id="2">
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
    </echo-carousel-item>
  </echo-carousel>
  <br />
  <br />
  <echo-carousel v-model="carouseltest2" width="600px" anim="updown">
    <echo-carousel-item id="1">
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
    </echo-carousel-item>
    <echo-carousel-item id="2">
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
    </echo-carousel-item>
  </echo-carousel>

  <br />
  <br />

  <div style="width: 500px; border: 1px solid #ddd; padding: 20px">
    <echo-upload
      @changeUpload="changeUpload"
      @deleteUpload="deleteUpload"
    ></echo-upload>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive } from 'vue';
  import { EchoMessage } from '../packages/components/message';

  let carouseltest = ref('1');
  let carouseltest2 = ref('1');

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
      body: 'Simplify the process: keep operating process simple and intuitive;Definite and clear: enunciate your intentions clearly so that the users can quickly underst',
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
  const changeUpload = (file, fileList) => {
    console.log(file, fileList);
  };
  // 删除更新文件，第一个参数为当前删除文件，第二个参数为上传之后的文件列表
  const deleteUpload = (file, fileList) => {
    console.log(file, fileList);
  };
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
</style>
<style lang="scss" scoped>
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
