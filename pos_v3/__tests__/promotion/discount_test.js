jest.dontMock('lodash');
jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');
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
            var cartItems = [new CartItem(Item.all()[0], 20), new CartItem(Item.all()[1], 20)];
            var result = Discount.brand(cartItems, 0.9, '可口可乐');
            expect(result).toBe('名称：可口可乐品牌打折，金额：14.00元');
        });
    });
});