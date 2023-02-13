<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-05 14:53:41
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 11:41:39
-->
<template>
  <div class="tas-upload">
    <div>
      <div class="drop-upload" v-if="props.drop" ref="drag" :style="isDrag?style:''">
        <div>
          <div class="drop-upload__out">
            <tass-icon name="upload"></tass-icon>
          </div>
          <div class="drop-upload__out">
            <span class="drop-upload__out__word">推拽到此上传,或</span> <span class="drop-upload__out__uploadWord" @click="beginUpload">点击上传</span>
          </div>
        </div>
      </div>
      <tass-button v-else type="primary" @click="beginUpload">点击上传</tass-button>
      <div class="file" v-for="(v, i) in fileList" :key="i">
        <span>
          {{ v.name }}
        </span>
        <tass-button type="danger" size="tiny" @click="deleteUpload(i)">删除</tass-button>
      </div>
    </div>
    <input type="file" ref="inputRef" @change="submitUpload" />
  </div>
</template>

<script setup lang="ts" name="TassUpload">
  import '../style/index.ts';
  import { reactive, ref, onMounted } from 'vue';
  const props = defineProps({
    props: {
      type: Object
    },
    drop:{
      type: Boolean,
      default: () => false
    }
  });
  const emits = defineEmits(['changeUpload', 'deleteUpload','dropUpload']);
  const inputRef = ref<HTMLElement | null>(null);
  const fileList = reactive<any>([]);
  const style={
    background:'#F2F9FF',
    border:" 1px dashed #409eff"
  }
  const isDrag = ref(false)
  const drag = ref<HTMLElement | null>(null);
  // 开始上传
  function beginUpload() {
    inputRef.value?.click(); //模拟上传点击
  }
  // 上传成功
  function submitUpload(e?: any) {
    const files = e.target.files;
    const rawFile = files[0]; //上传的文件
    fileList.push({
      name: rawFile.name,
      file: rawFile
    });
    // 事件发射:第一个为当前文件,第二个为当前文件列表
    emits('changeUpload', rawFile, fileList);
  }
  //删除文件
  function deleteUpload(i?: any) {
    let file = fileList[i];
    fileList.splice(i, 1);
    // 事件发射:第一个为当前文件,第二个为当前文件列表
    emits('deleteUpload', file, fileList);
  }
  onMounted(() => {
    drag.value?.addEventListener('drop', handleDrop)
    drag.value?.addEventListener('dragleave', (e) => {
      isDrag.value=false
    })
    drag.value?.addEventListener('dragenter', (e) => {
      e.preventDefault()
      isDrag.value=true
    })
    drag.value?.addEventListener('dragover', (e) => {
      e.preventDefault()
      isDrag.value=true
    })
  })

  const handleDrop = (e?: any) => {
    e.preventDefault()
    isDrag.value=false
    for(let i=0;i<e.dataTransfer.files.length;i++){
      fileList.push({
      name: e.dataTransfer.files[i].name,
      file: e.dataTransfer.files[i]
    });
    }
    emits('dropUpload', e.dataTransfer.files, fileList);
      // 拖拽文件，第一个参数为当前上传文件的列表（因为拖拽可能上传多个），第二个参数为上传之后的文件列表
  }
</script>