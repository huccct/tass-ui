<template>
  <div v-show="visible" class="tas-dialog">
    <div class="tas-dialog__body">
      <div class="tas-dialog__box" :style="`width:${width}`">
        <div>
          <slot name="headerContent" />
          <div class="tas-dialog__header">
            <h3 class="tas-dialog__title">
              {{ title }}
            </h3>
            <span v-if="showClose" class="dialog__close" @click="onClickCancelButton">X</span>
          </div>
        </div>

        <div class="tas-dialog__box">
          <slot />
        </div>

        <div>
          <slot name="footerContent" />
          <div class="tas-dialog__footer">
            <tass-button v-if="showCancelButton" mode="text" @click="onClickCancelButton">
              {{ cancelText }}
            </tass-button>
            <tass-button v-if="showConfirmButton" @click="onClickConfirmButton">
              {{ confirmText }}
            </tass-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="tassDialog">
  import '../style/';
  import type { ComponentInternalInstance } from 'vue';
  import { getCurrentInstance } from 'vue';
  defineProps({
    title: {
      required: false,
      default: '',
      type: String
    },
    visible: {
      required: false,
      default: false,
      type: Boolean
    },
    cancelText: {
      required: false,
      default: '取消',
      type: String
    },
    confirmText: {
      required: false,
      default: '确认',
      type: String
    },
    showHeader: {
      required: false,
      default: true,
      type: Boolean
    },
    showFooter: {
      required: false,
      default: true,
      type: Boolean
    },
    showClose: {
      required: false,
      default: true,
      type: Boolean
    },
    showCancelButton: {
      required: false,
      default: true,
      type: Boolean
    },
    showConfirmButton: {
      required: false,
      default: true,
      type: Boolean
    },
    width: {
      required: false,
      default: 'auto',
      type: String
    }
  });
  const currentInstance: ComponentInternalInstance | null = getCurrentInstance();

  function onClickCancelButton(e: Event) {
    currentInstance?.emit('cancel', e);
  }

  function onClickConfirmButton(e: Event) {
    currentInstance?.emit('confirm', e);
  }
</script>

<style lang="scss" scoped></style>
