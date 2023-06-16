<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:43:56
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-16 20:48:51
-->
<template>
  <button
    class="tas-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <i v-if="props.loading" class="tas-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot />
  </button>
</template>

<script lang="ts" setup name="TassButton">
  import '../style/';
  import { computed } from 'vue';
  import { Props, Emits } from './button';
  const props = defineProps(Props);
  const emits = defineEmits(Emits);
  const classList = computed(() => {
    const { type, size, round, plain, circle, disabled, loading } = props;
    return [
      {
        [`tas-button--${type}`]: type,
        [`tas-button--${size}`]: size,
        ['is-disabled']: disabled,
        ['is-loading']: loading,
        ['is-round']: round,
        ['is-plain']: plain,
        ['is-circle']: circle
      }
    ];
  });
  function handlerClick(evt: MouseEvent): void {
    emits('click', evt);
  }
</script>
