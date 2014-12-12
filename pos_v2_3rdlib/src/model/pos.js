function Pos(cartItems) {
  this.cartItems = cartItems;
  this.firstLine = '***<没钱赚商店>购物清单***\n';
  this.splitLine = '----------------------\n';
  this.lastLIne = '**********************';
  this.inventoryText = this.joinText();
}

Pos.prototype.setPayCount = function() {
  
  _.forEach(this.cartItems, function(cartItem){
    cartItem.getPayCount();
  });
};


Pos.prototype.getInventoryText = function() {
  var inventoryText = '';

  _.forEach(this.cartItems, function(cartItem) {
    inventoryText += cartItem.toInventoryText();
  });

  return inventoryText;
};

Pos.prototype.getPromotionText = function() {
  var promotionText = '挥泪赠送商品：\n';

  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.isPromotion) {
      promotionText += cartItem.toPromotionText();
    }
  });

  return promotionText;
};

Pos.prototype.getTotalAndSavingText = function() {
  var totalMoney = 0;
  var savingMoney = 0;

  _.forEach(this.cartItems, function(cartItem) {
    if(cartItem.isPromotion) {
      savingMoney += cartItem.toSavingMoney();
    }
    totalMoney += cartItem.toTotalMoney();
  });

  return '总计：' + Util.toFixed(totalMoney) + '(元)\n' + '节省：' +
         Util.toFixed(savingMoney) + '(元)\n';
};

Pos.prototype.joinText = function() {
  this.setPayCount();
  var currentTimeText = '打印时间：' + Util.TimeHelper() + '\n';

  return this.firstLine + currentTimeText + this.splitLine +
         this.getInventoryText() + this.splitLine + this.getPromotionText() +
         this.splitLine + this.getTotalAndSavingText() + this.lastLIne;
};
