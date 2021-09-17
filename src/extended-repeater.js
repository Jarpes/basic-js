import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (!options.separator)           options.separator           = '+';
  if (!options.additionSeparator)   options.additionSeparator   = '|';
  if (!options.repeatTimes)         options.repeatTimes         = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if ((!options.addition && options.addition == false) || typeof options.addition == "object") options.addition = String(options.addition);
  
  let additionArray   = [];
  let additionString  = str;
  let fullArray       = [];
  let fullString      = '';
  str                 = '' + str || '';

  for (let i = 1; i <= options.additionRepeatTimes; i++) {
    additionArray.push(options.addition);
  }
  
  additionString += additionArray.join(options.additionSeparator);

  for (let i = 1; i <= options.repeatTimes; i++) {
    fullArray.push(additionString);
  }

  fullString     = fullArray.join(options.separator);

  return fullString;
}