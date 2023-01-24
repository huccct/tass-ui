<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 20:29:09
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-24 13:48:40
-->
<template>
  <div class="ec-checkbox">
    <span class="ec-checkbox__input">
      <input
        v-model="model"
        type="checkbox"
        :indeterminate="indeterminate"
        :disabled="disabled"
        :name="name"
        :value="label"
        :isChecked="isChecked"
        @change="handlerChange"
      />
    </span>
    <span class="ec-checkbox__label">
      {{ label }}
      <slot />
    </span>
  </div>
</template>
<script setup lang="ts" name="EchoCheckbox">
  import { useCheckBoxProps } from '../composables/';
  import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@echo-ui/constants';
  const props = defineProps({
    indeterminate: Boolean,
    isChecked: Boolean,
    name: {
      type: String,
      default: undefined
    },
    disabled: Boolean,
    label: {
      type: [String, Number, Boolean, Object],
      default: undefined
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: undefined
    }
  });
  defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT]);
  const { model, isChecked, handlerChange } = useCheckBoxProps(props);
</script>
<style></style>
