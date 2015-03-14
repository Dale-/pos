jest.dontMock('lodash');
jest.dontMock('../../../../src/model/item');
jest.dontMock('../../../../src/model/cart-item');
jest.dontMock('../../../../src/model/promotion/promotion');
jest.dontMock('../../../../src/model/promotion/discount/discount');
jest.dontMock('../../../../src/model/promotion/discount/item-discount');



describe('Item', function() {

    var Item;
    var CartItem;
    var cartItems;
    var itemDiscount;
    var ItemDiscount;

    beforeEach(function() {

        Item = require('../../../../src/model/item');
        CartItem = require('../../../../src/model/cart-item');
        ItemDiscount = require('../../../../src/model/promotion/discount/item-discount');

        cartItems = [new CartItem(Item.all()[0],20), new CartItem(Item.all()[1],25),
            new CartItem(Item.all()[2],30), new CartItem(Item.all()[3],15),
            new CartItem(Item.all()[5],20), new CartItem(Item.all()[6],20)];

        itemDiscount = new ItemDiscount(0.8, cartItems, '可口可乐350ml');
    });

    describe('#getCartItem', function() {
        it('should return one cartItem of appointed name', function() {
            var result = itemDiscount.getCartItem();
            expect(result.count).toBe(20);
            expect(result.getName()).toBe('可口可乐350ml');
        });
    });

    //describe('#getTotalMoney', function() {
    //    it('should return totalMoney of cartItems', function() {
    //        var result = brand.getTotalMoney(brand.getBrandCartItems());
    //        expect(result).toBe(160);
    //    });
    //});
    //
    //describe('#getBePromotionMoney', function() {
    //    it('should return be assignment of bePromotionMoney', function() {
    //        var result = brand.getBePromotionMoney(brand.getTotalMoney());
    //        expect(result).toBe(160);
    //    });
    //});
    //
    //describe('#buildPromotionInfo', function() {
    //    it('should return one string of promotion information', function() {
    //        var result = brand.buildPromotionInfo();
    //        expect(result).toBe('名称：可口可乐品牌打折，金额：16.00元\n');
    //    });
    //});

});
