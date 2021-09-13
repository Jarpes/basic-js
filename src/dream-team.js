import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let team = '' 

  if (!Array.isArray(members)) {
    return false
  };

  let filteredNames = members.filter(function (el) {
    return el != null && typeof el !== "number" && el != '' && typeof el !== "boolean" && !Array.isArray(el) && !(el instanceof Object)
  }).map(str => str.replace(/\s/g, '').toUpperCase()).sort()


  for (let item in filteredNames) {
    team += filteredNames[item].trim().charAt(0)
  }
  
  return team
}
