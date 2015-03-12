var _ = require('lodash');
var Discount = require('./promotion/discount');
var Promotion = require('./promotion/promotion');
var UpToTopReduce = require('./promotion/up-to-top-reduce');
var PromotionUpToTop = require('./promotion/promotion_up_to_top');

function Strategy() {
}

Strategy.getStrategy1String = function(cartItems) {
    var promotionInfo = Strategy.calculateBrandPromotion(cartItems);
    var noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);
    promotionInfo += Strategy.calculateItemPromotion(noPromotionCartItems);

    var newCartItems = Strategy.removeAppointedCartItem(
                       Strategy.getNoPromotionCartItems(cartItems), '康师傅方便面');
    promotionInfo += UpToTopReduce.wholeSupermarket(newCartItems, 100, 3);

    return promotionInfo;
};

Strategy.getStrategy2String = function(cartItems) {
    var promotionInfo = Strategy.calculateItemPromotion(cartItems);
    var noPromotionCartItems = Strategy.getNoPromotionCartItems(cartItems);

    promotionInfo += Strategy.calculateBrandPromotion(noPromotionCartItems);
    promotionInfo += Strategy.calculateTopBrandPromotion(cartItems, 0);
    promotionInfo += Strategy.calculateTopItemPromotion(cartItems, 0);

    return promotionInfo;
};

Strategy.getStrategy3String = function(cartItems) {
    var promotionInfo = Strategy.calculateItemPromotion(cartItems);
    promotionInfo += Strategy.calculateBrandPromotion(cartItems);
    promotionInfo += Strategy.calculateTopBrandPromotion(cartItems, 0);

    var newCartItems = Strategy.removeAppointedCartItem(cartItems, '云山苹果');
    promotionInfo += UpToTopReduce.wholeSupermarket(newCartItems, 100, 5);

    return promotionInfo;
};

Strategy.getStrategy4String = function(cartItems) {
    var promotionInfo = Strategy.calculateItemPromotion(cartItems);
    Strategy.removeSubTotal(cartItems, 0);
    promotionInfo += Strategy.calculateBrandPromotion(cartItems);
    Strategy.recoverSubTotal(cartItems, 0);

    promotionInfo += Strategy.calculateTopItemPromotion(cartItems, 1);
    promotionInfo += Strategy.calculateTopBrandPromotion(cartItems, 1);

    var newCartItems = Strategy.removeAppointedCartItem(cartItems, '雪碧');
    promotionInfo += Discount.wholeSupermarket(newCartItems, 0.9);

    return promotionInfo;
};

Strategy.removeSubTotal = function(cartItems, brandNum) {
    var brand = Promotion.brands()[brandNum];
    _.forEach(cartItems, function(cartItem) {
        if(cartItem.subPromotionTotal && cartItem.getBrand() === brand.name) {
            cartItem.subPromotionTotal = 0;
        }
    });
};

Strategy.recoverSubTotal = function(cartItems, itemNum) {
    var item = Promotion.items()[itemNum];
    _.forEach(cartItems, function(cartItem) {
        if(cartItem.subPromotionTotal && cartItem.getName() === item.name) {
            var itemPromotionTotal = cartItem.getPrice() * cartItem.count * (1 - item.rate);
            cartItem.subPromotionTotal -= itemPromotionTotal;
        }
    });
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

Strategy.getItemCartItem = function(cartItems, item) {
    var cartItem =  _.find(cartItems ,function(cartItem) {
        return cartItem.getName() === item.name;
    });
    return cartItem;
};

Strategy.calculateTopBrandPromotion = function(cartItems, brandNum) {
    var brandPromotionInfo = '';
    var brand = PromotionUpToTop.brands()[brandNum];
    var brandCartItems = Strategy.getBrandCartItems(cartItems, brand);

    brandPromotionInfo += UpToTopReduce.brand(brandCartItems, brand.top, brand.saving, brand.name);
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

Strategy.calculateTopItemPromotion = function(cartItems, itemNum) {
    var itemPromotionInfo = '';
    var item = PromotionUpToTop.items()[itemNum];
    var cartItem = Strategy.getItemCartItem(cartItems, item);
    if(cartItem) {
        itemPromotionInfo += UpToTopReduce.item(cartItem, item.top, item.saving);
    }
    return itemPromotionInfo;
};

Strategy.calculateItemPromotion = function(cartItems) {
    var itemPromotionInfo = '';
    _.forEach(Promotion.items(), function(item) {
        var cartItem = Strategy.getItemCartItem(cartItems, item);
        if(cartItem) {
            itemPromotionInfo += Discount.item(cartItem, item.rate);
        }
    });
    return itemPromotionInfo;
};

module.exports = Strategy;