/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-22 16:51:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-13 15:50:40
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import slider from '../src/slider.vue';

describe('test Slider', () => {
  it('should render slot', () => {
    const wrapper = mount(slider, {
      slots: {
        default: ''
      }
    });
  });
  it('should have class', () => {
    const wrapper = mount(slider);
    expect(wrapper.classes()).toContain('tas-slider');
  });
});
