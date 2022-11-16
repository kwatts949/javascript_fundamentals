const ShoppingBasket = require('./shoppingBasket')
const Candy = require('./candy')

describe('ShoppingBasket', () => {
  it('adds an item to the basket and returns the total value', () => {
    let basket = new ShoppingBasket();
    let candyDouble = { getName: () => 'Mars', getPrice: () => 4.99};
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toEqual(4.99)
  })

  it('returns an empty basket', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0)
  })

  it('adds several items and returns the correct value', () => {
    let basket = new ShoppingBasket();
    let candyDouble = { getName: () => 'Skittles', getPrice: () => 3.99};
    let candyDouble1 = { getName: () => 'Mars', getPrice: () => 4.99};

    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.addItem(candyDouble1);
    expect(basket.getTotalPrice()).toEqual(12.97)
  })

  it('adds several items and returns the correct value including discount', () => {
    let basket = new ShoppingBasket();
    let candyDouble = { getName: () => 'Skittles', getPrice: () => 3.99};

    basket.addItem(candyDouble);
    basket.addItem(candyDouble);
    basket.applyDiscount(5);
    expect(basket.getTotalPrice()).toBeCloseTo(2.98)
  })
})

