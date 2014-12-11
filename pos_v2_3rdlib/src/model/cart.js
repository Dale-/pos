function Cart() {
   this.cartItems = [];
}

// Cart.pushCartItem = function(barcode , count, cartItems) {
//   var newItem = _.find(loadAllItems(), { barcode: barcode});
//   var isPromotion = Promotion.isPromotionBarcode(barcode);
//   cartItems.push(new CartItem( newItem , count ,isPromotion));
// };
//
// Cart.getCartItemsPayCount = function(cartItems) {
//   _.forEach(cartItems,function(cartItem){
//     var payCount = cartItem.count;
//     if(cartItem.isPromotion){
//       payCount = payCount - Math.floor(payCount/3) ;
//     }
//     cartItem.payCount = payCount;
//   });
// };
//
// Cart.prototype.getCartItems = function(tags) {
//   var cartItems = this.cartItems;
//   _.forEach(tags, function (tag) {
//     var splitedArray = tag.split('-');
//     barcode = splitedArray[0];
//     count = 1;
//     if(splitedArray[1]) {
//       count = parseFloat(splitedArray[1]);
//     }
//
//     var cartItem = _.find(cartItems, function(cartItem) {
//       return barcode === cartItem.item.barcode;
//     });
//     if(cartItem) {
//       cartItem.count += count ;
//     }else {
//       Cart.pushCartItem(barcode, count, cartItems);
//     }
//   });
//
//   Cart.getCartItemsPayCount(cartItems);
//   return cartItems;
// };

Cart.prototype.addCartItem = function(cart_item) {
  var cartItems = this.cartItems;
  var newCartItem = _.find(cartItems, function(cartItem) {
    return  cart_item.item.barcode == cartItem.item.barcode;
  });
  if(newCartItem) {
    newCartItem.count += count ;
  }else {
    cart_item.isPromotion =
      Promotion.isPromotionBarcode(cart_item.item.barcode);
    cartItems.push(cart_item);
  }
};

Cart.prototype.setPayCount = function() {
  var cartItems = this.cartItems;
  _.forEach(cartItems, function(cartItem){
    cartItem.payCount = cartItem.count;
    if(cartItem.isPromotion) {
      cartItem.payCount = cartItem.payCount - Math.floor(cartItem.payCount / 3);
    }
  });
};
