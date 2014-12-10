function printInventory(tags) {
  var cartItems = new CartItems();
  cartItems.getCartItems(tags);
  console.log(cartItems);
  // var currentTime = new CurrentTime();
  // var dataText = currentTime.getCurrentTimeText();
  // var inventoryText = StringFunction.getInventoryText(cartItems, dataText);
  // console.log(inventoryText);
}
