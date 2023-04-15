const { NotImplementedError } = require('../extensions/index.js');

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
	let map = Array(matrix.length);

	for (let y = 0; y < matrix.length; y++) {
		map[y] = [];
		for (let x = 0; x < matrix[0].length; x++) {
			map[y][x] = 0;
		}
	}

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			console.log(matrix[y][x], y, x);
			if (matrix[y][x]) {
				if (map[y][x + 1] !== undefined && matrix[y][x + 1] === false) map[y][x + 1] += 1;
				if (map[y][x - 1] !== undefined && matrix[y][x - 1] === false) map[y][x - 1] += 1;

				if (map[y + 1] !== undefined) {
					if (matrix[y + 1][x] === false) map[y + 1][x] += 1;
					if (map[y + 1][x + 1] !== undefined && matrix[y + 1][x + 1] === false) map[y + 1][x + 1] += 1;
					if (map[y + 1][x - 1] !== undefined && matrix[y + 1][x - 1] === false) map[y + 1][x - 1] += 1;
				}

				if (map[y - 1] !== undefined) {
					if (matrix[y - 1][x] === false) map[y - 1][x] += 1;
					if (map[y - 1][x + 1] !== undefined && matrix[y - 1][x + 1] === false) map[y - 1][x + 1] += 1;
					if (map[y - 1][x - 1] !== undefined && matrix[y - 1][x - 1] === false) map[y - 1][x - 1] += 1;
				}

				map[y][x] = 1;
			}
		}

	}

	return map;
}

module.exports = {
	minesweeper
};
