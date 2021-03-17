const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }
    const nests = [];
    for (let item of arr) {
      let res = 1;
      if (Array.isArray(item)) {
        res += this.calculateDepth(item);
      }
      nests.push(res);
    }
    return nests.sort((a, b) => b - a)[0];
  }
};