function DateText() {
  //this.currentDate = new Date();
}

DateText.getDataText = function() {
  dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
  };

  var currentDate = new Date(),
  year = dateDigitToString(currentDate.getFullYear()),
  month = dateDigitToString(currentDate.getMonth() + 1),
  date = dateDigitToString(currentDate.getDate()),
  hour = dateDigitToString(currentDate.getHours()),
  minute = dateDigitToString(currentDate.getMinutes()),
  second = dateDigitToString(currentDate.getSeconds()),
  formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  var dataText = '打印时间：' + formattedDateString + '\n';
  return dataText;
};
