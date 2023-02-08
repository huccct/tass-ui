<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 20:33:27
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-08 11:55:28
-->
<template>
  <div class="tas-checkbox-group">
    <slot />
  </div>
</template>
<script setup lang="ts" name="TassCheckboxGroup">
  import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@tass-ui/constants';
  import { computed, provide } from 'vue';
  const props = defineProps({
    modelValue: {
      type: Array,
      default: undefined
    }
  });
  const emit = defineEmits([UPDATE_MODEL_EVENT, CHANGE_EVENT]);
  let modelValue = computed(() => props.modelValue);
  const handlerChange = val => {
    emit(UPDATE_MODEL_EVENT, val);
    emit(CHANGE_EVENT, val);
  };
  provide('TassCheckboxGroup', {
    modelValue,
    handlerChange,
    name: 'TassCheckboxGroup'
  });
</script>
<style></style>
