/*
 * @Author: 申恒杰
 * @Date: 2023-02-01 21:33:37
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\carousel\
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import carousel from '../src/carousel.vue';
// The component to test

describe('test carousel', () => {
  it('should render slot', () => {
    const wrapper = mount(carousel, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(carousel);
      expect(wrapper.classes()).toContain('tas-carousel');
    });
    });
});
