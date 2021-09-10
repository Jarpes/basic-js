import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  
  function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
  }

  function checkDuplicate(names) {
    return names.filter(function(item, pos) {
      return names.indexOf(item) == pos;
    })
  }
  
  function indexDuplicates(names) {
    let uniquenames = checkDuplicate(names)
    let duplicates = []
    for (let word in uniquenames) {
      duplicates.push(getAllIndexes(names, uniquenames[word]))
    }
    return duplicates
  }

  let trigger = true;
  while (trigger) {
    let indexes = indexDuplicates(names)
    for (let checkIndex in indexes) {
      indexes[checkIndex].shift()
      if (indexes[checkIndex].length >= 1) {
        let renameCounter = 1;
        for (let updateIndex in indexes[checkIndex]) {
          names[indexes[checkIndex][updateIndex]] = names[indexes[checkIndex][updateIndex]] + '(' + renameCounter + ')';
          renameCounter++
        }
      }
    }

    let counter = 0;
    for (let renameIndex in indexes) {
      counter += indexes[renameIndex].length
    }
    if (counter == 1 || counter == 0) trigger = false;
  }
  
  return names;
}
