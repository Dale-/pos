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
