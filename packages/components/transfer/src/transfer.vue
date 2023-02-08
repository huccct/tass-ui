<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-24 21:56:36
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 11:40:48
-->
<template>
  <div class="tas-transfer">
    <tass-transfer-item
      :data="sourceData"
      :props="props"
      @checkChange="sourceCheckChange"
    ></tass-transfer-item>
    <div class="tas-transfer__buttons">
      <tass-button
        type="primary"
        icon="tas-icon-chevronleft"
        size="small"
        @click="leftClick"
        :disabled="rightState.length === 0"
      >
        To Left
      </tass-button>
      <tass-button
        type="primary"
        icon="tas-icon-chevronright"
        size="small"
        @click="rightClick"
        :disabled="leftState.length === 0"
      >
        To Right
      </tass-button>
    </div>
    <tass-transfer-item
      :data="targetData"
      :props="props"
      @checkChange="targetCheckChange"
    ></tass-transfer-item>
  </div>
</template>
<script setup lang="ts" name="tassTransfer">
  import '../style/';
  import { PropType, reactive, toRefs } from 'vue';
  import TassTransferItem from './transferItem.vue';
  import TassButton from '../../button/src/button.vue';
  import { ItransferProps } from './transfer.type';
  import { useComponentData } from './composables';
  const emit = defineEmits(['update:modelValue']);
  const props = defineProps({
    data: {
      type: Array as unknown as PropType<ItransferProps>,
      default: () => []
    },
    props: {
      type: Object
    },
    modelValue: {
      type: Array
    }
  });

  let checkState = reactive({
    leftState: [],
    rightState: []
  });
  const { leftState, rightState } = toRefs(checkState);
  const sourceCheckChange = leftVal => {
    checkState.leftState = leftVal;
  };
  const targetCheckChange = rightVal => {
    checkState.rightState = rightVal;
  };

  const leftClick = () => {
    let curVal = props.modelValue?.slice(0);
    checkState.rightState.forEach(item => {
      let index = curVal?.indexOf(item) as number;
      if (index > -1) {
        curVal?.splice(index, 1);
      }
    });
    emit('update:modelValue', curVal);
  };
  const rightClick = () => {
    let curVal = props.modelValue?.slice(0);

    curVal = curVal?.concat(checkState.leftState);
    emit('update:modelValue', curVal);
  };
  let { sourceData, targetData } = useComponentData(props);
</script>
