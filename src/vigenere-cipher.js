import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  checker(str) {
    return str.length === 1 && str.toUpperCase().match(/[A-Z]/g);
  }

  encrypt(message, key) {
    let vigenere = '';

    if (!message || !key) throw new Error('Incorrect arguments!');
  
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.checker(message.charAt(i))) {
        vigenere += String.fromCharCode((key.toUpperCase().charCodeAt(j) + message.charAt(i).toUpperCase().charCodeAt(0) - 2 * 65) % 26 + 65);
        j = ++j % key.length;
      } else vigenere = vigenere + message.charAt(i);
    }

    return (this.direct == false) ? vigenere.split("").reverse().join("") : vigenere;
  }

  decrypt(encryptedMessage, key) {
    let vigenere = '';

    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
 
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if (this.checker(encryptedMessage.charAt(i))) {
        vigenere += String.fromCharCode(90 - (25 - (encryptedMessage.charAt(i).charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26);
        j = ++j % key.length;
      } else vigenere = vigenere + encryptedMessage.charAt(i);
    }

    return (this.direct == false) ? vigenere.split("").reverse().join("") : vigenere;
  }
}