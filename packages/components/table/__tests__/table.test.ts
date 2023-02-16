/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 15:49:42
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\table\__tests__\table.test.ts
 */
/*
 * @Author: 申恒杰
 * @Date: 2023-02-13 15:49:42
 * @Description: 铁沸物
 * @FilePath: \tass-ui\packages\components\table\__tests__\table.test.ts
 */
import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import table from '../src/table.vue';
// The component to test

describe('test table', () => {
    it('should render slot', () => {
        const wrapper = mount(table, {
            slots: {
                default: ''
            }
        });

        // Assert the rendered text of the component
        expect(wrapper.text()).toContain('');
        it('should have class', () => {
            const wrapper = mount(table);
            expect(wrapper.classes()).toContain('tas-table');
        });
    });
});
