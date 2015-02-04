jest.dontMock('lodash');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/cart-item');

describe('CartItem', function() {

    var Item;
    var CartItem;
    var cartItem;

    beforeEach(function() {
        Item = require('../src/model/item');
        CartItem = require('../src/model/cart-item');
        cartItem = new CartItem(Item.all()[0], 20);
    });

    describe('#getPrice', function() {
        it('should return price', function() {
            var result = cartItem.getPrice();
            expect(result).toBe(3.00);
        });
    });
});