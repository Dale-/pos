function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.isPromotionBarcode = function(barcode) {
  var isPromotionBarcode = false;
  var promotions = loadPromotions();

  _.forEach(promotions, function(promotion) {
    if(promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      isPromotionBarcode = _.contains(promotion.barcodes, barcode);
    }
  });

  return isPromotionBarcode;
};
