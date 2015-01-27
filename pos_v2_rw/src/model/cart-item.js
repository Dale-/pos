function CartItem(item, count) {
  this.item = item;
  this.count = count || 0;
  this.promotionCount = 0;
  this.promotionPrice = 0.00;
}

CartItem.prototype.getBarcode = function() {
  return this.item.barcode;
};

CartItem.prototype.getPrice = function() {
  return this.item.price;
};

CartItem.prototype.isPromotion = function() {
  return this.promotionCount !== 0 && this.promotionPrice !== 0.00;
};

CartItem.prototype.getOriginSubtotal = function() {
  return this.count * this.item.price;
};

CartItem.prototype.getSubtotal = function() {
  return this.getOriginSubtotal() - this.promotionPrice;
};

CartItem.prototype.toInventoryText = function() {
  return '名称：' + this.item.name + '，数量：' + this.count +
         this.item.unit + '，单价：' + Util.toFixed(this.item.price) +
         '(元)，小计：' + Util.toFixed(this.getSubtotal()) + '(元)\n';
};

CartItem.prototype.toPromotionText = function() {
  return '名称：' + this.item.name + '，数量：' +
         this.promotionCount + this.item.unit + '\n';
};
