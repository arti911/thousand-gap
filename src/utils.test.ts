import { formatNumber } from './utils.js';
import { test, expect } from 'vitest';

test('formatNumber', () => {
  expect(formatNumber(1000)).toBe('1\u00A0000');
});
