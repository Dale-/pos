function printInventory(inputs) {
  var inventoryText = getInventoryText(inputs);
  console.log(inventoryText);
}

function getInventoryText(inputs) {
  var cartItemsText = '***<没钱赚商店>购物清单***\n';
  var totalAccount = 0;
  var cartItem;

  for(var i = 0; i < inputs.length; i++) {
    cartItem = inputs[i];
    cartItemsText += getCartItemText(cartItem);
    totalAccount += cartItem.count * cartItem.price;
  }
  var summaryText = getSummaryText(totalAccount);
  var inventoryText = joinText(cartItemsText, '----------------------\n',
                      summaryText, '**********************');
  return inventoryText;
}

function getCartItemText(cartItem){
  return '名称：' + cartItem.name + '，数量：' + cartItem.count +
         cartItem.unit + '，单价：' +
         cartItem.price.toFixed(2) +'(元)，小计：' +
         (cartItem.count * cartItem.price).toFixed(2) + '(元)\n';
}

function getSummaryText(totalAccount) {
  return '总计：' + totalAccount.toFixed(2) + '(元)\n';
}

function joinText(cartItemsText, splitLine, summaryText, endingLine) {
  return cartItemsText + splitLine + summaryText + endingLine;
}
