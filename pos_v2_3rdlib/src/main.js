function printInventory(tags) {
  var scanner = new Scanner();
  var cart = new Cart();
  _.forEach(tags, function(tag) {
    cart.addCartItem(scanner.scan(tag));
  });
  
  var inventory = new Inventory(cart.cartItems);
  console.log(inventory.inventoryText);
}
