const fizzbuzz = require('./fizzBuzz');

describe('fizzbuzz', () => {
  it('tests fizzyness', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });
});