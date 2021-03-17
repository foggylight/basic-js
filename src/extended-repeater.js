const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  const res = [];
  const add = [];

  if (addition !== '') {
    for (let i = 0; i < additionRepeatTimes; i += 1) {
      add.push(`${addition}`);
    }
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    res.push(`${add.length !== 0 ? str + add.join(additionSeparator) : str}`);
  }

  return res.join(separator);
};
  