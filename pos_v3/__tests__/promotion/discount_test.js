jest.dontMock('lodash');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/cartItem');
jest.dontMock('../../src/model/promotion/discount');

describe('Discount', function() {

    var Item;
    var CartItem;
    var Discount;

    beforeEach(function() {
        Item = require('../../src/model/item');
        CartItem = require('../../src/model/cart-item');
        Discount = require('../../src/model/promotion/discount');
    });

    describe('.brand', function() {
        it('should return string of discount information', function() {
            var result = cart.addCartItem({ 'ITEM000000' : 20 });
            expect(result[0].item.name).toBe('可口可乐350ml');
        });
    });
});