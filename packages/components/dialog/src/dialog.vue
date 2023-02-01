<template>
  <div v-show="visible" class="dx-dialog-warpper">
    <div class="dx-dialog-inner">
      <div class="dx-dialog-box border-radius" :style="`width:${width}`">
        <div>
          <slot name="headerContent" />
          <div v-if="showHeaderResult" class="dx-dialog-header">
            <h3 class="dx-dialog-title">
              {{ title }}
            </h3>
            <span v-if="showClose" class="dx-dialog-close" @click="onClickCancelButton">X</span>
          </div>
        </div>

        <div class="dx-dialog-body margin-tb-12">
          <slot />
        </div>

        <div>
          <slot name="footerContent" />
          <div v-if="showFooterResult" class="dx-dialog-footer">
            <button v-if="showCancelButton" mode="text" @click="onClickCancelButton">
              {{ cancelText }}
            </button>
            <button v-if="showConfirmButton" @click="onClickConfirmButton">
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import type { ComponentInternalInstance } from 'vue';
  import { getCurrentInstance, ref } from 'vue';

  export default {
    name: 'EchoDialog',
    props: {
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
    },
    setup(propsData) {
      const currentInstance: ComponentInternalInstance | null = getCurrentInstance();

      function onClickCancelButton(e: Event) {
        currentInstance?.emit('cancel', e);
      }

      function onClickConfirmButton(e: Event) {
        currentInstance?.emit('confirm', e);
      }

      // 自定义尾部
      const showFooterResult = ref(propsData.showFooter);
      const footerContent = currentInstance?.slots.footerContent;

      if (footerContent) {
        showFooterResult.value = false;
      }

      // 自定义头部
      const showHeaderResult = ref(propsData.showHeader);
      const headerContent = currentInstance?.slots.headerContent;

      if (headerContent) {
        showHeaderResult.value = false;
      }

      return {
        showHeaderResult,
        showFooterResult,
        onClickCancelButton,
        onClickConfirmButton
      };
    }
  };
</script>

<style lang="scss" scoped>
  .dx-dialog-warpper {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    user-select: none;

    .dx-dialog-inner {
      display: table-cell;
      width: 100vw;
      height: 100vh;
      text-align: center;
      vertical-align: middle;

      .dx-dialog-box {
        // width: 460px;
        display: inline-block;
        padding: 24px 24px 12px 24px;
        background: white;
        text-align: left;
      }
    }

    .dx-dialog-header {
      position: relative;
      display: flex;
      .dx-dialog-title {
        line-height: 30px;
        width: calc(100% - 30px);
      }
      .dx-dialog-close {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
      }
    }

    .dx-dialog-footer {
      text-align: right;
    }
  }
</style>
