function CartItem(item, count, promotionType) {
  this.item = item;
  this.count = count || 0;
  this.promotionType = promotionType;
  this.payCount = 0;
}

CartItem.prototype.getPayCount = function () {
  this.payCount = this.count;
  if(this.promotionType === 'BUY_TWO_GET_ONE_FREE') {
    this.payCount = this.payCount - Math.floor(this.payCount / 3);
  }
};

CartItem.prototype.toInventoryText = function() {
  return '名称：' + this.item.name +'，数量：' + this.count +
         this.item.unit+'，单价：' + Util.toFixed(this.item.price) +
         '(元)，小计：' + Util.toFixed(this.item.price * this.payCount) + '(元)\n';
};

CartItem.prototype.toPromotionText = function() {
  return '名称：' + this.item.name + '，数量：' +
         (this.count - this.payCount) + this.item.unit + '\n';
};

CartItem.prototype.toSavingMoney = function() {
  return (this.count - this.payCount) * this.item.price;
};

CartItem.prototype.toTotalMoney = function() {
  return this.item.price * this.payCount;
};

CartItem.prototype.getBarcode = function() {
  return this.item.barcode;
};
