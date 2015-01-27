function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();

  _.forEach(tags, function(tag) {
    var cartItem = scanner.scan(tag);
    cart.addCartItem(cartItem);
  });

  console.log(cart.toString(cart));
}
