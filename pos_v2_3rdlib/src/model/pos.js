function Pos(cartItems) {
  this.cartItems = cartItems;
  this.firstLine = '***<没钱赚商店>购物清单***\n';
  this.splitLine = '----------------------\n';
  this.lastLIne = '**********************';
}

Pos.prototype.getInventoryText = function() {
  var inventoryText = '';
  var cartItems = this.cartItems;

  _.forEach(cartItems, function(cartItem) {
    var item = cartItem.item;
    inventoryText += '名称：' + item.name +'，数量：' +
                     cartItem.count + item.unit +'，单价：' +
                     item.price.toFixed(2) +  '(元)，小计：' +
                     (item.price * cartItem.payCount).toFixed(2) +
                     '(元)\n';
  });

  return inventoryText;
};

Pos.prototype.getPromotionText = function() {
  var promotionText = '挥泪赠送商品：\n';
  var cartItems = this.cartItems;

  _.forEach(cartItems, function(cartItem) {
    var item = cartItem.item;
    if(cartItem.isPromotion) {
      promotionText += '名称：' + item.name + '，数量：' +
                       Math.floor(cartItem.count / 3) + item.unit + '\n';
    }
  });

  return promotionText;
};

Pos.prototype.getTotalAndSavingText = function() {
  var totalMoney = 0;
  var savingMoney = 0;
  var cartItems = this.cartItems;

  _.forEach(cartItems, function(cartItem) {
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
  var currentTime = new CurrentTime();
  var currentTimeText = currentTime.getCurrentTimeText();

  var inventoryText = this.getInventoryText();
  var promotionText = this.getPromotionText();
  var totalAndSavingText = this.getTotalAndSavingText();

  return this.firstLine + currentTimeText + this.splitLine +
         inventoryText + this.splitLine + promotionText +
         this.splitLine + totalAndSavingText + this.lastLIne;
};
