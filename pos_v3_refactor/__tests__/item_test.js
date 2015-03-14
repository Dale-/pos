jest.dontMock('../src/model/item');

describe('Item', function() {

    var Item;

    beforeEach(function() {
        Item = require('../src/model/item');
    });

    describe('.all', function() {
        it('should return correct barcode', function() {
            var result = Item.all()[0];
            expect(result.barcode).toBe('ITEM000000');
        });
    });
});
