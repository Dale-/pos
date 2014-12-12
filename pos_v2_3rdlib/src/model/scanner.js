function Scanner(){
}

Scanner.prototype.scan = function(tag) {
  var splitedArray = tag.split('-');
  var barcode = splitedArray[0];
  var count = 1;

  var hasCount = !!splitedArray[1];
  if(hasCount) {
    count = parseFloat(splitedArray[1]);
  }

  var item = _.find(Item.all(), { barcode : barcode });
  var cartItem = new CartItem(item, count);
  return cartItem;
};
