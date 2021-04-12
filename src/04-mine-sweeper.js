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
function minesweeper(matrix) {
  let count = 0;
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [];
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        count++;
        newMatrix[i][j] = count;
        count = 0;
      }
      const lastIndexI = matrix.length - 1;
      const lastIndexJ = matrix[i].length - 1;
      if (matrix[i][j] === false) {
        if (j !== 0 && matrix[i][j - 1] === true) {
          count++;
        }
        if (j !== lastIndexJ && matrix[i][j + 1] === true) {
          count++;
        }
        if (i !== 0 && j !== 0 && matrix[i - 1][j - 1] === true) {
          count++;
        }
        if (i !== 0 && matrix[i - 1][j] === true) {
          count++;
        }

        if (i !== 0 && j !== lastIndexJ && matrix[i - 1][j + 1] === true) {
          count++;
        }
        if (j !== 0 && i !== lastIndexI && matrix[i + 1][j - 1] === true) {
          count++;
        }
        if (i !== lastIndexI && matrix[i + 1][j] === true) {
          count++;
        }
        if (i !== lastIndexI && j !== lastIndexJ && matrix[i + 1][j + 1] === true) {
          count++;
        }
        newMatrix[i][j] = count;
        count = 0;
      }
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
