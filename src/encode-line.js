const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let charsArr = [...str];
	let newArr = [];
	let counter = 1;

	for (let i = 0; i < charsArr.length; i++) {
		if (charsArr[i] == charsArr[i + 1])
			counter++;
		else {
			if (counter == 1)
				counter = "";
			newArr.push(counter)
			newArr.push(str[i])
			counter = 1;
		}
	}

	return newArr.join('');
}

module.exports = {
	encodeLine
};
