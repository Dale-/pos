jest.dontMock('lodash');
jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');
jest.dontMock('../../src/model/promotion/up-to-top-reduce');

describe('UpToTopReduce', function() {

    var Item;
    var CartItem;
    var UpToTopReduce;

    beforeEach(function() {
        Item = require('../../src/model/item');
        CartItem = require('../../src/model/cart-item');
        UpToTopReduce = require('../../src/model/promotion/up-to-top-reduce');
    });

    describe('.calculateSavingMoney', function() {
        it('should return number of saving money', function() {
            var cartItems = [new CartItem(Item.all()[0], 40), new CartItem(Item.all()[1], 20)];
            var result = UpToTopReduce.calculateSavingMoney(cartItems, 100, 3);
            expect(result).toBe(6);
        });
    });

    describe('.brand', function() {
        it('should return string of brand discount information', function() {
            var cartItems = [new CartItem(Item.all()[0], 40), new CartItem(Item.all()[1], 20)];
            var result = UpToTopReduce.brand(cartItems, 100, 2, '可口可乐');
            expect(result).toBe('名称：可口可乐品牌满100减2，金额：4.00元\n');
        });
    });

    describe('.wholeSupermarket', function() {
        it('should return string of wholeSupermarket discount information', function() {
            var cartItems = [new CartItem(Item.all()[0], 40), new CartItem(Item.all()[1], 20)];
            var result = UpToTopReduce.wholeSupermarket(cartItems, 100, 3);
            expect(result).toBe('名称：满100减3，金额：6.00元\n');
        });
    });
});