/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 16:10:42
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\message\__tests__\message.test.ts
 */
import message from '../src/message.vue';

import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';
const list = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

describe('test checkbox', () => {
  it('should render slot', () => {
    const wrapper = mount(message, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(message);
      expect(wrapper.classes()).toContain('tas-message');
    });
    });
});

test('the shopping list has kleenex on it', () => {
  expect(list).toContain('kleenex');
  expect(new Set(list)).toContain('kleenex');
  
});
