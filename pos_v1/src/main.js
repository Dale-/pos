function printInventory(inputs){
  var cartEntries = getCartEntries(inputs);
  addProperty(cartEntries);
  var text = getInventoryText(cartEntries);
  console.log(text);
}

function getCartEntries(inputs){
  var cartEntries = [];

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
      cartEntries.push({ barcode: barcode , num: number });
    }

  }

  return cartEntries;
}

function findCartEntry(cartEntries, barcode) {
  var cartEntry;

  for(var x = 0; x < cartEntries.length; x++) {
    if (cartEntries[x].barcode === barcode) {
      cartEntry = cartEntries[x];
      break;
    }
  }

  return cartEntry;
}

function addProperty(cartEntries){

  var allItems = loadAllItems();

  for(var i = 0; i < cartEntries.length; i++){

    var cartEntry = cartEntries[i];

    var item = findItem(allItems, cartEntry.barcode);
    if (item) {
      cartEntry.price = item.price;
      cartEntry.name = item.name;
      cartEntry.unit = item.unit;
    }
  }
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
  var save = 0;
  var expectText = '***<没钱赚商店>购物清单***\n';
  var freeInfo = '';
  var allSum = 0;

  for(var i = 0; i < cartEntries.length; i++){

    var b = true;

    var cartEntry = cartEntries[i];

    for(var j = 0; j < loadPromotions()[0].barcodes.length; j++){
      if(cartEntry.barcode === loadPromotions()[0].barcodes[j]){
        b = false;
        cartEntry.sum = cartEntry.price * cartEntry.num - (Math.floor((cartEntry.num)/3)) * cartEntry.price;
        save += (Math.floor((cartEntry.num)/3)) * cartEntry.price;
        freeInfo += '名称：'+ cartEntry.name +'，数量：'+ Math.floor((cartEntry.num)/3) + cartEntry.unit + '\n';
        break;
      }
    }

    if(b){
      cartEntry.sum = cartEntry.price * cartEntry.num;
    }

    expectText += '名称：' + cartEntry.name + '，' + '数量：'+ cartEntry.num + cartEntry.unit + '，单价：' + cartEntry.price.toFixed(2) +'(元)，小计：' + cartEntry.sum.toFixed(2) +'(元)\n';

    allSum += cartEntry.sum;
  }

  expectText += '----------------------\n' + '挥泪赠送商品：\n' + freeInfo + '----------------------\n' + '总计：'+ allSum.toFixed(2) +'(元)\n' + '节省：'+ save.toFixed(2) +'(元)\n' + '**********************';

  return expectText;
}
