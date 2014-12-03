function printInventory(tags){
  var cartItems = getCartItems(tags);
  var InventoryText = getInventoryText(cartItems);
  console.log(InventoryText);
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
  var inventoryText = '';
  var promotionText = '';
  var summaryText = '';
  var saveMoney = 0;
  var totalMoney = 0;

  inventoryText = '***<没钱赚商店>购物清单***\n';

  for(var i = 0; i < cartItems.length; i++){

    var num = cartItems[i].count;
    var cartItem = cartItems[i].item;

    if(isPromotion(cartItems[i].item.barcode, loadPromotions())){
      promotionNum = Math.floor(num / 3);
      promotionText += '名称：' + cartItem.name + '，数量：' +
                       promotionNum + cartItem.unit +'\n';
      saveMoney += promotionNum * cartItem.price;
      num = num - promotionNum;
    }

    inventoryText += '名称：' + cartItem.name + '，数量：' +
                     cartItems[i].count + cartItem.unit + '，单价：' +
                     (cartItem.price).toFixed(2) + '(元)，小计：' +
                     (num * cartItem.price).toFixed(2) + '(元)\n';

    totalMoney += num * cartItem.price;
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
  var isPromotion = false;
  for(var i = 0; i < loadPromotions.length; i++){
    if(loadPromotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
      for(var j = 0; j < loadPromotions[i].barcodes.length; j++){
        if(barcode == loadPromotions[i].barcodes[j]){
          isPromotion = true;
        }
      }
    }
  }
  return isPromotion;
}
