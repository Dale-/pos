function printInventory(tags) {
  var cartItems = CartItem.getCartItems(tags);
  var dataText = DateText.getDataText();
  var inventoryText = StringFunction.getInventoryText(cartItems, dataText);
  console.log(inventoryText);
}
// function getInventoryText(cartItems, dataText) {
//   var inventoryText = StringFunction.getInventoryText(dataText);
//   var promotionText = '';
//   var summaryText = '';
//   var saveMoney = 0;
//   var totalAccount = 0;
//
//   _.forEach(cartItems, function(carItem) {
//     var count = carItem.count;
//     var item = carItem.item;
//     var itemPrice = item.price;
//     var itemUnit = item.unit;
//     var itemName = item.name;
//     var promotionNum = Math.floor(count / 3);
//     var isPromotionBarcode = Promotion.isPromotionBarcode
//                              (item.barcode, loadPromotions());
//
//     if(isPromotionBarcode) {
//       promotionText += StringFunction.getPromotionText(itemName,
//         promotionNum, itemUnit);
//         saveMoney += promotionNum * itemPrice;
//         count = count - promotionNum;
//       }
//       inventoryText += StringFunction.getPartOfInventoryText(itemName,
//                        carItem.count,itemUnit, item.price,count * item.price);
//       totalAccount += count * itemPrice;
//       });
//
//       summaryText = StringFunction.getSummaryText(totalAccount, saveMoney);
//       inventoryText = StringFunction.joinString(inventoryText, promotionText, summaryText);
//       return inventoryText;
// }
