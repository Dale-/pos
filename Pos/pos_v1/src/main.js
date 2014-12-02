//TODO: Please write code in this file.
function printInventory(){

  console.log( Math.floor(7/2));

  inputs = [
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  //  'ITEM000003-2',
  'ITEM000005',
  'ITEM000005',
  'ITEM000005'
  ];

  var myArray = [];
  var expectText = '***<没钱赚商店>购物清单***\n';

  for(var i = 0; i < inputs.length; i++){
    var b = true;
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
      }
    }
  }

  /*for(var i = 0; i < myArray.length; i++){
    var b = true;
    for(var j = 0; j < loadPromotions().barcodes.length; j++){
      if(myArray[i].barcode === loadPromotions().barcodes[j]){
        myArray[i].sum = (Math.floor(myArray[i].num/3))
        b = false;
      }
    }
    myArray[i].sum = myArray[i].price * myArray[i].num;
  }

  console.log(myArray);*/

}
