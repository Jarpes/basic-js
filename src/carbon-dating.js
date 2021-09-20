import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  let approx = 0.693;
  let activity = parseFloat(sampleActivity);
  return (isNaN(activity)                     || 
          typeof sampleActivity !== "string"  || 
          activity <= 0                       || 
          activity >= MODERN_ACTIVITY)        ? 
          false                               : 
          Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (approx / HALF_LIFE_PERIOD)) 
}
