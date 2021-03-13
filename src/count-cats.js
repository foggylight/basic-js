const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const cat = '^^';
  const arr = matrix.flat();
  let res = 0;
  for (let el of arr) {
    if (el === cat) {
      res += 1;
    }
  }
  return res;
};
