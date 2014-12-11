var printInventory = require('./main.js').printInventory;
var inputs = [
{
  barcode: 'ITEM000000',
  name: '可口可乐',
  unit: '瓶',
  price: 3.00,
  count: 5
},
{
  barcode: 'ITEM000001',
  name: '雪碧',
  unit: '瓶',
  price: 3.00,
  count: 2
},
{
  barcode: 'ITEM000004',
  name: '电池',
  unit: '个',
  price: 2.00,
  count: 1
}
];

printInventory(inputs);
