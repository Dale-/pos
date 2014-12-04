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

    cartItem = findCartItems(barcode, cartItems);
    if(cartItem){
      cartItem.count += count;
    }else{
      var newItem = findAllItems(barcode, loadAllItems());
      cartItems.push({ item: newItem , count: count});
    }
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

    var count = cartItems[i].count;
    var cartItem = cartItems[i].item;
    var itemPrice = cartItem.price;
    var itemUnit = cartItem.unit;
    var itemName = cartItem.name;

    if(isPromotion(cartItem.barcode, loadPromotions())){
      promotionNum = Math.floor(count / 3);
      promotionText += '名称：' + itemName + '，数量：' +
                       promotionNum + itemUnit +'\n';
      saveMoney += promotionNum * itemPrice;
      count = count - promotionNum;
    }

    inventoryText += '名称：' + itemName + '，数量：' +
                     cartItems[i].count + itemUnit + '，单价：' +
                     cartItem.price.toFixed(2) + '(元)，小计：' +
                     (count * cartItem.price).toFixed(2) + '(元)\n';

    totalMoney += count * itemPrice;
    }

  summaryText = '总计：' + totalMoney.toFixed(2) + '(元)\n' +
                  '节省：' + saveMoney.toFixed(2) + '(元)\n';

  inventoryText = connectString(inventoryText, promotionText, summaryText);

  return inventoryText;
}

function connectString(inventoryText, promotionText, summaryText){
  inventoryText = inventoryText + '----------------------\n' +
                  '挥泪赠送商品：\n' + promotionText +
                  '----------------------\n' + summaryText +
                  '**********************';
  return inventoryText;
}

function isPromotion(barcode, loadPromotions){
  var isPromotion ;
  for(var i = 0; i < loadPromotions.length; i++){
    if(loadPromotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
      isPromotion = isEqualBarcode(barcode, loadPromotions[i].barcodes);
    }
  }
  return isPromotion;
}

function isEqualBarcode (barcode, barcodes){
  var isEqualBarcode = false;
  for(var j = 0; j < barcodes.length; j++){
    if(barcode == barcodes[j]){
      isEqualBarcode = true;
    }
  }
  return isEqualBarcode;
}
