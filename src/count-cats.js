const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  matrix.forEach(i => {
    i.forEach(k => {
        if (String(k) == '^^') {
          count++;
        }
    });
  });
  return count;
}
