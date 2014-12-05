function printInventory(tags){
  var cartItems = getCartItems(tags);
  var inventoryText = getInventoryText(cartItems);
  console.log(inventoryText);
}

function getCartItems(tags){
  var cartItems = [];
  var allItems = loadAllItems();

  _.forEach(tags, function(tag){
    var splitedArray = tag.split('-');
    barcode = splitedArray[0];
    count = 1;
    if(splitedArray[1]){
      count = parseFloat(splitedArray[1]);
    }

    var cartItem = _.find(cartItems, function(cartItem){
      return barcode === cartItem.item.barcode;
    });

    if(cartItem){
      cartItem.count += count;
    }else{
      var newItem = _.find(allItems, { barcode: barcode});
      cartItems.push({ item: newItem , count: count});
    }
});
  return cartItems;
}

function getInventoryText(cartItems){
  var inventoryText = '***<没钱赚商店>购物清单***\n';
  var promotionText = '';
  var summaryText = '';
  var saveMoney = 0;
  var totalMoney = 0;

  _.forEach(cartItems, function(carItem){
    var cartItem = carItem;
    var count = cartItem.count;
    var item = cartItem.item;
    var itemPrice = item.price;
    var itemUnit = item.unit;
    var itemName = item.name;

    if(isPromotionBarcode(item.barcode, loadPromotions())){
      promotionNum = Math.floor(count / 3);
      promotionText += getPromotionText(itemName, promotionNum, itemUnit);
      saveMoney += promotionNum * itemPrice;
      count = count - promotionNum;
    }
    inventoryText += '名称：' + itemName + '，数量：' +
                     cartItem.count + itemUnit + '，单价：' +
                     item.price.toFixed(2) + '(元)，小计：' +
                     (count * item.price).toFixed(2) + '(元)\n';
    totalMoney += count * itemPrice;
  });

  summaryText = getSummaryText(totalMoney, saveMoney);
  inventoryText = joinString(inventoryText, promotionText, summaryText);
  return inventoryText;
}

function getPromotionText(itemName, promotionNum, itemUnit){
  var promotionText;
  promotionText = '名称：' + itemName + '，数量：' +promotionNum +
                   itemUnit +'\n';
  return promotionText;
}

function getSummaryText(totalMoney, saveMoney){
  var summaryText;
  summaryText = '总计：' + totalMoney.toFixed(2) + '(元)\n' +
                '节省：' + saveMoney.toFixed(2) + '(元)\n';
  return summaryText;
}

function joinString(inventoryText, promotionText, summaryText){
  inventoryText = inventoryText + '----------------------\n' +
                  '挥泪赠送商品：\n' + promotionText +
                  '----------------------\n' + summaryText +
                  '**********************';
  return inventoryText;
}

function isPromotionBarcode(barcode, promotions){
  var isPromotionBarcode ;
  _.forEach(promotions, function(promotion){
    if(promotion.type === 'BUY_TWO_GET_ONE_FREE'){
      isPromotionBarcode = containsBarcode(barcode, promotion.barcodes);
    }
  });
  return isPromotionBarcode;
}

function containsBarcode (barcode, barcodes){
  var isContain = false;
  _.forEach(barcodes, function(newBarcode){
    if (barcode == newBarcode)
      isContain = true;
  });
  return isContain;
}
