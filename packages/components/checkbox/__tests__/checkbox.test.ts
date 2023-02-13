/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:06:30
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\checkbox\__tests__\carousel.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import checkbox from '../src/checkbox.vue';
// The component to test

describe('test checkbox', () => {
  it('should render slot', () => {
    const wrapper = mount(checkbox, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(checkbox);
      expect(wrapper.classes()).toContain('tas-checkbox');
    });
    });
});
