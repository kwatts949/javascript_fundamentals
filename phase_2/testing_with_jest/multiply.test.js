const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 5 and 2', () => {
    expect(multiply(5, 2)).toBe(10);
  });
});