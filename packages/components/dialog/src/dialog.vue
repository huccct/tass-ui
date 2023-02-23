<template>
  <transition name="tas-dialog-fade">
    <div v-show="visible" class="tas-dialog">
      <div class="tas-dialog__body" v-show="visible">
        <div class="tas-dialog__box" :style="`width:${width}`">
          <div>
            <slot name="headerContent" />
            <div class="tas-dialog__header">
              <h3 class="tas-dialog__title">
                {{ title }}
              </h3>
              <span class="tas-dialog__close" @click="onClickCancelButton">
                <tass-icon name="cross"></tass-icon
              ></span>
            </div>
          </div>

          <div class="tas-dialog__box">
            <slot />
          </div>

          <div>
            <slot name="footerContent" />
            <div class="tas-dialog__footer">
              <tass-button mode="text" @click="onClickCancelButton"> 取消 </tass-button>
              <tass-button @click="onClickConfirmButton"> 确定 </tass-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup name="tassDialog">
import '../style/';
import type { ComponentInternalInstance } from 'vue';
import { getCurrentInstance } from 'vue';
defineProps({
  title: {
    required: false,
    default: 'dialog',
    type: String
  },
  visible: {
    required: false,
    default: false,
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

<style></style>