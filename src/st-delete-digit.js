import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let counts = 1;
  for (var j = 0; j < counts; j++) {

    var result = 0;
    var i = 1;
    while (parseInt(n / i) > 0) {
      var temp = parseInt(n / (i * 10)) *
        i +
        (n % i);
      i *= 10;
      result = Math.max(result, temp);
    }
    n = result;
  }

  return n;
}