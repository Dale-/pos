function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function(incomingCartItem) {
  var existedCartItem = _.find(this.cartItems, function(cartItem) {
    return cartItem.getBarcode() === incomingCartItem.getBarcode();
  });
  if(existedCartItem) {
    existedCartItem.count += incomingCartItem.count;
  } else {
    this.cartItems.push(incomingCartItem);
  }
};

Cart.prototype.getInventoryText = function() {
  var inventoryText = '';
  _.forEach(this.cartItems, function(cartItem) {
    inventoryText += cartItem.toInventoryText();
  });
  return inventoryText;
};

Cart.prototype.getPromotionText = function() {
  var promotionText = '';
  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.isPromotion()){
      promotionText += cartItem.toPromotionText();
    }
  });
  return promotionText;
};

Cart.prototype.getTotalAmount = function() {
  var totalAmount = 0;
  _.forEach(this.cartItems, function(cartItem) {
    totalAmount += cartItem.getSubtotal();
  });
  return Util.toFixed(totalAmount);
};

Cart.prototype.getSavingMoney = function() {
  var savingMoney = 0;
  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.isPromotion()){
      savingMoney += cartItem.promotionPrice;
    }
  });
  return Util.toFixed(savingMoney);
};

Cart.prototype.toString = function(cart) {
  PromotionCalculate.calculateCartItems(cart.cartItems, Promotion.all());
  return '***<没钱赚商店>购物清单***\n' +
         '打印时间：' + Util.toTime() + '\n' +
         '----------------------\n' +
         this.getInventoryText() +
         '----------------------\n' +
         '挥泪赠送商品：\n' +
         this.getPromotionText() +
         '----------------------\n' +
         '总计：' + this.getTotalAmount() + '(元)\n' +
         '节省：' + this.getSavingMoney() + '(元)\n' +
         '**********************';
};
