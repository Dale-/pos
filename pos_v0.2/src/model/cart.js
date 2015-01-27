function Cart() {
  this.cartItems = [];
}

Cart.prototype.getTotalAmount = function() {
  var totalAmount = 0;
  _.forEach(this.cartItems, function(cartItem) {
    var subtotal = cartItem.getSubtotal();
    totalAmount += subtotal;
  });
  return totalAmount;
};

Cart.prototype.getCartItemsInventoryText = function() {
  var cartItemsText = '';

  _.forEach(this.cartItems, function(cartItem) {
    cartItemsText += cartItem.toInventoryText();
  });

  return cartItemsText;
};
