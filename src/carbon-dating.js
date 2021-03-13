const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const num = Number(sampleActivity);
  if (typeof sampleActivity !== 'string' ||  Number.isNaN(num) || num <= 0 || num > 15) {
    return false;
  }

  const k = -0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(num / MODERN_ACTIVITY) / k;
  return Math.ceil(t);
};
