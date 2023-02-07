<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-05 14:53:41
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-05 15:29:12
-->
<template>
  <div class="tas-upload">
    <tass-button type="primary" @click="beginUpload">点击上传</tass-button>
    <div class="file" v-for="(v, i) in fileList" :key="i">
      <span>
        {{ v.name }}
      </span>
      <tass-button type="danger" size="tiny" @click="deleteUpload(i)">删除</tass-button>
    </div>
    <input type="file" ref="inputRef" @change="submitUpload" />
  </div>
</template>

<script setup lang="ts" name="TassUpload">
  import { reactive, ref } from 'vue';
  const props = defineProps({
    props: {
      type: Object
    }
  });
  const emits = defineEmits(['changeUpload', 'deleteUpload']);
  const inputRef = ref<HTMLElement | null>(null);
  const fileList = reactive<any>([]);

  // 开始上传
  function beginUpload() {
    inputRef.value?.click(); //模拟上传点击
  }
  // 上传成功
  function submitUpload(e) {
    const files = e.target.files;
    const rawFile = files[0]; //上传的文件
    fileList.push({
      name: rawFile.name,
      file: rawFile
    });
    // 事件发射  第一个为当前文件 第二个为当前文件列表
    emits('changeUpload', rawFile, fileList);
  }
  //删除文件
  function deleteUpload(i) {
    let file = fileList[i];
    fileList.splice(i, 1);
    // 事件发射  第一个为当前文件 第二个为当前文件列表
    emits('deleteUpload', file, fileList);
  }
</script>
