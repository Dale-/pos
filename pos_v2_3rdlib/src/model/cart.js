function Cart() {
   this.cartItems = [];
}

Cart.prototype.addCartItem = function(newCartItem) {

  var cartItem = _.find(this.cartItems, function(cartItem) {
    return  cartItem.getBarcode() === newCartItem.getBarcode();
  });

  if(cartItem) {
    cartItem.count += newCartItem.count;
  }else {
    newCartItem.promotionType =
                Promotion.getPromotionType(newCartItem.item.barcode);
    this.cartItems.push(newCartItem);
  }
};
