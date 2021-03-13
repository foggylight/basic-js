const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const res = [];
  const controlSeq = ['--discard-next', '--discard-prev', '--double-next', '--double-prev', ''];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      i += 1;
      res.push('');
    } else if (arr[i] === '--discard-prev') {
      res.pop();
    } else if (arr[i] === '--double-next' && i + 1 < arr.length) {
      res.push(arr[i + 1]);
    } else if (arr[i] === '--double-prev' && i - 1 >= 0) {
      res.push(res[res.length - 1]);
    } else {
      res.push(arr[i]);
    }
  };

  return res.filter(item => !controlSeq.includes(item));
};
