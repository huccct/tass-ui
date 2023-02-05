<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-25 10:23:31
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-05 15:13:28
-->
<template>
  <div class="tas-transfer__item">
    <tass-checkbox v-model="state.allCheck" @change="handlerChange">全选 / 半选</tass-checkbox>
    <div class="tas-transfer__body">
      <tass-checkbox-group v-model="state.checked">
        <tass-checkbox
          v-for="item in data"
          :key="item[keyProps]"
          :label="item[keyProps]"
          :disabled="item[disabledProps]"
        ></tass-checkbox>
      </tass-checkbox-group>
    </div>
  </div>
</template>
<script setup lang="ts" name="TassTransferItem">
  import TassCheckbox from '../../checkbox/src/checkbox.vue';
  import TassCheckboxGroup from '../../checkbox-group/src/checkbox-group.vue';
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
