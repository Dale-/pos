function Cart() {
   this.cartItems = [];
}

Cart.prototype.addCartItem = function(cart_item) {
  var cartItems = this.cartItems;
  var newCartItem = _.find(cartItems, function(cartItem) {
    return  cart_item.item.barcode == cartItem.item.barcode;
  });
  
  if(newCartItem) {
    newCartItem.count += count ;
  }else {
    cart_item.isPromotion =
      Promotion.isPromotionBarcode(cart_item.item.barcode);
    cartItems.push(cart_item);
  }
};
