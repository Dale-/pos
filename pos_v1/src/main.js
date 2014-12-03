function printInventory(tags){
  var carItems = getCarItems(tags);
  var inventoryText = getInventoryText(carItems);
  console.log(inventoryText);
}

function getCarItems(tags){
  var carItems = [];

  for(var i = 0; i < tags.length; i++){

    var splitedArray = tags[i].split('-');
    var barcode = splitedArray[0];
    var count = 1;
    if(splitedArray[1]){
      count = parseFloat(splitedArray[1]);
    }

    var carItem = findCarItems(barcode,carItems);
    if(carItem){
      carItem.count += count;
    }else{
      var item = findLoadAllItems(barcode, loadAllItems());
      carItems.push({ item: item , count: count });
    }
  }

  return carItems;
}

function findCarItems(barcode,carItems){
  var item;
  for(var i = 0; i < carItems.length; i++){
    if(barcode === carItems[i].item.barcode){
      item = carItems[i];
    }
  }
  return item;
}

function findLoadAllItems(barcode, loadAllItems){
  var carItem;
  for(var i = 0; i < loadAllItems.length; i++){
    if(barcode === loadAllItems[i].barcode){
      carItem = loadAllItems[i];
    }
  }
  return carItem;
}

function getInventoryText(carItems){
  var text = '***<没钱赚商店>购物清单***\n';
  var inventoryText = '';
  var promotionText = '挥泪赠送商品：\n';
  var summaryText='';
  var saveMoney = 0;
  var summaryMoney = 0;

  for(var i = 0; i < carItems.length; i++){

    var barcode = carItems[i].item.barcode;
    var num = carItems[i].count;
    var item = carItems[i].item;

    if(isPromotion(barcode, loadPromotions())){
      promotionText += '名称：' + item.name + '，数量：' +
                     Math.floor(num / 3) + item.unit + '\n';
      saveMoney += Math.floor(num / 3) * item.price;
      num = num - Math.floor(num / 3);
    }

    inventoryText += '名称：' + item.name + '，数量：' + carItems[i].count +
                     item.unit + '，单价：' + item.price.toFixed(2) +
                     '(元)，小计：' + (num * item.price).toFixed(2) + '(元)\n';

    summaryMoney += num * item.price;
  }

  summaryText += '总计：' + summaryMoney.toFixed(2) + '(元)\n' +
                 '节省：' + saveMoney.toFixed(2) + '(元)\n';


  text = join(inventoryText, promotionText, summaryText, text);

  return text;
}

function join(inventoryText, promotionText, summaryText, text){
  text += inventoryText + '----------------------\n' +
          promotionText + '----------------------\n' +
          summaryText + '**********************';
  return text;
}

function isPromotion(barcode, Promotions){
  var isPromoted = false;
  for(var i = 0; i < Promotions.length; i++){
    if(Promotions[i].type === 'BUY_TWO_GET_ONE_FREE'){
      for(var j = 0; j < Promotions[i].barcodes.length; j++){
        if(barcode === Promotions[i].barcodes[j]){
          isPromoted = true;
        }
      }
    }
  }
  return isPromoted;
}
