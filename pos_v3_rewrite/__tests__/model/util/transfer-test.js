jest.dontMock('../../../src/model/util/transfer');

describe('Transfer', function() {

    var Transfer;

    beforeEach(function() {
       Transfer = require('../../../src/model/util/transfer');
    });

    describe('.numberTransferCharacter', function() {
       it('should be return relevant chinese character', function() {
           var result =  Transfer.numberTransferCharacter(9);
           expect(result).toBe('九');
       });
    });

});