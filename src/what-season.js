import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  let season = ''
  
  if (date === undefined) return 'Unable to determine the time of year!'
  if (!(date instanceof Date) || date.hasOwnProperty('getMonth')) throw new Error('Invalid date!')

  try {
    let month = date.getMonth()
    switch (true) {
      case month >= 2 && month <= 4:
        season = 'spring'
        break;
      case month >= 5 && month <= 7:
        season =  'summer'
        break;
      case month >= 8 && month <= 10:
        season =  'autumn'
        break;
      case month == 0 || month == 1 || month == 11:
        season =  'winter'
        break;
      default:
        throw new Error('Invalid date!')
        break;
    }
  } catch (error) {
    throw new Error('Invalid date!')
  }

  return season
}
