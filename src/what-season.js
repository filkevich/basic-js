const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(Object.prototype.toString.call(date) === '[object Date]')) {
    throw 'Unable to determine the time of year!';
  }

  let month = date.getMonth();
  if (month < 2 || month == 11) {
    return 'winter';
  } else if (month > 1 && month < 5) {
    return 'spring';
  } else if (month > 4 && month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }

};
