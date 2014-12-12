function Pos(cartItems) {
  this.cartItems = cartItems;
  this.firstLine = '***<没钱赚商店>购物清单***\n';
  this.splitLine = '----------------------\n';
  this.lastLIne = '**********************';
  this.inventoryText = this.joinText();
}

Pos.prototype.setPayCount = function() {
  var cartItems = this.cartItems;
  _.forEach(cartItems, function(cartItem){
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
    var item = cartItem.item;
    if(cartItem.isPromotion) {
      savingMoney += Math.floor(cartItem.count / 3) * item.price;
    }
    totalMoney += item.price * cartItem.payCount;
  });

  return '总计：' + totalMoney.toFixed(2) + '(元)\n' + '节省：' +
         savingMoney.toFixed(2) + '(元)\n';
};

Pos.prototype.joinText = function() {
  this.setPayCount();
  var currentTime = new CurrentTime();
  var currentTimeText = currentTime.getCurrentTimeText();

  return this.firstLine + currentTimeText + this.splitLine +
         this.getInventoryText() + this.splitLine + this.getPromotionText() +
         this.splitLine + this.getTotalAndSavingText() + this.lastLIne;
};
