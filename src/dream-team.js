const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  let newArray = [];

  if (!Array.isArray(array)) {
    return false;
  }
  
  array.forEach(element => {
    if (typeof element == 'string') {
      newArray.push(element.trim()[0].toUpperCase());
    }
  });
  return (newArray.sort().join(''));
};
