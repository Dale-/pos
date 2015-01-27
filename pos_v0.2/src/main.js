//TODO: Please write code in this file.
function printInventory(barcodes) {

  var items = Item.getItems(barcodes);
  var cartItems = CartItem.getCartItems(items);
  var cart = new Cart();

  cart.cartItems = cartItems;
  var inventory = new Inventory(cart);
  console.log(inventory.toString());
}
