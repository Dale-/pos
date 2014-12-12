function Scanner(){
}

Scanner.prototype.getTagCount = function(tagCount) {
  var count = 1;
  var hasCount = !!tagCount;
  
  if(hasCount) {
    count = parseFloat(tagCount);
  }
  return count;
};

Scanner.prototype.scan = function(tag) {
  var splitArray = tag.split('-');
  var barcode = splitArray[0];
  var count = this.getTagCount(splitArray[1]);

  var item = _.find(Item.all(), { barcode : barcode });
  var cartItem = new CartItem(item, count);
  return cartItem;
};
