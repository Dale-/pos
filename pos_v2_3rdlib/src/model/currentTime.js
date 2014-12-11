function CurrentTime() {
  this.currentTime = moment().format('YYYY年MM月DD日 HH:mm:ss');
}

CurrentTime.prototype.getCurrentTimeText = function() {
  var currentTimeText = '打印时间：' + this.currentTime + '\n';
  return currentTimeText;
}; 
