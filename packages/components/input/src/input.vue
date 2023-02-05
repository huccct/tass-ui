<template>
  <div class="tas-input">
    <input
      class="tas-input__inner"
      placeholder="请输入内容"
      :value="inputProps.modelValue"
      @input="changeInputVal"
    />
  </div>
</template>
<script setup lang="ts" name="TassInput">
  type InputProps = {
    modelValue?: string | number;
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
</script>
<style></style>
