function Inventory(cart) {
  this.cart = cart;
}

Inventory.prototype.toString = function() {
  return '***<没钱赚商店>购物清单***\n' +
  this.cart.getCartItemsInventoryText() +
  '----------------------\n' +
  '总计：' + this.cart.getTotalAmount().toFixed(2) + '(元)\n' +
  '**********************';
};
