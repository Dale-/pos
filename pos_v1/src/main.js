function printInventory(inputs){
  var numInfo = infoNum(inputs);
  var myArray = addProperty(numInfo);
  setString(myArray);
}

function infoNum(inputs){
  var myArray = [];

  for(var i = 0; i < inputs.length; i++){

    var b = true;

    if(inputs[i].split("-").length > 1){
      var arr = inputs[i].split("-");
      myArray[myArray.length] = { barcode : arr[0] , num : arr[1] };
      continue;
    }

    for(var j = 0; j < myArray.length; j++){
      if(inputs[i] === myArray[j].barcode){
        myArray[j].num++;
        b = false;
      }
    }

    if(b){
      myArray[myArray.length] = { barcode : inputs[i] , num : 1 };
    }
  }

  return myArray;
}

function addProperty(myArray){

  for(var i = 0; i < myArray.length; i++){

    for(var j = 0; j < loadAllItems().length; j++){

      if(myArray[i].barcode === loadAllItems()[j].barcode){
        myArray[i].price = loadAllItems()[j].price;
        myArray[i].name = loadAllItems()[j].name;
        myArray[i].unit = loadAllItems()[j].unit;
        break;
      }
    }
  }

  return myArray;
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
