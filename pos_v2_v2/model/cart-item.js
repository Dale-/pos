function CartItem(item, count) {
    this.item = item;
    this.count = count;
    this.promotionCount = 0;
    this.promotionPrice = 0.00;
}

CartItem.prototype.toListText  = function() {
    return '名称：' + this.getItemName() +'，数量：' + this.count +
        this.getItemUnit() +'，单价：' + this.getItemPrice() + '(元)，小计：'+
        this.getSubTotal().toFixed(2) +'(元)\n';
};
function CartItem(item, count) {
    this.item = item;
    this.count = count;
    this.promotionCount = 0;
    this.promotionPrice = 0.00;
}

CartItem.prototype.toListText  = function() {
    return '名称：' + this.getItemName() +'，数量：' + this.count +
        this.getItemUnit() +'，单价：' + this.getItemPrice() + '(元)，小计：'+
        this.getSubTotal().toFixed(2) +'(元)\n';
};

CartItem.prototype.getItemName = function() {
    return this.item.name;
};

CartItem.prototype.getItemUnit = function() {
    return this.item.unit;
};

CartItem.prototype.getBarcode = function() {
    return this.item.barcode;
};

CartItem.prototype.getItemPrice = function() {
    return (this.item.price).toFixed(2);
};

CartItem.prototype.getSubTotal = function() {
    return this.item.price * this.count - this.promotionPrice;
};

CartItem.prototype.toPromotionText = function() {
    if(!!this.promotionCount) {
        return '名称：' + this.getItemName() + '，数量：' +
            this.promotionCount + this.getItemUnit() +'\n';
    } else {
        return '';
    }
};

module.exports = CartItem;
CartItem.prototype.getItemName = function() {
    return this.item.name;
};

CartItem.prototype.getItemUnit = function() {
    return this.item.unit;
};

CartItem.prototype.getBarcode = function() {
    return this.item.barcode;
};

CartItem.prototype.getItemPrice = function() {
    return (this.item.price).toFixed(2);
};

CartItem.prototype.getSubTotal = function() {
    return this.item.price * this.count - this.promotionPrice;
};

CartItem.prototype.toPromotionText = function() {
    if(!!this.promotionCount) {
        return '名称：' + this.getItemName() + '，数量：' +
            this.promotionCount + this.getItemUnit() +'\n';
    } else {
        return '';
    }
};

module.exports = CartItem;