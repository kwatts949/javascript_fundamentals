const Candy = require('./candy');

describe('class candy', () => {
  it('returns the name & price of the candy', () => {
    let candy = new Candy('Mars', 4.99);

    expect(candy.getName()).toEqual('Mars');
    expect(candy.getPrice()).toEqual(4.99);
  });
});
 