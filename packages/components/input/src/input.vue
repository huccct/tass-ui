<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-10 11:26:22
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-10 13:40:34
-->
<template>
  <div
    class="tas-input"
    @mouseenter="isEnter = true"
    @mouseleave="isEnter = false"
    :class="styleClass"
  >
    <input
      ref="ipt"
      class="tas-input__inner"
      :class="{ ['tas-input--prefix']: isShowPrefixIcon }"
      placeholder="请输入内容"
      :value="inputProps.modelValue"
      @input="changeInputVal"
      :disabled="inputProps.disabled"
      v-bind="attrs"
    />
    <div
      @click="clearValue"
      v-if="inputProps.clearable && isClearAbled"
      v-show="isEnter"
      class="tas-input__suffix"
    >
      <tass-icon name="cross"></tass-icon>
    </div>
    <div class="tas-input__suffix" v-show="isShowEye">
      <tass-Icon @click="changeType" :name="eyeIcon" />
    </div>
    <div class="tas-input__prefix" v-if="isShowPrefixIcon">
      <tass-icon :name="inputProps.prefixIcon" />
    </div>
    <div class="tas-input__suffix no-cursor" v-if="isShowSuffixIcon">
      <tass-icon :name="inputProps.suffixIcon" />
    </div>
  </div>
</template>
<script setup lang="ts" name="TassInput">
  import '../style/';
  import { computed, ref, useAttrs } from 'vue';
  const attrs = useAttrs();
  type InputProps = {
    modelValue?: string | number;
    disabled?: boolean;
    clearable?: boolean;
    size?: string;
    showPassword?: boolean;
    prefixIcon?: string;
    suffixIcon?: string;
  };
  const isClearAbled = ref(false);
  type InputEmits = {
    (e: 'update:modelValue', value: string): void;
  };
  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: ''
  });
  const isEnter = ref(true);
  const ipt = ref();
  Promise.resolve().then(() => {
    if (inputProps.showPassword) {
      ipt.value.type = 'password';
    }
  });
  const eyeIcon = ref('EyeClosed');
  const isShowEye = computed(() => {
    return inputProps.showPassword && inputProps.modelValue && !inputProps.clearable;
  });
  const changeType = () => {
    if (ipt.value.type === 'password') {
      eyeIcon.value = 'eye';
      ipt.value.type = attrs.type || 'text';
      return;
    }
    ipt.value.type = 'password';
    eyeIcon.value = 'EyeClosed';
  };
  const isShowSuffixIcon = computed(() => {
    return inputProps.suffixIcon && !inputProps.clearable && !inputProps.showPassword;
  });
  const isShowPrefixIcon = computed(() => {
    return inputProps.prefixIcon;
  });
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
      'is-disabled': inputProps.disabled,
      [`tas-input--${inputProps.size}`]: inputProps.size
    };
  });
</script>
