/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:05:37
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\breadcrumb\__tests__\backtop.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import breadcrumb from '../src/breadcrumb.vue';
// The component to test

describe('test breadcrumb', () => {
  it('should render slot', () => {
    const wrapper = mount(breadcrumb, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(breadcrumb);
      expect(wrapper.classes()).toContain('tas-breadcrumb');
  });
  });
});
