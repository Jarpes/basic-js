import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(array) {
  let transformedArray = []

  if (!Array.isArray(array)) throw Error("'arr' parameter must be an instance of the Array!");

  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {

      case '--discard-next':
        i++;
        break;

      case '--discard-prev':
        if ('--discard-next' != array[i - 2]) transformedArray.pop();
        break;

      case '--double-next':
        if (array.length > i + 1) transformedArray.push(array[i + 1]);
        break;

      case '--double-prev':
        if (array[i - 2] != '--discard-next' && 0 <= i - 1) transformedArray.push(array[i - 1]);
        break;

      default:
        transformedArray.push(array[i]);
        
    }
  }

  return transformedArray
}
