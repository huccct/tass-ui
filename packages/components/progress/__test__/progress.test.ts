import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import progress from '../src/progress.vue';

describe('test Progress', () => {
  it('should render slot', () => {
    const wrapper = mount(progress, {
      slots: {
        default: ''
      }
    });

    expect(wrapper.text()).toContain('');
  });
  it('should have class', () => {
    const wrapper = mount(progress);
    
  });
});