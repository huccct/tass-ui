<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 10:23:31
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-25 20:08:27
-->
<template>
  <div class="ec-transfer__item">
    <echo-checkbox v-model="state.allCheck" @change="handlerChange">全选 / 半选</echo-checkbox>
    <div class="ec-transfer__body">
      <echo-checkbox-group v-model="state.checked">
        <echo-checkbox
          v-for="item in data"
          :key="item[keyProps]"
          :label="item[keyProps]"
          :disabled="item[disabledProps]"
        ></echo-checkbox>
      </echo-checkbox-group>
    </div>
  </div>
</template>
<script setup lang="ts" name="EchoTransferItem">
  import EchoCheckbox from '../../checkbox/src/checkbox.vue';
  import EchoCheckboxGroup from '../../checkbox-group/src/checkbox-group.vue';
  import { PropType, reactive } from 'vue';
  import { useCheck } from './composables';
  import { ItransferProps } from './transfer.type';

  const props = defineProps({
    data: {
      type: Array as unknown as PropType<ItransferProps>,
      default: () => []
    },
    props: {
      type: Object
    }
  });
  defineEmits(['checkChange']);
  const state = reactive({
    checked: [],
    allCheck: false
  });
  let { keyProps, disabledProps, handlerChange } = useCheck(props, state);
</script>
