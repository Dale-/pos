function PromotionCalculate() {
}

PromotionCalculate.calculatePromotionCount = function(cartItem, promotions) {
  _.forEach(promotions, function(promotion){
    var hasPromotion = _.contains(promotion.barcodes, cartItem.getBarcode());
    if(hasPromotion && promotion.type === 'BUY_TWO_GET_ONE_FREE'){
      cartItem.promotionCount = Math.floor(cartItem.count / 3);
      cartItem.promotionPrice = cartItem.promotionCount * cartItem.getPrice();
    }
  });
};

PromotionCalculate.calculateCartItems = function(cartItems, promotions) {
  _.forEach(cartItems, function(cartItem) {
    PromotionCalculate.calculatePromotionCount(cartItem, promotions);
  });
};
