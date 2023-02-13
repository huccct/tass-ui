/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:10:42
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\pagination\__tests__\pagination.test.ts
 */
import pagination from '../src/pagination.vue';

import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';

describe('test checkbox', () => {
  it('should render slot', () => {
    const wrapper = mount(pagination, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(pagination);
      expect(wrapper.classes()).toContain('tas-pagination');
    });
    });
});
