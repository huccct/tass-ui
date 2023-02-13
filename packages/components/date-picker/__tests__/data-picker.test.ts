import datapicker from '../src/data-picker.vue';

import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';
const list = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

describe('test checkbox', () => {
  it('should render slot', () => {
    const wrapper = mount(datapicker, {
      slots: {
        default: ''
      }
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
    it('should have class', () => {
      const wrapper = mount(datapicker);
      expect(wrapper.classes()).toContain('tas-datapicker');
    });
    });
});

test('the shopping list has milk on it', () => {
  expect(list).toContain('milk');
  expect(new Set(list)).toContain('milk');
  
});
