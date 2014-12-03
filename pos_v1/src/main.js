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

    for(var j = 0; j < loadPromotions()[0].barcodes.length; j++){
      if(cartEntries[i].barcode === loadPromotions()[0].barcodes[j]){
        b = false;
        cartEntries[i].sum = cartEntries[i].price * cartEntries[i].num - (Math.floor((cartEntries[i].num)/3)) * cartEntries[i].price;
        save += (Math.floor((cartEntries[i].num)/3)) * cartEntries[i].price;
        freeInfo += '名称：'+ cartEntries[i].name +'，数量：'+ Math.floor((cartEntries[i].num)/3) + cartEntries[i].unit + '\n';
        break;
      }
    }

    if(b){
      cartEntries[i].sum = cartEntries[i].price * cartEntries[i].num;
    }

    expectText += '名称：' + cartEntries[i].name + '，' + '数量：'+ cartEntries[i].num + cartEntries[i].unit + '，单价：' + cartEntries[i].price.toFixed(2) +'(元)，小计：' + cartEntries[i].sum.toFixed(2) +'(元)\n';

    allSum += cartEntries[i].sum;
  }

  expectText += '----------------------\n' + '挥泪赠送商品：\n' + freeInfo + '----------------------\n' + '总计：'+ allSum.toFixed(2) +'(元)\n' + '节省：'+ save.toFixed(2) +'(元)\n' + '**********************';

  return expectText;
}
