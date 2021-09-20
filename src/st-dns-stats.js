import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  let domainsObject = {};
  for (let domainArray of domains) {
    let counter = 1;
    let resultArray = domainArray.split('.').reverse()
    for (let current in resultArray) {
      let item = `.${ resultArray.slice(0, counter).join('.')}`
      counter++;
      (domainsObject[item]) ? domainsObject[item]++ : domainsObject[item] = 1
    }
  }
  return domainsObject;
}