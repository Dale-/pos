function Cart() {
   this.cartItems = [];
}

Cart.prototype.addCartItem = function(cart_item) {
  var cartItems = this.cartItems;
  var cartItem = _.find(cartItems, function(cartItem) {
    return  cartItem.getBarcode() === cart_item.getBarcode();
  });

  if(cartItem) {
    cartItem.count += cart_item.count;
  }else {
    cart_item.isPromotion =
      Promotion.isPromotionBarcode(cart_item.item.barcode);
    cartItems.push(cart_item);
  }
};
