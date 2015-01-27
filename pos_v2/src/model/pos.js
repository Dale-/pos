function Pos() {
  this.firstLine = '***<没钱赚商店>购物清单***\n';
  this.splitLine = '----------------------\n';
  this.lastLIne = '**********************';
  this.printTime = '打印时间：';
  this.blankSpace = '\n';
}

Pos.prototype.joinText = function(cart) {
  cart.setPayCount();

  return this.firstLine + this.printTime + Util.TimeHelper() +
         this.blankSpace + this.splitLine + cart.getInventoryText() +
         this.splitLine + cart.getPromotionText() + this.splitLine +
         cart.getTotalAndSavingText() + this.lastLIne;
};
