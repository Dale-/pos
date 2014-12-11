function CartItem(item, count, isPromotion) {
  this.item = item;
  this.count = count || 0;
  this.isPromotion = isPromotion;
  this.payCount = 0;
}

// CartItem.prototype.CalculatePayCount = function() {
//   this.payCount = this.count;
//   if(this.isPromotion) {
//     this.payCount = Math.floor(this.payCount / 3);
//   }
//   //console.log('------------\n');
//   //return this.payCount;
// };
