<template>
  <div v-show="visible" class="dialog">
    <div class="dialog__body">
      <div class="dialog__box" :style="`width:${width}`">
        <div>
          <slot name="headerContent" />
          <div class="dialog__header">
            <h3 class="dialog__title">
              {{ title }}
            </h3>
            <span v-if="showClose" class="dialog__close" @click="onClickCancelButton">X</span>
          </div>
        </div>

        <div class="dialog__box">
          <slot />
        </div>

        <div>
          <slot name="footerContent" />
          <div class="dialog__footer">
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
  import type { ComponentInternalInstance } from 'vue';
  import { getCurrentInstance, ref } from 'vue';
  defineProps({
    // dialog标题
    title: {
      required: false,
      default: '',
      type: String
    },
    // dialog 是否出现
    visible: {
      required: false,
      default: false,
      type: Boolean
    },
    // cancel 按钮的文字
    cancelText: {
      required: false,
      default: '取消',
      type: String
    },
    // confirm按钮的文字
    confirmText: {
      required: false,
      default: '确认',
      type: String
    },
    // 是否需要头部 头部包含关闭按钮 默认为true
    showHeader: {
      required: false,
      default: true,
      type: Boolean
    },
    // 是否需要footer 默认为true 如果为false confirm 和 concel按钮将会消失
    showFooter: {
      required: false,
      default: true,
      type: Boolean
    },
    // 是否需要close 默认true 如果为false右上角的关闭x将不显示
    showClose: {
      required: false,
      default: true,
      type: Boolean
    },
    // 是否需要cancel按钮 默认为true 如果为false,cancel按钮将不会显示
    showCancelButton: {
      required: false,
      default: true,
      type: Boolean
    },
    // 是否需要confirm按钮 默认为true 如果为false,confir按钮将不会显示
    showConfirmButton: {
      required: false,
      default: true,
      type: Boolean
    },
    // 自定义宽度 默认auto
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

<style lang="scss" scoped>
  .dialog {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    user-select: none;
    z-index: 9999;
    &__body {
      display: table-cell;
      width: 100vw;
      height: 100vh;
      text-align: center;
      vertical-align: middle;
    }
    &__box {
      // width: 460px;
      display: inline-block;
      padding: 24px 24px 12px 24px;
      background: white;
      text-align: left;
    }

    &__header {
      position: relative;
      display: flex;
    }
    &__title {
      line-height: 30px;
      width: calc(100% - 30px);
    }
    &__close {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }

    &__footer {
      text-align: right;
    }
  }
</style>
