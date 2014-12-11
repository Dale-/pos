function Cart() {
   this.cartItems = [];
}

Cart.pushCartItem = function(barcode , count, cartItems) {
  var newItem = _.find(loadAllItems(), { barcode: barcode});
  var isPromotion = Promotion.isPromotionBarcode(barcode);
  cartItems.push(new CartItem( newItem , count ,isPromotion));
};

Cart.getCartItemsPayCount = function(cartItems) {
  _.forEach(cartItems,function(cartItem){
    var payCount = cartItem.getCount();
    if(cartItem.getIsPromotion()){
      payCount = payCount - Math.floor(payCount/3) ;
    }
    cartItem.setPayCount(payCount);
  });
};

Cart.prototype.getCartItems = function(tags) {
  var cartItems = this.cartItems;
  _.forEach(tags, function (tag) {
    var splitedArray = tag.split('-');
    barcode = splitedArray[0];
    count = 1;
    if(splitedArray[1]) {
      count = parseFloat(splitedArray[1]);
    }

    var cartItem = _.find(cartItems, function(cartItem) {
      return barcode === cartItem.getItem().getBarcode();
    });
    if(cartItem) {
      cartItem.setCount( cartItem.getCount() + count );
    }else {
      Cart.pushCartItem(barcode, count, cartItems);
    }
  });

  Cart.getCartItemsPayCount(cartItems);
  return cartItems;
};
