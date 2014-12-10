function CartItem(item, count , payCount , isPromotion) {
  this.item = item;
  this.count = count || 0;
  this.isPromotion = isPromotion;
  this.payCount = payCount;
}

CartItem.prototype.getItem = function() {
  return this.item;
};

CartItem.prototype.setItem = function(item) {
  this.item = item;
};

CartItem.prototype.getCount = function() {
  return this.count;
};

CartItem.prototype.setCount = function(count) {
  this.count = count;
};

CartItem.createCartItem = function(barcode , count) {
  var newItem = _.find(loadAllItems(), { barcode: barcode});
  var isPromotion = Promotion.isPromotionBarcode(barcode);
  var payCount = count;
  if(isPromotion) {
    payCount = Math.floor(count/3);
  }
  var cartItem = new CartItem( newItem , count , payCount ,isPromotion);
  cartItems.push(cartItem);
};

CartItem.getCartItems = function(tags) {
  var cartItems = [] ;

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
      CartItem.createCartItem(barcode, count);
    }
  });
  console.log(cartItems);
  return cartItems;
};
