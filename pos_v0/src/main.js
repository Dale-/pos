function printInventory(inputs) {
  var inventoryText = getInventoryText(inputs);
  console.log(inventoryText);
}

function getInventoryText(inputs) {
  var cartItemsText = '***<没钱赚商店>购物清单***\n';
  var totalAccount = 0;

  for(var i = 0; i < inputs.length; i++) {
    cartItemsText += '名称：' + inputs[i].name + '，数量：' + inputs[i].count +
                     inputs[i].unit + '，单价：' + inputs[i].price.toFixed(2) +
                     '(元)，小计：' +
                     (inputs[i].count * inputs[i].price).toFixed(2) + '(元)\n';
    totalAccount += inputs[i].count * inputs[i].price;
  }
  var summaryText = getSummaryText(totalAccount);
  var inventoryText = joinText(cartItemsText, '----------------------\n',
                      summaryText, '**********************');
  return inventoryText;
}

function getSummaryText(totalAccount) {
  var summaryText = '';
  summaryText = '总计：' + totalAccount.toFixed(2) + '(元)\n';
  return summaryText;
}

function joinText(cartItemsText, splitLine, summaryText, endingLine) {
  var inventoryText;
  inventoryText = cartItemsText + splitLine + summaryText + endingLine;
  return inventoryText;
}
