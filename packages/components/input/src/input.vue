<template>
  <div class="tas-input" :class="styleClass">
    <input
      class="tas-input__inner"
      placeholder="请输入内容"
      :value="inputProps.modelValue"
      @input="changeInputVal"
      :disabled="inputProps.disabled"
    />
  </div>
</template>
<script setup lang="ts" name="TassInput">
  import { computed } from 'vue';

  type InputProps = {
    modelValue?: string | number;
    disabled?: boolean;
  };

  type InputEmits = {
    (e: 'update:modelValue', value: string): void;
  };
  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: ''
  });
  const inputEmits = defineEmits<InputEmits>();
  const changeInputVal = (event: Event) => {
    inputEmits('update:modelValue', (event.target as HTMLInputElement).value);
  };
  const styleClass = computed(() => {
    return {
      'is-disabled': inputProps.disabled
    };
  });
</script>
<style></style>
