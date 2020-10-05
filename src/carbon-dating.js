const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || isNaN(sampleActivity)) { 
    console.log ('=== FALSE ===');
    console.log (sampleActivity);
    return false; 
  } 
  else {
    if (sampleActivity < 16 || sampleActivity >= 9000) {
      return false;
    }
    console.log ('=== TRUE ===');
    console.log (sampleActivity);
    console.log (Math.ceil((Math.log(Math.abs(MODERN_ACTIVITY/sampleActivity)))*HALF_LIFE_PERIOD/0.693));
    return Math.ceil((Math.log(MODERN_ACTIVITY/sampleActivity))*HALF_LIFE_PERIOD/0.693);
  }
};
