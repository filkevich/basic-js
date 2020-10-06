const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];

  // TODO: fix bug with control sequences work
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {

      switch (arr[i]) {
        case '--discard-next':
          if (i != arr.length - 1) i += 2;
          break;

        case '--discard-prev':
          if (newArr.length != 0) newArr.pop();
          break;

        case '--double-next':
          if (i != arr.length - 1) newArr.push(arr[i + 1]);
          break;

        case '--double-prev':
          if (newArr.length != 0 && arr[i - 2] != '--discard-next') newArr.push(newArr[newArr.length - 1]);
          break;

        default:
          newArr.push(arr[i]);
      }
    }
    return newArr;
  } else {
    throw Error;
  }
};
