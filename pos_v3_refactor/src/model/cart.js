var _ = require('lodash');
var Item = require('./item');
var moment = require('moment');
var Strategy = require('./strategy');
var CartItem = require('./cart-item');
var Discount = require('./promotion/discount');
var Promotion = require('./promotion/promotion');
var UpToTopReduce = require('./promotion/up-to-top-reduce');

function Cart(strategy) {
  this.cartItems = [];
  this.promotionInfo = '';
  this.strategy = strategy;
}

Cart.prototype.addCartItem = function(tag) {
  var key = _.keys(tag)[0];
  var item = _.find(Item.all(), {barcode: key});
  this.cartItems.push(new CartItem(item, tag[key]));
  return this.cartItems;
};

Cart.prototype.getListInfo = function() {
    var cartItems = this.cartItems;
    var listText = '';
    _.forEach(cartItems, function(cartItem) {
      listText += cartItem.toListText();
    });
    return listText;
};

Cart.prototype.getPromotionInfo = function(strategyType) {
    var methodName = 'Strategy.getStrategy' + strategyType + 'String';
    this.promotionInfo = eval(methodName + '(this.cartItems)');
    return this.promotionInfo;
};

Cart.prototype.getSavingMoney = function() {
    var savingMoney = 0;
    var savings = (this.promotionInfo).split('\n');
    savings.pop();
    _.forEach(savings, function(saving) {
        savingMoney += parseFloat(saving.slice(saving.lastIndexOf('：') + 1, saving.indexOf('元')));
    });
    return savingMoney;
};

Cart.prototype.getSavingInfo = function(strategyType) {
    return '节省：' + this.getSavingMoney(strategyType).toFixed(2) + '(元)\n';
};

Cart.prototype.getTotalInfo = function(strategyType) {
    var totalAmount = 0;
    var cartItems = this.cartItems;
    _.forEach(cartItems, function(cartItem) {
        totalAmount += cartItem.getSubTotal();
    });
    totalAmount -= this.getSavingMoney(strategyType);
    return '总计：' + totalAmount.toFixed(2) + '(元)\n';
};

Cart.prototype.toString = function(strategyType) {
    return '***<没钱赚商店>购物清单***\n' + '打印时间：' +
           moment().format('YYYY年MM月DD日 HH:mm:ss') +
           '\n\n----------------------\n' +
           this.getListInfo() +
           '\n----------------------\n' + '优惠信息：\n' +
           this.getPromotionInfo(strategyType) +
           '\n----------------------\n' +
           this.getTotalInfo(strategyType) +
           this.getSavingInfo(strategyType) +
           '**********************\n';
};

module.exports = Cart;
