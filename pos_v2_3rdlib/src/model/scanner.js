function Scanner(){

}

Scanner.prototype.scan = function(tag) {
  var splitedArray = tag.split('-');
  barcode = splitedArray[0];
  count = 1;
  if(splitedArray[1]) {
    count = parseFloat(splitedArray[1]);
  }

  var item = _.find(Item.all(), { barcode : barcode });
  var cartItem = new CartItem(item, count);
  return cartItem;
};
