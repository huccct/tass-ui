<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 20:29:09
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 11:55:18
-->
<template>
  <div class="tas-checkbox">
    <span class="tas-checkbox__input">
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
    <span v-if="$slots.default || label" class="tas-checkbox__label">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>
<script setup lang="ts" name="TassCheckbox">
  import '../style/';
  import { useCheckBoxProps } from '../composables/';
  import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@tass-ui/constants';
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
