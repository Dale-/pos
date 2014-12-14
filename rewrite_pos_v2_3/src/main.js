function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();

  _.forEach(tags, function(tag) {
    var cartItem = scanner.scan(tag);
    cart.addCartItem(cartItem);
  });

  PromotionCalculate.calculateCartItems(cart.cartItems, Promotion.all());
  
  console.log(cart.toString());
}
