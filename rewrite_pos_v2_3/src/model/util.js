function Util() {
}

Util.toFixed = function(num) {
  return num.toFixed(2);
};

Util.toTime = function() {
  return moment().format('YYYY年MM月DD日 HH:mm:ss');
};
