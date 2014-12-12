function Pos() {
  this.firstLine = '***<没钱赚商店>购物清单***\n';
  this.splitLine = '----------------------\n';
  this.lastLIne = '**********************';
}

Pos.prototype.setPayCount = function(cartItems) {

  _.forEach(cartItems, function(cartItem){
    cartItem.getPayCount();
  });
};


Pos.prototype.getInventoryText = function(cartItems) {
  var inventoryText = '';

  _.forEach(cartItems, function(cartItem) {
    inventoryText += cartItem.toInventoryText();
  });

  return inventoryText;
};

Pos.prototype.getPromotionText = function(cartItems) {
  var promotionText = '挥泪赠送商品：\n';

  _.forEach(cartItems, function(cartItem) {
    if(cartItem.promotionType) {
      promotionText += cartItem.toPromotionText();
    }
  });

  return promotionText;
};

Pos.prototype.joinText = function(cart) {
  this.setPayCount(cart.cartItems);
  var currentTimeText = '打印时间：' + Util.TimeHelper() + '\n';

  return this.firstLine + currentTimeText + this.splitLine +
         this.getInventoryText(cart.cartItems) + this.splitLine +
         this.getPromotionText(cart.cartItems) + this.splitLine +
         cart.toTotalAndSavingText() + this.lastLIne;
};
