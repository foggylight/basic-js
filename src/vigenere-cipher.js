const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode === true ? 'direct' : 'reverse';
    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  getStr(str) {
    return str.toUpperCase().split('');
  }

  getKey(str, key) {
    let formatedKey = '';
    for (let i = 0, k = 0; i < str.length; i += 1, k += 1) {
      if (this.chars.indexOf(this.getStr(str)[i]) === -1) {
        formatedKey += ' ';
        k -= 1;
      } else {
        const keyIndex = k < key.length ? k : k % key.length;
        formatedKey += key[keyIndex];
      }
    };
    return formatedKey.toUpperCase().split('').map((char) => this.chars.indexOf(char));
  }

  engine(str = null, key = null, type) {
    if (str === null || key === null) {
      throw new Error('no arguments');
    }
    const formatedKey = this.getKey(str, key);
    const res = this.getStr(str).map((char, i) => {
      const charIndex = this.chars.indexOf(char);
      if (charIndex === -1) {
        return char;
      };
      const shift = formatedKey[i];
      switch(type) {
        case 'encrypt':
          return this.chars[charIndex + shift >= 26 ? (charIndex + shift) - 26 : charIndex + shift];
        case 'decrypt':
          return this.chars[charIndex + 26 - shift >= 26 ? charIndex - shift : charIndex + 26 - shift];
      };
    });
    return this.mode === 'direct' ? res.join('') : res.reverse().join('');
  }

  encrypt(str, key) {
    return this.engine(str, key, 'encrypt');
  }

  decrypt(str, key) {
    return this.engine(str, key, 'decrypt');
  }
}

module.exports = VigenereCipheringMachine;
