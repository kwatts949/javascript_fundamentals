class ShoppingBasket {
  constructor() {
    this.basketarr = [];
  }

  addItem(candy) {
    this.basketarr.push(candy);
  }

  getTotalPrice = () => {
    const temparray = 
    this.basketarr.map((candy) => {
      return candy.getPrice();
    });

    return temparray.reduce((a, v) => {return a + v}, 0)
  }
}

module.exports = ShoppingBasket;

// const basket = new ShoppingBasket();
// basket.addItem(new Candy('Skittle', 3.99));