jest.dontMock('../../../src/model/promotion/promotion');

describe('Promotion', function() {

    var Item;
    var CartItem;
    var cartItems;
    var Promotion;
    var promotion;

    beforeEach(function() {
        Item = require('../../src/model/item');
        CartItem = require('../../src/model/cart-item');
        Promotion= require('../../../src/model/promotion/promotion');
        cartItems = [new CartItem(Item.all[0],20), new CartItem(Item.all[1],25),
                     new CartItem(Item.all[2],30), new CartItem(Item.all[3],15),
                     new CartItem(Item.all[5],20), new CartItem(Item.all[6],20)];
        promotion = new Promotion(cartItems);
    });

    describe('#getBrandCartItems', function() {
       it('should return object of brandCartItems', function() {
           promotion.brand = '可口可乐';
           var result = promotion.getBrandCartItems();
           expect(result.length).toBe(2);
       });
    });

});
