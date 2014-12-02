//TODO: Please write code in this file.
function printInventory(inputs){
  
  var save = 0;
  var myArray = [];
  var expectText = '***<没钱赚商店>购物清单***\n';

  for(var i = 0; i < inputs.length; i++){
    var b = true;
    if(inputs[i].split("-").length > 1){
      var arr = inputs[i].split("-");
      //console.log(arr);
      myArray[myArray.length] = { barcode : arr[0], num : arr[1]};
      b = false;
      continue;
    }
    for(var j = 0; j < myArray.length; j++){
      if(inputs[i] === myArray[j].barcode){
        myArray[j].num++;
        b = false;
      }
    }
    if(b){
      myArray[myArray.length] = { barcode : inputs[i], num : 1};
    }
  }


for(var i = 0; i < myArray.length; i++){
    for(var j = 0; j < loadAllItems().length; j++){
      if(myArray[i].barcode === loadAllItems()[j].barcode){
        myArray[i].price = loadAllItems()[j].price;
        myArray[i].name = loadAllItems()[j].name;
        myArray[i].unit = loadAllItems()[j].unit;
      }
    }
  }

  var tt = '';
  for(var i = 0; i < myArray.length; i++){
    var b = true;
    for(var j = 0; j < loadPromotions()[0].barcodes.length; j++){
      if(myArray[i].barcode === loadPromotions()[0].barcodes[j]){
        b = false;
        myArray[i].sum = myArray[i].price * myArray[i].num - (Math.floor((myArray[i].num)/3)) * myArray[i].price;
        save += (Math.floor((myArray[i].num)/3)) * myArray[i].price;
        tt += '名称：'+ myArray[i].name +'，数量：'+ Math.floor((myArray[i].num)/3) + myArray[i].unit+'\n';
      }
    }
    if(b){
      myArray[i].sum = myArray[i].price * myArray[i].num;
    }
  }

  var expectText =
  '***<没钱赚商店>购物清单***\n' ;
  var allsum = 0;
  for(var i = 0; i < myArray.length; i++){
    expectText += '名称：' + myArray[i].name + '，' + '数量：'+ myArray[i].num + myArray[i].unit + '，单价：' + myArray[i].price.toFixed(2) +'(元)，小计：' + myArray[i].sum.toFixed(2) +'(元)\n';
    allsum += myArray[i].sum;
  }

  expectText += '----------------------\n' +
  '挥泪赠送商品：\n' ;
  expectText += tt;
  expectText += '----------------------\n';
  expectText += '总计：'+ allsum.toFixed(2) +'(元)\n' + '节省：'+ save.toFixed(2) +'(元)\n';
  expectText +=  '**********************';

  /*'名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
  //  '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
  '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  '名称：雪碧，数量：1瓶\n' +
  '名称：方便面，数量：1袋\n' +
  '----------------------\n' +
  '总计：51.00(元)\n' +
  '节省：7.50(元)\n' +
  '**********************';*/
  console.log(expectText);

}
