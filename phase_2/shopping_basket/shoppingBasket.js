class ShoppingBasket {
  constructor() {
    this.basketarr = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.basketarr.push(candy);
  }

   applyDiscount = (discount) => {  
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.basketarr.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }

 
}

module.exports = ShoppingBasket;