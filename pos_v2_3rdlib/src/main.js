function printInventory(tags) {
  var cartItems = CartItem.getCartItems(tags);
  //console.log(carItems);
  var currentTime = new CurrentTime();
  var dataText = currentTime.getCurrentTimeText();
  var inventoryText = StringFunction.getInventoryText(cartItems, dataText);
  console.log(inventoryText);
}
