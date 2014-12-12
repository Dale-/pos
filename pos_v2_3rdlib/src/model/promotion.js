function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.getPromotionType = function(barcode) {
  var promotionType = '';
  var promotions = loadPromotions();

  _.forEach(promotions, function(promotion) {
      if(_.contains(promotion.barcodes, barcode)){
        promotionType = promotion.type;
      }
  });

  return promotionType;
};
