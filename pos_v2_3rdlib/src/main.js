function printInventory(tags) {
  var cartItems = new CartItems();
  var pos = new Pos(cartItems.getCartItems(tags));
  var content = pos.joinText();
  //console.log(content);
}
