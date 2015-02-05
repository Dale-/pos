jest.dontMock('lodash');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/strategy');
jest.dontMock('../src/model/cart-item');
jest.dontMock('../src/model/promotion/discount');
jest.dontMock('../src/model/promotion/promotion');
jest.dontMock('../src/model/promotion/up-to-top-reduce');

describe('Strategy', function() {

    var Item;
    var CartItem;
    var Strategy;

    beforeEach(function() {
        Item = require('../src/model/item');
        Strategy = require('../src/model/strategy');
        CartItem = require('../src/model/cart-item');
    });

    describe('.calculateBrandPromotion', function() {
        it('should return string of brandPromotion information', function() {
            var cartItems = [new CartItem(Item.all()[0], 20), new CartItem(Item.all()[1], 20)];
            var result = Strategy.calculateBrandPromotion(cartItems);
            expect(result).toBe('名称：可口可乐品牌打折，金额：14.00元\n');
        });
    });
});