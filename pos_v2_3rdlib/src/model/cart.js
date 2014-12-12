function Cart() {
   this.cartItems = [];
}

Cart.prototype.addCartItem = function(newCartItem) {

  var cartItem = _.find(this.cartItems, function(cartItem) {
    return  cartItem.getBarcode() === newCartItem.getBarcode();
  });

  if(cartItem) {
    cartItem.count += newCartItem.count;
  }else {
    newCartItem.promotionType =
                Promotion.getPromotionType(newCartItem.item.barcode);
    this.cartItems.push(newCartItem);
  }
};

Cart.prototype.setPayCount = function() {

  _.forEach(this.cartItems, function(cartItem){
    cartItem.getPayCount();
  });
};

Cart.prototype.getInventoryText = function() {
  var inventoryText = '';

  _.forEach(this.cartItems, function(cartItem) {
    inventoryText += cartItem.toInventoryText();
  });

  return inventoryText;
};

Cart.prototype.getPromotionText = function() {
  var promotionText = '挥泪赠送商品：\n';

  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.promotionType) {
      promotionText += cartItem.toPromotionText();
    }
  });

  return promotionText;
};

Cart.prototype.getTotalAndSavingText = function() {
  var totalMoney = 0;
  var savingMoney = 0;

  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.promotionType) {
      savingMoney += cartItem.toSavingMoney();
    }
    totalMoney += cartItem.toTotalMoney();
  });

  return '总计：' + Util.toFixed(totalMoney) + '(元)\n' + '节省：' +
  Util.toFixed(savingMoney) + '(元)\n';
};
