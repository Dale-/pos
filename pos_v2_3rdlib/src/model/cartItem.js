function CartItem(item, count, isPromotion) {
  this.item = item;
  this.count = count || 0;
  this.isPromotion = isPromotion;
  this.payCount = 0;
}
