const search = require('./searchCandies');

describe('searchCandies', () => {
  it('searches the array for candies matching a Ma and 10', () => {
    expect(search('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });

  it('searches the array for candies matching a Ma and 2', () => {
    expect(search('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('searches the array for candies matching a S and 10', () => {
    expect(search('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('searches the array for candies matching a S and 4', () => {
    expect(search('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });

  it('works for lower case string entries', () => {
    expect(search('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});