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
    newCartItem.isPromotion =
                Promotion.isPromotionBarcode(newCartItem.item.barcode);
    this.cartItems.push(newCartItem);
  }
};
