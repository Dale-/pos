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
    if(cartItem.isPromotion) {
      promotionText += cartItem.toPromotionText();
    }
  });

  return promotionText;
};

Pos.prototype.getTotalAndSavingText = function(cartItems) {
  var totalMoney = 0;
  var savingMoney = 0;

  _.forEach(cartItems, function(cartItem) {
    if(cartItem.isPromotion) {
      savingMoney += cartItem.toSavingMoney();
    }
    totalMoney += cartItem.toTotalMoney();
  });

  return '总计：' + Util.toFixed(totalMoney) + '(元)\n' + '节省：' +
         Util.toFixed(savingMoney) + '(元)\n';
};

Pos.prototype.joinText = function(cartItems) {
  this.setPayCount(cartItems);
  var currentTimeText = '打印时间：' + Util.TimeHelper() + '\n';

  return this.firstLine + currentTimeText + this.splitLine +
         this.getInventoryText(cartItems) + this.splitLine +
         this.getPromotionText(cartItems) + this.splitLine +
         this.getTotalAndSavingText(cartItems) + this.lastLIne;
};
