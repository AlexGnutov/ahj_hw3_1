import { /* randomCoords, */ randomCoordsProvider } from './utils';

jest.mock('./utils', () => ({
  ...jest.requireActual('./utils.js'),
  randomCoords: jest.fn(),
}));

test('Test RandomCoords Provider', () => {
  const xLimit = 4;
  const yLimit = 4;
  const result = randomCoordsProvider(xLimit, yLimit)();

  // Можно ли в таком случае мокировать значение?
  // randomCoords.mockReturnValue([1, 1]);
  // expect(randomCoords).toHaveBeenCalled();
  // expect(result).toEqual([1, 1]);

  expect(result.length).toBe(2);
});
