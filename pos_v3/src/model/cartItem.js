function CartItem(item, count) {
    this.item = item;
    this.count = count;
    this.promotionPrice = 0;
    this.promotionInfo = '';
}

module.exports = CartItem;