// jest.dontMock('../src/model/item');
// jest.dontMock('../src/model/cart-item');
//
// describe('CartItem', function() {
//
//     var Item;
//     var CartItem;
//     var cartItem;
//
//     beforeEach(function() {
//         Item = require('../src/model/item');
//         CartItem = require('../src/model/cart-item');
//         cartItem = new CartItem(Item.all()[0], 20);
//     });
//
//     describe('#getPrice', function() {
//         it('should return correct price', function() {
//             var result = cartItem.getPrice();
//             expect(result).toBe(3.00);
//         });
//     });
//
//     describe('#getBrand', function() {
//         it('should return correct brand', function() {
//             var result = cartItem.getBrand();
//             expect(result).toBe('可口可乐');
//         });
//     });
//
//     describe('#getName', function() {
//         it('should return correct name', function() {
//             var result = cartItem.getName();
//             expect(result).toBe('可口可乐350ml');
//         });
//     });
//
//     describe('#getUnit', function() {
//         it('should return correct unit', function() {
//             var result = cartItem.getUnit();
//             expect(result).toBe('瓶');
//         });
//     });
//
//     describe('#getSubTotal', function() {
//         it('should return float of correct subTotal', function() {
//             var result = cartItem.getSubTotal();
//             expect(result).toBe(60);
//         });
//     });
//
//     describe('#toListText', function() {
//         it('should return correct string of listText', function() {
//             var result = cartItem.toListText();
//             expect(result).toBe('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n');
//         });
//     });
// });
