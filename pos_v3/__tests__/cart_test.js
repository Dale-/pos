jest.dontMock('lodash');
jest.dontMock('../src/model/cart');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/cartItem');

describe('Cart', function() {

    var Cart;
    var cart;

    beforeEach(function() {
        Cart = require('../src/model/cart');
        cart = new Cart();
    });

   describe('#addCartItem', function() {
      it('should return cart.cartItems', function() {
          var result = cart.addCartItem({ 'ITEM000000' : 20 });
          expect(result[0].item.name).toBe('可口可乐350ml');
      });
   });
});