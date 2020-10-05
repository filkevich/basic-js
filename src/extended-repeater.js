const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let stringResult = '';
  let addition = '';
  let separator = '+';
  let additionSeparator = '|';
  let repeatTimes = 1;
  let additionRepeatTimes;

  // change separators if it is in options
  if (options.separator) { separator = options.separator; }
  if (options.additionSeparator) { additionSeparator = options.additionSeparator; }
  if (options.repeatTimes) {repeatTimes = options.repeatTimes; }

  // create full addition
  if (String(options.addition) != '') {
    if (options.additionRepeatTimes == undefined && options.hasOwnProperty('additionRepeatTimes')) {additionRepeatTimes = 1}
    else { additionRepeatTimes = options.additionRepeatTimes }
    for (let i = 1; i <= additionRepeatTimes; i++) {
      // don't put a separator if it is last repeat
      if (i < additionRepeatTimes) { addition += options.addition + additionSeparator; } 
      else { addition += options.addition; }
    }
  }

  for (let i = 1; i <= repeatTimes; i++) {
    // don't put a separator if it is last repeat
    if (i < repeatTimes) { stringResult += str + addition + separator; } 
    else { stringResult += str + addition; }
  }
    
  return stringResult;
};
  