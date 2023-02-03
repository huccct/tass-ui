<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-01 23:03:26
 * @LastEditors: YuShu Xiao
 * @LastEditTime: 2023-02-03 12:45:34
-->
<template>
  <!-- 提示框组件 -->
  <div :class="alertClassNames" class="ec-alert" v-if="isShow">
    <echo-icon
      :name="iconName"
      class="ec-alert__icon"
      v-if="showIcon"
    ></echo-icon>
    <div class="ec-alert__content">
      <h3 class="ec-alert__title ec-global-ellipsis">
        {{ title }}
      </h3>
      <p class="ec-alert__desc" v-if="content"></p>
      <echo-icon
        name="textalignjustify"
        class="ec-alert__close-btn"
        v-if="closeable"
        @click="handleClose"
      />
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
      validator: (val: AlertType) =>
        ['info', 'success', 'error', 'warning'].includes(val)
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
    }
  });
  const alertClassNames = computed(() => {
    const { type } = props;
    return [{ [`ec-alert--${type}`]: type }];
  });
  const iconMaps = {
    info: 'ico_med_doctor',
    success: 'ico_doc_chart_curve',
    error: 'ico_med_band-bid',
    warning: 'pluscircle'
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
