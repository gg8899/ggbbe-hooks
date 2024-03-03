import * as ggbeeHooks from '..';

describe('ggbeeHooks', () => {
  test('export modules should be define', () => {
    Object.keys(ggbeeHooks).forEach((module) => {
      expect(ggbeeHooks[module]).toBeDefined();
    });
  });
});
