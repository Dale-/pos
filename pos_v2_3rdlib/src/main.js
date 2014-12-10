function printInventory(tags) {
  var cartItems = new CartItems();
  cartItems = cartItems.getCartItems(tags);
  var pos = new Pos(cartItems);
  var content = pos.joinText();
  console.log(content);
}
