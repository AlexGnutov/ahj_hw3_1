/**
 * @jest-environment jsdom
 */
import { randomCoords, create } from './utils';

test('Check RandomCoords', () => {
  const result = randomCoords(1, 1);
  expect(result).toEqual([0, 0]);
});

test('Test create function', () => {
  const sample = window.document.createElement('div');
  sample.className = 'class';
  sample.innerText = 'text';
  const result = create('div', 'class', 'text');
  expect(result.outerHTML).toBe(sample.outerHTML);
});
