function printInventory(tags) {
  var cart = new Cart();
  var pos = new Pos(cart.getCartItems(tags));
  var content = pos.joinText();
  console.log(content);
}
