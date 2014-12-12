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

Cart.prototype.toTotalAndSavingText = function() {
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
