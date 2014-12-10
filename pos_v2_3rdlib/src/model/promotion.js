function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.prototype.getType = function() {
  return this.type;
};

Promotion.prototype.getBarcodes = function() {
  return this.barcodes;
};

Promotion.isPromotionBarcode = function(barcode) {
  var isPromotionBarcode ;
  var promotions = loadPromotions();

  _.forEach(promotions, function(promotion){
    if(promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      isPromotionBarcode = _.contains(promotion.barcodes, barcode);
    }
  });
  
  return isPromotionBarcode;
};
