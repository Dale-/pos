function printInventory(inputs){
  var cartEntries = getCartEntries(inputs);
  var myArray = addProperty(cartEntries);
  setString(myArray);
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

    for(var j = 0; j < allItems.length; j++){

      if(cartEntries[i].barcode === allItems[j].barcode){
        cartEntries[i].price = allItems[j].price;
        cartEntries[i].name = allItems[j].name;
        cartEntries[i].unit = allItems[j].unit;
        break;
      }
    }
  }

  return cartEntries;
}

function setString(myArray){
  var save = 0;
  var expectText = '***<没钱赚商店>购物清单***\n';
  var freeInfo = '';
  var allSum = 0;

  for(var i = 0; i < myArray.length; i++){

    var b = true;

    for(var j = 0; j < loadPromotions()[0].barcodes.length; j++){
      if(myArray[i].barcode === loadPromotions()[0].barcodes[j]){
        b = false;
        myArray[i].sum = myArray[i].price * myArray[i].num - (Math.floor((myArray[i].num)/3)) * myArray[i].price;
        save += (Math.floor((myArray[i].num)/3)) * myArray[i].price;
        freeInfo += '名称：'+ myArray[i].name +'，数量：'+ Math.floor((myArray[i].num)/3) + myArray[i].unit + '\n';
        break;
      }
    }

    if(b){
      myArray[i].sum = myArray[i].price * myArray[i].num;
    }

    expectText += '名称：' + myArray[i].name + '，' + '数量：'+ myArray[i].num + myArray[i].unit + '，单价：' + myArray[i].price.toFixed(2) +'(元)，小计：' + myArray[i].sum.toFixed(2) +'(元)\n';

    allSum += myArray[i].sum;
  }

  expectText += '----------------------\n' + '挥泪赠送商品：\n' + freeInfo + '----------------------\n' + '总计：'+ allSum.toFixed(2) +'(元)\n' + '节省：'+ save.toFixed(2) +'(元)\n' + '**********************';

  console.log(expectText);
}
