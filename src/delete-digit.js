const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let str = n.toString().split('');

	let numbers = [];
	console.log(str.length);
	for (let i = 0; i < str.length; i++) {
		let newStr = Array.from(str)
		newStr[i] = null;
		numbers.push(parseInt(newStr.filter(char => char !== null).join('')))
	}

	return numbers.sort((a, b) => b - a)[0]
}

module.exports = {
	deleteDigit
};
