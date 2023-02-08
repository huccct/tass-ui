<template>
  <div class="tas-input" :class="styleClass">
    <input
      class="tas-input__inner"
      placeholder="请输入内容"
      :value="inputProps.modelValue"
      @input="changeInputVal"
      :disabled="inputProps.disabled"
    />
    <div
      @click="clearValue"
      v-if="inputProps.clearable && isClearAbled"
      v-show="isEnter"
      class="tas-input__suffix"
    >
      <tass-icon name="cross"></tass-icon>
    </div>
  </div>
</template>
<script setup lang="ts" name="TassInput">
  import '../style/';
  import { computed, ref } from 'vue';

  type InputProps = {
    modelValue?: string | number;
    disabled?: boolean;
    clearable?: boolean;
  };
  const isClearAbled = ref(false);
  type InputEmits = {
    (e: 'update:modelValue', value: string): void;
  };
  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: ''
  });
  const isEnter = ref(true);
  const clearValue = () => {
    inputEmits('update:modelValue', '');
    isClearAbled.value = false;
  };
  const inputEmits = defineEmits<InputEmits>();
  const changeInputVal = (event: Event) => {
    //可清除clearable
    (event.target as HTMLInputElement).value.length
      ? (isClearAbled.value = true)
      : (isClearAbled.value = false);

    inputEmits('update:modelValue', (event.target as HTMLInputElement).value);
  };

  const styleClass = computed(() => {
    return {
      'is-disabled': inputProps.disabled
    };
  });
</script>
