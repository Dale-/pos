var _ = require('lodash');
var Discount = require('./promotion/discount');
var Promotion = require('./promotion/promotion');
var UpToTopReduce = require('./promotion/up-to-top-reduce');
var PromotionUpToTop = require('./promotion/promotion_up_to_top');

function Strategy() {
}

Strategy.getStrategy1String = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += Strategy.calculateBrandPromotion(cartItems);

    var noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);
    promotionInfo += Strategy.calculateItemPromotion(noPromotionCartItems);

    var newCartItems = Strategy.removeAppointedCartItem(
                       Strategy.getNoPromotionCartItems(cartItems), '康师傅方便面');

    promotionInfo += UpToTopReduce.wholeSupermarket(newCartItems, 100, 3);
    return promotionInfo;
};

Strategy.getStrategy2String = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += Strategy.calculateItemPromotion(cartItems);

    var noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);
    promotionInfo += Strategy.calculateBrandPromotion(noPromotionCartItems);

    return promotionInfo;
};

Strategy.removeAppointedCartItem = function(cartItems, name) {
    var newCartItems = [];
    _.forEach(cartItems, function(cartItem) {
       if(cartItem.getName() !== name) {
           newCartItems.push(cartItem);
       }
    });
    return newCartItems;
};

Strategy.getNoPromotionCartItems = function(cartItems) {
    var items = [];
    _.forEach(cartItems, function(cartItem) {
        if(!cartItem.isPromotion) {
            items.push(cartItem);
        }
    });
    return items;
};

Strategy.getBrandCartItems = function(cartItems, brand) {
    var brandCartItems = [];
    _.forEach(cartItems ,function(cartItem) {
        if(cartItem.getBrand() === brand.name) {
            brandCartItems.push(cartItem);
        }
    });
    return brandCartItems;
};

Strategy.calculateTopBrandPromotion = function(cartItems) {
    var brandPromotionInfo = '';
    _.forEach(PromotionUpToTop.brands(), function(brand) {
        var brandCartItems = Strategy.getBrandCartItems(cartItems, brand);
        brandPromotionInfo += Discount.brand(brandCartItems, brand.top, brand.saving, brand.name);
    });
    return brandPromotionInfo;
};

Strategy.calculateBrandPromotion = function(cartItems) {
    var brandPromotionInfo = '';
    _.forEach(Promotion.brands(), function(brand) {
        var brandCartItems = Strategy.getBrandCartItems(cartItems, brand);
        brandPromotionInfo += Discount.brand(brandCartItems, brand.rate, brand.name);
    });
    return brandPromotionInfo;
};

Strategy.calculateItemPromotion = function(cartItems) {
    var itemPromotionInfo = '';
    _.forEach(Promotion.items(), function(item) {
        _.forEach(cartItems ,function(cartItem) {
            if(cartItem.getName() === item.name) {
                itemPromotionInfo += Discount.item(cartItem, item.rate);
            }
        });
    });
    return itemPromotionInfo;
};

module.exports = Strategy;