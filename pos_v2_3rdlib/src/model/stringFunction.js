function StringFunction(content) {
  this.content = content;
}

StringFunction.getInventoryText = function (cartItems, dataText) {
  var inventoryText = '***<没钱赚商店>购物清单***\n' + dataText +
                      '----------------------\n';
  var promotionText = '';
  var summaryText = '';
  var saveMoney = 0;
  var totalAccount = 0;

  _.forEach(cartItems, function(carItem) {
    var count = carItem.count;
    var item = carItem.item;
    var itemPrice = item.price;
    var itemUnit = item.unit;
    var itemName = item.name;
    var promotionNum = Math.floor(count / 3);
    var isPromotionBarcode = Promotion.isPromotionBarcode
    (item.barcode);

    if(isPromotionBarcode) {
      promotionText += StringFunction.getPromotionText(itemName,
        promotionNum, itemUnit);
        saveMoney += promotionNum * itemPrice;
        count = count - promotionNum;
      }
      inventoryText += StringFunction.getPartOfInventoryText(itemName,
        carItem.count,itemUnit, item.price,count * item.price);
        totalAccount += count * itemPrice;
      });

      summaryText = StringFunction.getSummaryText(totalAccount, saveMoney);
      inventoryText = StringFunction.joinString(inventoryText, promotionText, summaryText);
      return inventoryText;
};

StringFunction.directJoinString = function (string1, string2, string3) {
  return string1 + string2 + string3;
};
//
// StringFunction.getInventoryText = function (dataText) {
//   return '***<没钱赚商店>购物清单***\n' + dataText + '----------------------\n';
// };

StringFunction.getPartOfInventoryText = function (name, count, unit, price, subTotal) {
  return ('名称：' + name + '，数量：' + count + unit + '，单价：' +
  price.toFixed(2) + '(元)，小计：' + subTotal.toFixed(2) + '(元)\n');
};

StringFunction.joinString = function (inventoryText, promotionText, summaryText) {
  return inventoryText + '----------------------\n' +
  '挥泪赠送商品：\n' + promotionText +
  '----------------------\n' + summaryText +
  '**********************';
};

StringFunction.getSummaryText = function (totalAccount, saveMoney) {
  return '总计：' + totalAccount.toFixed(2) + '(元)\n' +
  '节省：' + saveMoney.toFixed(2) + '(元)\n';
};

StringFunction.getPromotionText = function (itemName, promotionNum, itemUnit) {
  return '名称：' + itemName + '，数量：' +
  promotionNum + itemUnit +'\n';
};
