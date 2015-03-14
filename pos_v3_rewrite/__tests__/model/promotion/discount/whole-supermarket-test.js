jest.dontMock('lodash');
jest.dontMock('../../../../src/model/item');
jest.dontMock('../../../../src/model/cart-item');
jest.dontMock('../../../../src/model/util/transfer');
jest.dontMock('../../../../src/model/promotion/promotion');
jest.dontMock('../../../../src/model/promotion/discount/discount');
jest.dontMock('../../../../src/model/promotion/discount/whole-supermarket-discount');

describe('WholeSupermarket', function() {

    var Item;
    var CartItem;
    var cartItems;
    var wholeSupermarket;
    var WholeSupermarketDiscount;

    beforeEach(function() {

        Item = require('../../../../src/model/item');
        CartItem = require('../../../../src/model/cart-item');
        WholeSupermarketDiscount = require('../../../../src/model/promotion/discount/whole-supermarket-discount');

        cartItems = [new CartItem(Item.all()[0],20), new CartItem(Item.all()[1],25),
                     new CartItem(Item.all()[2],30), new CartItem(Item.all()[3],15),
                     new CartItem(Item.all()[5],20), new CartItem(Item.all()[6],20)];

        wholeSupermarket = new WholeSupermarketDiscount(0.8, cartItems, '果粒橙');
    });

    describe('#numberTransferCharacter', function() {
        it('should be return relevant chinese character', function() {
            var result = wholeSupermarket.numberTransferCharacter(95);
            expect(result).toBe('九五');
        });
    });

    describe('#removeCartItem', function() {
       it('should be return cartItems that had removed appointed cartItem', function() {
           var result =  wholeSupermarket.removeCartItem();
           expect(result.length).toBe(5);
       });
    });

    describe('#getBePromotionMoney', function() {
        it('should return be assignment of bePromotionMoney', function() {
            var result = wholeSupermarket.getBePromotionMoney();
            expect(result).toBe(590);
        });
    });

    describe('#buildPromotionInfo', function() {
        it('should return one string of promotion information', function() {
            var result = wholeSupermarket.buildPromotionInfo();
            expect(result).toBe('名称：八折，金额：118.00元\n');
        });
    });

});
