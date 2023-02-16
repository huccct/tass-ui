import datapicker from '../src/date-picker.vue';

import { describe, expect, it, test } from 'vitest';
import { mount } from '@vue/test-utils';

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
