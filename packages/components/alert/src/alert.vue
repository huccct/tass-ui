<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-01 23:03:26
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-05 20:26:15
-->
<template>
  <!-- 提示框组件 -->
  <Transition name="tas-alert-fade">
    <div :class="alertClassNames" class="tas-alert" v-if="isShow">
    <tass-icon :name="iconName" class="tas-alert__icon" v-if="showIcon" />
    <div class="tas-alert__content">
      <h3 class="tas-alert__title tas-global-ellipsis">
        {{ title }}
      </h3>
      <p class="tas-alert__desc" v-if="content">
        {{ content }}
      </p>
      <tass-icon name="cross" class="tas-alert__close-btn" v-if="closeable" @click="handltaslose" />
    </div>
  </div>
  </Transition>
</template>
<script lang="ts" name="TassAlert" setup>
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
    return [{ [`tas-alert--${type}`]: type }, { 'is-center': center }];
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
  const handltaslose = () => {
    isShow.value = false;
  };
</script>
