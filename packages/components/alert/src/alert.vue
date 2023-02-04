<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-01 23:03:26
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-04 21:44:10
-->
<template>
  <!-- 提示框组件 -->
  <div :class="alertClassNames" class="ec-alert" v-if="isShow">
    <echo-icon :name="iconName" class="ec-alert__icon" v-if="showIcon" />
    <div class="ec-alert__content">
      <h3 class="ec-alert__title ec-global-ellipsis">
        {{ title }}
      </h3>
      <p class="ec-alert__desc" v-if="content">
        {{ content }}
      </p>
      <echo-icon name="cross" class="ec-alert__close-btn" v-if="closeable" @click="handleClose" />
    </div>
  </div>
</template>
<script lang="ts" name="EchoAlert" setup>
  import { AlertType } from './interface';
  import { computed, ref } from 'vue';

  const isShow = ref(true);
  const props = defineProps({
    type: {
      type: String,
      default: () => 'info',
      validator: (val: AlertType) => ['info', 'success', 'error', 'warning'].includes(val)
    },
    title: {
      type: String,
      default: '请绑定title'
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    closeable: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: false
    }
  });
  const alertClassNames = computed(() => {
    const { type, center } = props;
    return [{ [`ec-alert--${type}`]: type }, { 'is-center': center }];
  });
  const iconMaps = {
    info: 'info',
    success: 'success',
    error: 'danger',
    warning: 'warning'
  };
  const iconName = computed(() => {
    const { type } = props;
    return iconMaps[type];
  });
  // 关闭alert
  const handleClose = () => {
    isShow.value = false;
  };
</script>
