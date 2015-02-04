var _ = require('lodash');
var Discount = require('./promotion/discount');
var Promotion = require('./promotion/promotion');

function Strategy() {
}

Strategy.getStrategy1String = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += Strategy.calculateBrandPromotion(cartItems);
    var items = [];
    _.forEach(cartItems, function(cartItem) {
       if(!cartItem.isPromotion) {
           items.push(cartItem);
       }
    });

};

Strategy.calculateBrandPromotion = function(cartItems) {
    var brandPromotionInfo = '';
    _.forEach(Promotion.brands, function(brand) {
        var brandCartItems = [];
        _.forEach(cartItems ,function(cartItem) {
            if(cartItem.getBrand() === brand.name) {
                brandCartItems.push(cartItem);
            }
        });
        brandPromotionInfo += Discount.brand(brandCartItems, brand.rate, brand.name);
    });
    return brandPromotionInfo;
};

Strategy.calculateItemPromotion = function(cartItems) {
    var itemPromotionInfo = '';
    _.forEach(Promotion.items, function(item) {
        var itemCartItems = [];
        _.forEach(cartItems ,function(cartItem) {
            if(cartItem.getBrand() === item.name) {
                itemCartItems.push(cartItem);
            }
        });
        itemPromotionInfo += Discount.brand(brandCartItems, brand.rate, brand.name);
    });
    return itemPromotionInfo;
};

module.exports = Strategy;