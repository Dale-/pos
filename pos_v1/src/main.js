function printInventory(tags){
  var cartItems = getCartItems(tags);
  var inventoryText = getInventoryText(cartItems);
  console.log(inventoryText);
}

function getCartItems(tags){
  var cartItems = [];

  for(var i = 0; i < tags.length; i++){
    var splitedArray = tags[i].split('-');
    barcode = splitedArray[0];
    count = 1;
    if(splitedArray[1]){
      count = parseFloat(splitedArray[1]);
    }

    var cartItem = findCartItems(barcode, cartItems);
    if(cartItem){
      cartItem.count += count;
      continue;
    }

    var newItem = findAllItems(barcode, loadAllItems());
    cartItems.push({ item: newItem , count: count});
  }
  return cartItems;
}

function findCartItems(barcode, cartItems){
  var cartItem;
  for(var i = 0; i < cartItems.length; i++){
    if(barcode === cartItems[i].item.barcode){
      cartItem = cartItems[i];
    }
  }
  return cartItem;
}

function findAllItems(barcode, allItems){
  var cartItem;
  for(var i = 0; i < allItems.length; i++){
    if(barcode == allItems[i].barcode){
      cartItem = allItems[i]
    } ;
  }
  return cartItem;
}

function getInventoryText(cartItems){
  var inventoryText = '***<没钱赚商店>购物清单***\n';
  var promotionText = '';
  var summaryText = '';
  var saveMoney = 0;
  var totalMoney = 0;

  for(var i = 0; i < cartItems.length; i++){

    var cartItem = cartItems[i];
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
    }
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
  for(var i = 0; i < promotions.length; i++){
    if(promotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
      isPromotionBarcode = containsBarcode(barcode, promotions[i].barcodes);
    }
  }
  return isPromotionBarcode;
}

function containsBarcode (barcode, barcodes){
  for(var j = 0; j < barcodes.length; j++){
    if (barcode == barcodes[j]) { return true; }
  }
  return false;
}
