/*
 * @Author: 申恒杰
 * @Date: 2023-02-02 19:23:39
 * @Description: 铁沸物
 * @FilePath: \echo-ui\packages\components\carousel\src\index.ts
 */
declare const isNumber: (val: any) => val is number;
import type { ExtractPropTypes } from 'vue';

export const carouselProps = {
  initialIndex: {
    type: Number,
    default: 0
  },
  height: {
    type: String,
    default: ''
  },
  trigger: {
    type: String,
    values: ['hover', 'click'],
    default: 'hover'
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  interval: {
    type: Number,
    default: 3000
  },
  indicatorPosition: {
    type: String,
    values: ['', 'none', 'outside'],
    default: ''
  },
  indicator: {
    type: Boolean,
    default: true
  },
  arrow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'hover'
  },
  type: {
    type: String,
    values: ['', 'card'],
    default: ''
  },
  loop: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String,
    values: ['horizontal', 'vertical'],
    default: 'horizontal'
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  }
};

export const carouselEmits = {
  change: (current: number, prev: number) => [current, prev].every(isNumber)
};

export type CarouselProps = ExtractPropTypes<typeof carouselProps>;
export type CarouselEmits = typeof carouselEmits;
