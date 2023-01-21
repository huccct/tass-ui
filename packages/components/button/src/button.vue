<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:43:56
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-21 13:31:53
-->
<template>
  <button
    class="ec-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup name="EchoButton">
  import { computed } from 'vue';
  import { Props, Emits } from './button';
  const props = defineProps(Props);
  const emits = defineEmits(Emits);
  const classList = computed(() => {
    const { type, size, round, plain, circle, disabled, loading } = props;
    return [
      {
        [`ec-button--${type}`]: type,
        [`ec-button--${size}`]: size,
        ['is-disabled']: disabled,
        ['is-loading']: loading,
        ['is-round']: round,
        ['is-plain']: plain,
        ['is-circle']: circle,
      },
    ];
  });
  function handlerClick(evt: MouseEvent): void {
    emits('click', evt);
  }
</script>
