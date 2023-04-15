const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	typeof str !== 'string' ? str = String(str) : '';

	let repeatTimes = options.repeatTimes === undefined ? options.repeatTimes = 1 : options.repeatTimes;
	let separator = options.separator === undefined ? options.separator = '+' : options.separator = String(options.separator);

	let addition = options.addition === undefined ? options.addition = '' : options.addition = String(options.addition);
	let additionRepeatTimes = options.additionRepeatTimes === undefined ? options.additionRepeatTimes = 1 : options.additionRepeatTimes;
	let additionSeparator = options.additionSeparator === undefined ? options.additionSeparator = '|' : options.additionSeparator = String(options.additionSeparator);

	let resultArray = [];
	let additionArray = [];

	for (let i = 0; i < repeatTimes; i++) {
		resultArray.push(str);
	}

	for (let i = 0; i < additionRepeatTimes; i++) {
		additionArray.push(addition);
	}

	additionArray = additionArray.join(additionSeparator);

	if (additionArray) {
		resultArray = resultArray.map(element => element.concat(additionArray));
	}

	return resultArray.join(separator);
}

module.exports = {
	repeater
};
