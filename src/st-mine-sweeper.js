import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result = matrix.map((item) => 
    item.map(() => 0
  ));
  let changeArray = ([item, second]) => [ [item - 1, second - 1], [item - 1, second], [item - 1, second + 1], [item, second - 1], [item, second + 1], [item + 1, second - 1], [item + 1, second], [item + 1, second + 1]];
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y]) {
        var changedArray = changeArray([x, y]);
        for (let k = 0; k < 8; k++) {
          if (changedArray[k][0] >= 0 && changedArray[k][1] >= 0 && changedArray[k][0] < matrix.length && changedArray[k][1] < matrix[x].length ) result[changedArray[k][0]][changedArray[k][1]]++
        }
      }
    }
  }
  return result;
}