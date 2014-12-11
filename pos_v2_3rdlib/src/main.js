function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();
  _.forEach(tags, function(tag) {
    var cartItem = scanner.scan(tag);
    cart.addCartItem(cartItem);
  });
  cart.setPayCount();
  console.log(cart.cartItems);
  // var cart = new Cart();
  var pos = new Pos(cart.cartItems);
  var content = pos.joinText();
  console.log(content);
}
