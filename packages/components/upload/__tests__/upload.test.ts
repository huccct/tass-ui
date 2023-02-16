import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import upload from '../src/upload.vue';

describe('test Upload', () => {
  it('should render slot', () => {
    const wrapper = mount(upload, {
      slots: {
        default: ''
      }
    });

    expect(wrapper.text()).toContain('');
  });
  it('should have class', () => {
    const wrapper = mount(upload);
    expect(wrapper.classes()).toContain('tas-upload');
  });
});