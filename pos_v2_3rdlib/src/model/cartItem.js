function CartItem(item, count, isPromotion) {
  this.item = item;
  this.count = count || 0;
  this.isPromotion = isPromotion;
  this.payCount = 0;
}

CartItem.prototype.getPayCount = function () {
  this.payCount = this.count;
  if(this.isPromotion) {
    this.payCount = this.payCount - Math.floor(this.payCount / 3);
  }
};

CartItem.prototype.toInventoryText = function() {
  return '名称：' + this.item.name +'，数量：' + this.count +
         this.item.unit+'，单价：' + this.item.price.toFixed(2) +
         '(元)，小计：' + (this.item.price * this.payCount).toFixed(2) + '(元)\n';
};

CartItem.prototype.toPromotionText = function() {
  return '名称：' + this.item.name + '，数量：' +
         Math.floor(this.count / 3) + this.item.unit + '\n';
};

CartItem.prototype.toSavingMoney = function() {
  return Math.floor(this.count / 3) * this.item.price;
};

CartItem.prototype.toTotalMoney = function() {
  return this.item.price * this.payCount;
};

CartItem.prototype.getBarcode = function() {
  return this.item.barcode;
};
