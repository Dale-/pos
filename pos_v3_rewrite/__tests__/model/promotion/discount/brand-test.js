jest.dontMock('lodash');
jest.dontMock('../../../../src/model/promotion/promotion');
jest.dontMock('../../../../src/model/promotion/discount/discount');
jest.dontMock('../../../../src/model/promotion/discount/brand');


describe('Brand', function() {

    var Item;
    var brand;
    var Brand;
    var Discount;
    var CartItem;
    var cartItems;
    var Promotion;
    //var promotion;

    beforeEach(function() {
        Item = require('../../../../src/model/item');
        CartItem = require('../../../../src/model/cart-item');
        Promotion= require('../../../../src/model/promotion/promotion');
        Brand = require('../../../../src/model/promotion/discount/brand');
        Discount = require('../../../../src/model/promotion/discount/discount');

        cartItems = [new CartItem(Item.all[0],20), new CartItem(Item.all[1],25),
                     new CartItem(Item.all[2],30), new CartItem(Item.all[3],15),
                     new CartItem(Item.all[5],20), new CartItem(Item.all[6],20)];
        //promotion = new Promotion(cartItems);
        brand = new Brand(0.9, cartItems, '可口可乐');
    });

    describe('#getBrandCartItems', function() {
        it('should return object of brandCartItems', function() {
            var result = brand.getBrandCartItems();
            expect(result.length).toBe(2);
        });
    });

});
