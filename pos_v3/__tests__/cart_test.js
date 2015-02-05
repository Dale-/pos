jest.dontMock('lodash');
jest.dontMock('../src/model/cart');
jest.dontMock('../src/model/item');
jest.dontMock('../src/model/strategy');
jest.dontMock('../src/model/cart-item');
jest.dontMock('../src/model/promotion/discount');
jest.dontMock('../src/model/promotion/promotion');
jest.dontMock('../src/model/promotion/up-to-top-reduce');


describe('Cart', function() {

    var Cart;
    var cart;
    var Item;
    var CartItem;
    var cartItems;

    beforeEach(function() {
        Cart = require('../src/model/cart');
        cart = new Cart();
        Item = require('../src/model/item');
        CartItem = require('../src/model/cart-item');
        cart.cartItems = [
                        new CartItem(Item.all()[0], 20),
                        new CartItem(Item.all()[1], 20),
                        new CartItem(Item.all()[7], 30),
                        new CartItem(Item.all()[5], 12)
        ];
    });

    describe('#addCartItem', function() {
        it('should return cart.cartItems', function() {
           var result = cart.addCartItem({ 'ITEM000000' : 20 });
           expect(result[0].item.name).toBe('可口可乐350ml');
       });
    });

    describe('#getListInfo', function() {
        it('should return string of listInfo', function() {
            var result = cart.getListInfo();
            expect(result).toBe('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n'+
                                '名称：可口可乐550ml，数量：20瓶，单价：4.00(元)，小计：80.00(元)\n' +
                                '名称：康师傅方便面，数量：30袋，单价：4.50(元)，小计：135.00(元)\n' +
                                '名称：云山荔枝，数量：12斤，单价：15.00(元)，小计：180.00(元)\n');
        });
    });

    describe('#getPromotionInfo', function() {
        it('should return correct string of promotion', function() {
            var result = cart.getPromotionInfo('1');
            expect(result).toBe('名称：可口可乐品牌打折，金额：14.00元\n' +
                                '名称：满100减3，金额：3.00元\n');
        });
    });

    describe('#getSavingMoney', function() {
        it('should return float of savingMoney', function() {
            var result = cart.getSavingMoney('1');
            expect(result).toBe(17.00);
        });
    });

    describe('#getSavingInfo', function() {
        it('should return string of savingInfo', function() {
            var result = cart.getSavingInfo('1');
            expect(result).toBe('节省：17.00(元)\n');
        });
    });

    describe('#getTotalInfo', function() {
        it('should return string of totalInfo', function() {
            var result = cart.getTotalInfo('1');
            expect(result).toBe('总计：438.00(元)\n');
        });
    });
});