function CartItem(item, count) {
  this.item = item;
  this.count = count || 0;
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
      var newItem = _.find(loadAllItems(), { barcode: barcode});
      var cartItem = new CartItem( newItem , count);
      cartItems.push(cartItem);
    }

  });
  return cartItems;
};