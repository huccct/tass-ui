<!--
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-02-12 10:57:19
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-23 12:03:43
-->
<template>
  <div class="tas-datepicker" v-click-outside>
    <tass-input :prefix-icon="prefixIcon" placeholder="Pick a day" v-model="nowTime" />
    <transition name="tas-datepicker-transition">
      <div class="tas-picker" v-if="isVisible">
        <div class="tas-picker__header">
          <button @click="handlerChange(-1, 'year')">
            <i class="tas-icon"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
                ></path></svg
            ></i>
          </button>
          <button @click="handlerChange(-1, 'month')">
            <i class="tas-icon"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
                ></path></svg
            ></i>
          </button>
          <span>{{ tYear }} 年 </span>
          <span>{{ tMonth }} 月 </span>
          <button @click="handlerChange(1, 'month')">
            <i class="tas-icon"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                ></path></svg
            ></i>
          </button>
          <button @click="handlerChange(1, 'year')">
            <i class="tas-icon"
              ><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="currentColor"
                  d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
                ></path></svg
            ></i>
          </button>
        </div>
        <div class="tas-picker__weeks">
          <span v-for="(w, index) in weeks" :key="w">{{ w }}</span>
        </div>
        <div v-for="(m, index) in 6" :key="m" class="tas-picker__content">
          <span
            v-for="(n, index) in 7"
            :key="n"
            :class="{
              isNotCurrentMonth: !isNotCurrentMonth(getVisibleDays[(m - 1) * 7 + (n - 1)]),
              isToday:
                isNotCurrentMonth(getVisibleDays[(m - 1) * 7 + (n - 1)]) &&
                today === getVisibleDays[(m - 1) * 7 + (n - 1)].getDate()
            }"
            class="tas-picker__items"
            @click="handlerToday(getVisibleDays[(m - 1) * 7 + (n - 1)].getDate())"
          >
            {{ getVisibleDays[(m - 1) * 7 + (n - 1)].getDate() }}
          </span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, ObjectDirective, reactive, computed } from 'vue';
  import * as utils from '../utils';
  import '../style/';

  const props = defineProps({
    modelValue: {
      type: Date,
      required: true
    },
    prefixIcon: {
      type: String,
      default: 'calendarfull'
    }
  });
  const time = computed({
    get() {
      formatDate(props.modelValue);
      return props.modelValue;
    },
    set(val) {
      formatDate(val);
      emits('update:modelValue', val);
    }
  });

  const isVisible = ref(false);
  const weeks = reactive(['日', '一', '二', '三', '四', '五', '六']);
  const onFocus = () => {
    isVisible.value = true;
  };
  const onBlur = () => {
    isVisible.value = false;
  };
  let tYear = ref<number>(0);
  let tMonth = ref<number>(0);
  let nowTime = ref();
  const today = ref(0);
  const formatDate = (t: Date) => {
    let { year, month, day } = utils.formatTime(t);
    let m = padZero(month + 1);
    let d = padZero(day);
    tYear.value = year;
    today.value = +d;
    if (typeof m === 'string') {
      tMonth.value = parseFloat(m);
    } else {
      tMonth.value = m;
    }
    nowTime.value = `${year}-${m}-${d}`;
  };
  const padZero = (s: any) => {
    return String(s).padStart(2, '0');
  };
  const isNotCurrentMonth = (date: Date) => {
    let { year, month } = utils.formatTime(date);
    let { year: y, month: m } = utils.formatTime(time.value);
    return year === y && month === m;
  };
  const vClickOutside: ObjectDirective = {
    beforeMount(el, binding) {
      el.handler = (e: MouseEvent) => {
        if (el.contains(e.target as HTMLElement)) {
          onFocus();
        } else {
          onBlur();
        }
      };
      window.addEventListener('click', el.handler);
    },
    unmounted(el) {
      window.removeEventListener('click', el.handler);
    }
  };
  const getVisibleDays = computed(() => {
    let { year, month } = utils.formatTime(time.value);
    let firstDay = new Date(year, month, 1) as any;
    let weeks = firstDay.getDay();
    if (weeks === 0) {
      weeks = 7;
    }
    let firstDate = firstDay - weeks * 24 * 60 * 60 * 1000;
    let arr = [];
    for (let i = 0; i < 42; i++) {
      arr.push(new Date(firstDate + i * 24 * 60 * 60 * 1000));
    }
    return arr;
  });
  const handlerChange = (num: number, type: string) => {
    if (type === 'year' && num === -1) {
      tYear.value--;
    } else if (type === 'year' && num === 1) {
      tYear.value++;
    } else if (type === 'month' && num === -1) {
      if (tMonth.value <= 1) {
        tYear.value--;
        tMonth.value = 12;
      } else {
        tMonth.value--;
      }
    } else if (type === 'month' && num === 1) {
      if (tMonth.value >= 12) {
        tYear.value++;
        tMonth.value = 1;
      } else {
        tMonth.value++;
      }
    }
    time.value = new Date(tYear.value, tMonth.value - 1);
  };
  const handlerToday = (day: number) => {
    time.value = new Date(tYear.value, tMonth.value - 1, day);
  };
  const emits = defineEmits(['update:modelValue']);
</script>
