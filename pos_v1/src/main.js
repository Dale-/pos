function printInventory(inputs){
  var cartEntries = getCartEntries(inputs);
  var inventoryText= getInventoryText(cartEntries);
  console.log(inventoryText);
}

function getCartEntries(inputs){
  var cartEntries = [];

  var allItems = loadAllItems();

  for(var i = 0; i < inputs.length; i++){

    var array = inputs[i].split("-");
    var barcode = array[0];

    var number = 1;
    if (array[1]) {
      number = parseFloat(array[1]);
    }

    var cartEntry = findCartEntry(cartEntries, barcode);
    if (cartEntry) {
      cartEntry.num += number;
    } else {
      var item = findItem(allItems, barcode);
      cartEntries.push({ item: item , num: number });
    }

  }

  return cartEntries;
}

function findCartEntry(cartEntries, barcode) {
  var cartEntry;

  for(var x = 0; x < cartEntries.length; x++) {
    if (cartEntries[x].item.barcode === barcode) {
      cartEntry = cartEntries[x];
      break;
    }
  }

  return cartEntry;
}

function findItem(items, barcode) {
  var item;

  for(var j = 0; j < items.length; j++){
    if(barcode === items[j].barcode){
      var item = items[j];
      break;
    }
  }

  return item;
}

function getInventoryText(cartEntries){
  var saveMoney = 0;
  var inventoryText= '***<没钱赚商店>购物清单***\n';
  var promotionText = '';
  var totalAmount = 0;

  for(var i = 0; i < cartEntries.length; i++){

    var b = true;

    var cartEntry = cartEntries[i];

    var promotionCount = getPromotionCount(cartEntry.num);

    var item = cartEntry.item;

    for(var j = 0; j < loadPromotions()[0].barcodes.length; j++){
      if(item.barcode === loadPromotions()[0].barcodes[j]){
        b = false;
        cartEntry.sum = item.price * cartEntry.num - promotionCount * item.price;
        saveMoney += promotionCount * item.price;
        promotionText += getPromotionLineText(cartEntry, promotionCount);
        break;
      }
    }

    if(b){
      cartEntry.sum = item.price * cartEntry.num;
    }

    inventoryText += getCartEntryLineText(cartEntry);

    totalAmount += cartEntry.sum;
  }

  inventoryText += getSummaryText(promotionText, totalAmount, saveMoney);

  return inventoryText;
}

function getPromotionCount(number) {
  return Math.floor(number / 3);
}

function getPromotionLineText(cartEntry, promotionCount) {
  return '名称：'+ cartEntry.item.name + '，数量：'+ promotionCount + cartEntry.item.unit + '\n';
}

function getCartEntryLineText(cartEntry) {
  return '名称：' + cartEntry.item.name + '，' +
  '数量：'+ cartEntry.num + cartEntry.item.unit +
  '，单价：' + cartEntry.item.price.toFixed(2) +
  '(元)，小计：' + cartEntry.sum.toFixed(2) +'(元)\n';
}

function getSummaryText(promotionText, totalAmount, saveMoney) {
  return '----------------------\n' +
  '挥泪赠送商品：\n' + promotionText +
  '----------------------\n' +
  '总计：'+ totalAmount.toFixed(2) +'(元)\n' +
  '节省：'+ saveMoney.toFixed(2) +'(元)\n' +
  '**********************';
}
