function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.prototype.getType = function() {
  return this.type;
};

Promotion.prototype.setType = function(type) {
  this.type = type;
};

Promotion.prototype.getBarcodes = function() {
  return this.barcodes;
};

Promotion.prototype.setBarcodes = function(barcodes) {
  this.barcodes = barcodes;
};

Promotion.isPromotionBarcode = function(barcode, promotions) {
  var isPromotionBarcode ;
  _.forEach(promotions, function(promotion){
    if(promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      isPromotionBarcode = _.contains(promotion.barcodes, barcode);
    }
  });
  return isPromotionBarcode;
};
