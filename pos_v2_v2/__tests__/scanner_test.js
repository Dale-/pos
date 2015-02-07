jest.dontMock('lodash');
jest.dontMock('../model/item');
jest.dontMock('../model/scanner');
jest.dontMock('../model/cart-item');

describe('Cart', function() {

    var Scanner;

    beforeEach(function() {
        Scanner = require('../model/scanner');
    });

    describe('#scan', function() {
        it('should be return cartItem', function() {
            var result = Scanner.scan('ITEM000003-2');
            expect(result.item.name).toBe('荔枝');
        });
    });
});