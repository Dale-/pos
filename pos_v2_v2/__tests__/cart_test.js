jest.dontMock('../model/cart');

describe('Cart', function() {

    var Cart;
    var cart;

    beforeEach(function() {
        Cart = require('../model/cart');
        cart = new Cart();
    });

    describe('#addCartItem', function() {
        it('should be return cart.cartItems', function() {
            var result = cart.addCartItem({item: {barcode: 'ITEM000000',
                name: '雪碧',
                unit: '瓶'},
                count:1});
            expect(result[0].item.name).toBe('雪碧');
        });
    });
});