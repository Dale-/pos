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
    var cartItems;

    beforeEach(function() {
        Item = require('../src/model/item');
        Strategy = require('../src/model/strategy');
        CartItem = require('../src/model/cart-item');
        cartItems = [
                     new CartItem(Item.all()[0], 20),
                     new CartItem(Item.all()[1], 20),
                     new CartItem(Item.all()[7], 30),
                     new CartItem(Item.all()[5], 12)
        ];
    });

    describe('.calculateBrandPromotion', function() {
        it('should return string of brandPromotion information', function() {
            var result = Strategy.calculateBrandPromotion(cartItems);
            expect(result).toBe('名称：可口可乐品牌打折，金额：14.00元\n');
        });
    });

    describe('.calculateItemPromotion', function() {
        it('should return string of itemPromotion information', function() {
            var result = Strategy.calculateItemPromotion(cartItems);
            expect(result).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n');
        });
    });

    describe('.getNoPromotionCartItems', function() {
        it('should return object of noPromotionCartItems', function() {
            cartItems[0].isPromotion = true;
            var result = Strategy.getNoPromotionCartItems(cartItems);
            expect(result.length).toBe(3);
        });
    });

    describe('.getStrategy1String', function() {
        it('should return string of Strategy1', function() {
            var result = Strategy.getStrategy1String(cartItems);
            expect(result).toBe('名称：可口可乐品牌打折，金额：14.00元\n' +
                                '名称：满100减3，金额：3.00元\n');
        });
    });
});