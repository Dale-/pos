function Item(barcode, name, unit, price) {
  this.barcode = barcode,
  this.name = name,
  this.unit = unit,
  this.price = price || 0;
}

Item.all = function() {
  return [
  new Item('ITEM000000', '可口可乐', '瓶', 3.00),
  new Item('ITEM000001', '雪碧', '瓶', 3.00),
  new Item('ITEM000002', '苹果', '斤', 5.50),
  new Item('ITEM000003', '荔枝', '斤', 15.00),
  new Item('ITEM000004', '电池', '个', 2.00),
  new Item('ITEM000005', '方便面', '袋', 4.50)
  ];
};

Item.getItems = function(barcodes) {
  var allItems = this.all();
  return _.map(barcodes, function(barcode) {
    return _.find(allItems, { barcode: barcode });
  });
};
