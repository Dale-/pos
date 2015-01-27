function Scanner() {
}

Scanner.prototype.getTagCount = function(tagCount) {
  var count = 1;
  var hasTagCount = !!tagCount;
  if(hasTagCount) {
    count = parseFloat(tagCount);
  }
  return count;
};

Scanner.prototype.scan = function(tag) {
  var cartItem;
  var array = tag.split('-');
  var barcode = array[0];
  var tagCount = this.getTagCount(array[1]);

  var item = _.find(Item.all(), {barcode : barcode});
  return new CartItem(item, tagCount);
};
