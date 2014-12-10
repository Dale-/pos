function Item(barcode, name, unit, price) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price || 0.00;
}

Item.prototype.getBarcode = function() {
  return this.barcode;
};

Item.prototype.getName = function() {
  return this.name;
};

Item.prototype.getUnit = function() {
  return this.unit;
};

Item.prototype.getPrice = function() {
  return this.price;
};
