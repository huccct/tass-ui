/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:01:33
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\backtop\__tests__\backtop.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import backtop from '../src/backtop.vue';
// The component to test

describe('test backtop', () => {
  it('should render slot', () => {
    const wrapper = mount(backtop, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(backtop);
      expect(wrapper.classes()).toContain('tas-backtop');
  });
  });
});
