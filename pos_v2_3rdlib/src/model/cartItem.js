function CartItem(item, count, isPromotion) {
  this.item = item;
  this.count = count || 0;
  this.isPromotion = isPromotion;
  this.payCount = 0;
}

CartItem.prototype.setPayCount = function(payCount) {
  this.payCount = payCount;
};

CartItem.prototype.getPayCount = function() {
  return this.payCount;
};

CartItem.prototype.getIsPromotion = function() {
  return this.isPromotion;
};

CartItem.prototype.setIsPromotion = function(isPromotion) {
  this.isPromotion = isPromotion;
};

CartItem.prototype.getItem = function() {
  return this.item;
};

CartItem.prototype.setItem = function(item) {
  this.item = item;
};

CartItem.prototype.getCount = function() {
  return this.count;
};

CartItem.prototype.setCount = function(count) {
  this.count = count;
};
