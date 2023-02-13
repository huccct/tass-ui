/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:10:42
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\input\__tests__\data-picker.test.ts
 */
import input from '../src/input.vue';

import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';
const list = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

describe('test checkbox', () => {
  it('should render slot', () => {
    const wrapper = mount(input, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(input);
      expect(wrapper.classes()).toContain('tas-input');
    });
    });
});

test('the shopping list has milk on it', () => {
  expect(list).toContain('milk');
  expect(new Set(list)).toContain('milk');
  
});
