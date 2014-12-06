function printInventory(tags) {
  var cartItems = getCartItems(tags);
  var inventoryText = getInventoryText(cartItems);
  console.log(inventoryText);
}

function getCartItems(tags) {
  var cartItems = [];
  var allItems = loadAllItems();

  _.forEach(tags, function(tag) {
    var splitedArray = tag.split('-');
    barcode = splitedArray[0];
    count = 1;
    if(splitedArray[1]) {
      count = parseFloat(splitedArray[1]);
    }

    var cartItem = _.find(cartItems, function(cartItem) {
      return barcode === cartItem.item.barcode;
    });

    if(cartItem) {
      cartItem.count += count;
    }else {
      var newItem = _.find(allItems, { barcode: barcode});
      cartItems.push({ item: newItem , count: count});
    }
});
  return cartItems;
}

function getInventoryText(cartItems) {
  var inventoryText = '***<没钱赚商店>购物清单***\n';
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

    if(isPromotionBarcode(item.barcode, loadPromotions())) {
      promotionText += getPromotionText(itemName,
                       Math.floor(count / 3), itemUnit);
      saveMoney += promotionNum * itemPrice;
      count = count - promotionNum;
    }
    inventoryText += getPartOfInventoryText(itemName, carItem.count,
                     itemUnit,item.price,count * item.price);
    totalAccount += count * itemPrice;
  });

  summaryText = getSummaryText(totalAccount, saveMoney);
  inventoryText = joinString(inventoryText, promotionText, summaryText);
  return inventoryText;
}

function getPartOfInventoryText(name, count, unit, price, subTotal) {
  return ('名称：' + name + '，数量：' + count + unit + '，单价：' +
          price.toFixed(2) + '(元)，小计：' + subTotal.toFixed(2) + '(元)\n');
}

function getPromotionText(itemName, promotionNum, itemUnit) {
  return '名称：' + itemName + '，数量：' +
         promotionNum + itemUnit +'\n';
}

function getSummaryText(totalAccount, saveMoney) {
  return '总计：' + totalAccount.toFixed(2) + '(元)\n' +
         '节省：' + saveMoney.toFixed(2) + '(元)\n';;
}

function joinString(inventoryText, promotionText, summaryText) {
  return inventoryText + '----------------------\n' +
         '挥泪赠送商品：\n' + promotionText +
         '----------------------\n' + summaryText +
         '**********************';
}

function isPromotionBarcode(barcode, promotions) {
  var isPromotionBarcode ;
  _.forEach(promotions, function(promotion){
    if(promotion.type === 'BUY_TWO_GET_ONE_FREE') {
      isPromotionBarcode = _.contains(promotion.barcodes, barcode);
    }
  });
  return isPromotionBarcode;
}
