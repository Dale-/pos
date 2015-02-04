function CartItem(item, count) {
    this.item = item;
    this.count = count;
    this.isPromotion = false;
    //this.promotionPrice = 0;
    //this.promotionInfo = '';
}

CartItem.prototype.getPrice = function() {
  return this.item.price;
};

CartItem.prototype.getBrand = function() {
    return this.item.brand;
};

CartItem.prototype.getName = function() {
    return this.item.name;
};

module.exports = CartItem;