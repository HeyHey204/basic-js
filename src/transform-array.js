const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	if (arr instanceof Array == false) throw new Error("\'arr\' parameter must be an instance of the Array!");

	let transformed = [];

	for (let key in arr) {
		transformed[key] = arr[key]
	}

	for (let i = 0; i < transformed.length; i++) {
		if (transformed[i] === '--double-next') {
			(transformed[i + 1]) ? transformed[i] = transformed[i + 1] : transformed[i] = null;
		}
		if (transformed[i] === '--double-prev') {
			(transformed[i - 1]) ? transformed[i] = transformed[i - 1] : transformed[i] = null;
		}
		if (transformed[i] === '--discard-prev') {
			if (transformed[i - 1]) {
				transformed[i - 1] = null;
			}
			transformed[i] = null;
		}
		if (transformed[i] === '--discard-next') {
			if (transformed[i + 1]) {
				transformed[i + 1] = null;
			}
			transformed[i] = null;
		}
	}
	return transformed.filter(item => item !== null);
}

module.exports = {
	transform
};
