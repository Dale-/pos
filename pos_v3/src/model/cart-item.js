function CartItem(item, count) {
    this.item = item;
    this.count = count;
    //this.promotionPrice = 0;
    //this.promotionInfo = '';
}

CartItem.prototype.getPrice = function() {
  return this.item.price;
};

module.exports = CartItem;