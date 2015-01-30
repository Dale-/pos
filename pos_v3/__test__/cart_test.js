jest.dontMock('./src/model/cart');

describe('Cart', function() {

    var Cart;
    var cart;

    beforeEach(function() {
        Cart = require('./src/model/cart');
        cart = new Cart();
    });

   describe('#addCartItem', function() {
      it('should return cart.cartItems', function() {
          var result = cart.addCartItem({ 'ITEM000000' : 20 });
          expect(result.item.name).toBe();
      });
   });
});