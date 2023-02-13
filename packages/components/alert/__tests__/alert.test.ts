/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:01:33
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\alert\__tests__\alert.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import alert from '../src/alert.vue';
// The component to test

describe('test alert', () => {
  it('should render slot', () => {
    const wrapper = mount(alert, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(alert);
      expect(wrapper.classes()).toContain('tas-table');
  });
  });
});
