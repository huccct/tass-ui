<!--
 * @Author: 申恒杰
 * @Date: 2023-02-05 10:19:14
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\switch\src\switch.vue
-->
<template>
  <span @click.stop="handleClick" class="tas-switch-container" :size="size">
    <input class="tas-switch-input" :name="name" :value="modelValue" />
    <div
      class="tas-unselect tas-form-switch"
      :style="styles"
      :class="{
        'tas-form-onswitch': isActive,
        'tas-switch-disabled': disabled,
      }"
    >
      <em v-if="onswitchText || unswitchText">{{
        isActive == true ? onswitchText : unswitchText
      }}</em>
      <span>
        <div>
          <template v-if="loading">
            <i
              class="tas-icon tas-anim tas-anim-rotate tas-anim-loop"
              :class="loadingIcon"
            ></i>
          </template>
          <template v-else>
            <slot v-if="isActive" name="onswitch-icon"></slot>
            <slot v-else name="unswitch-icon"></slot>
          </template>
        </div>
      </span>
    </div>
  </span>
</template>
<script lang="ts">
export default {
  name: "tasSwitch",
};
</script>

<script setup lang="ts">
import "../style/";
import { computed } from "vue";
import { SwitchSize } from "./interface";

export interface SwitchProps {
  name?: string;
  disabled?: boolean;
  modelValue?: string | number | boolean;
  onswitchText?: string;
  unswitchText?: string;
  onswitchColor?: string;
  unswitchColor?: string;
  onswitchValue?: string | number | boolean;
  unswitchValue?: string | number | boolean;
  size?: SwitchSize;
  loadingIcon?: string;
  loading?: boolean;
}

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  onswitchValue: true,
  unswitchValue: false,
  loadingIcon: "tas-icon-loading-one",
  size: 'md',
});

const emit = defineEmits(["update:modelValue", "change"]);

const isActive = computed({
  get() {
    return props.modelValue === props.onswitchValue;
  },
  set(val) {
    if (val) {
      emit("change", props.onswitchValue);
      emit("update:modelValue", props.onswitchValue);
    } else {
      emit("change", props.unswitchValue);
      emit("update:modelValue", props.unswitchValue);
    }
  },
});

const handleClick = () => {
  if (!props.disabled) {
    isActive.value = !isActive.value;
  }
};

const styles = computed(() => {
  return {
    "background-color": isActive.value
      ? props.onswitchColor
      : props.unswitchColor,
  };
});
</script>
