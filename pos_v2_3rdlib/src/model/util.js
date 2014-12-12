function Util() {
}

Util.TimeHelper = function() {
  return moment().format('YYYY年MM月DD日 HH:mm:ss');
};

Util.toFixed = function (num) {
  return num.toFixed(2);
};
