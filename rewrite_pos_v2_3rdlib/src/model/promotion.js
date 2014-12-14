function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.all = function() {
  return loadPromotions();
};

Promotion.getPromotionType = function(barcode) {
  var promotionType = '';

  _.forEach(Promotion.all(), function(promotion) {
    if(_.contains(promotion.barcodes, barcode)){
      promotionType = promotion.type;
    }
  });
  return promotionType;
};
