var _ = require('lodash');
var Strategy = require('./strategy');
var ItemDiscount = require('../promotion/discount/item-discount');
var BrandDiscount = require('../promotion/discount/brand-discount');
var WholeSupermarketFullReduce = require('../promotion/full-reduce/whole-supermarket-full-reduce');

function StrategyOne(cartItems) {
    Strategy.call(this, cartItems);
}

StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

StrategyOne.prototype.getPromotionInfo = function() {
    return this.getBrandDiscountInfo() + this.getItemDiscountInfo() +
           this.getWholeSupermarketDiscountInfo();
};

StrategyOne.prototype.getBrandDiscountInfo = function() {
    var brandDiscountInfo = '';
    _.forEach(StrategyOne.brandDiscount(), function(brandDiscount) {
        brandDiscountInfo += brandDiscount.buildPromotionInfo();
    });
    return brandDiscountInfo;
};

StrategyOne.prototype.getItemDiscountInfo = function() {
    var itemDiscountInfo = '';
    _.forEach(StrategyOne.itemDiscount(), function(itemDiscount) {
        if(itemDiscount.buildPromotionInfo().cartItem.isBrandDiscount) {
            itemDiscountInfo += '';
        } else {
            itemDiscountInfo += itemDiscount.buildPromotionInfo();
        }
    });
    return itemDiscountInfo;
};

StrategyOne.prototype.getWholeSupermarketDiscountInfo = function() {
    return StrategyOne.wholeSupermarketFullReduce().buildPromotionInfo();
};

StrategyOne.prototype.findBePromotionMoney = function(itemName) {
    return this.removeBrand('可口可乐').getTotalMoney() - this.getAppointedSubTotal(itemName);
};

StrategyOne.brandDiscount = function() {
    return [new BrandDiscount(0.9, this.findBrandCartItems('可口可乐'), '可口可乐')];
};

StrategyOne.itemDiscount = function() {
    return [new ItemDiscount(0.95, this.findCartItem('可口可乐350ml'), '可口可乐350ml')];
};

StrategyOne.wholeSupermarketFullReduce = function() {
    return new WholeSupermarketFullReduce(100, 3, this.findBePromotionMoney('康师傅方便面'));
};

module.exports = StrategyOne;
