jest.dontMock('lodash');
jest.dontMock('../../../../src/model/item');
jest.dontMock('../../../../src/model/cart-item');
jest.dontMock('../../../../src/model/promotion/promotion');
jest.dontMock('../../../../src/model/promotion/discount/brand');
jest.dontMock('../../../../src/model/promotion/discount/discount');



describe('Brand', function() {

    var Item;
    var brand;
    var Brand;
    var CartItem;
    var cartItems;
    var promotion;

    beforeEach(function() {
        Item = require('../../../../src/model/item');
        CartItem = require('../../../../src/model/cart-item');
        Brand = require('../../../../src/model/promotion/discount/brand');
        cartItems = [new CartItem(Item.all()[0],20), new CartItem(Item.all()[1],25),
                     new CartItem(Item.all()[2],30), new CartItem(Item.all()[3],15),
                     new CartItem(Item.all()[5],20), new CartItem(Item.all()[6],20)];

        brand = new Brand(0.9, cartItems, '可口可乐');
    });

    describe('#getBrandCartItems', function() {
        it('should return object of brandCartItems', function() {
            var result = brand.getBrandCartItems();
            expect(result.length).toBe(2);
            expect(result[0].getBrand()).toBe('可口可乐');
        });
    });

    describe('#getTotalMoney', function() {
        it('should return totalMoney of cartItems', function() {
            var result = brand.getTotalMoney(brand.getBrandCartItems());
            expect(result).toBe(160);
        });
    });

    describe('#getBePromotionMoney', function() {
        it('should return be assignment of bePromotionMoney', function() {
            var result = brand.getBePromotionMoney(brand.getTotalMoney());
            expect(result).toBe(160);
        });
    });

    describe('#buildPromotionInfo', function() {
        it('should return one string of promotion information', function() {
            var result = brand.buildPromotionInfo();
            expect(result).toBe('名称：可口可乐品牌打折，金额：16.00元\n');
        });
    });

});
