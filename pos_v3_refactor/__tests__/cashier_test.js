// jest.dontMock('lodash');
// jest.dontMock('../src/model/cart');
// jest.dontMock('../src/model/item');
// jest.dontMock('../src/model/cashier');
// jest.dontMock('../src/model/cart-item');
//
//
// describe('Cashier', function() {
//
//     var Cashier;
//
//     beforeEach(function() {
//         Cashier = require('../src/model/cashier');
//     });
//
//     describe('.transfer', function() {
//         it('should return whole cart.cartItems', function() {
//             var collections = [
//                                 { 'ITEM000000' : 20 },
//                                 { 'ITEM000010' : 20 },
//                                 { 'ITEM000005' : 30 },
//                                 { 'ITEM000003' : 12 }
//                              ];
//             var result = Cashier.transfer(collections);
//             expect(result.length).toBe(4);
//         });
//     });
// });
