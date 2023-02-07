import Collapse from '../src/collapse.vue';

import { describe, expect, it, test } from 'vitest';

const list = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

test('the shopping list has milk on it', () => {
  expect(list).toContain('milk');
  expect(new Set(list)).toContain('milk');
});
