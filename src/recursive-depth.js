const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

	calculateDepth(array, amount = 1, depthArr = []) {
		for (let i = 0; i < array.length; i++) {
			if (Array.isArray(array[i])) {
				amount++
				depthArr.push(amount)
				this.calculateDepth(array[i], amount, depthArr)
				amount = 1;
			}
		}
		return (depthArr.length == 0) ? amount : depthArr.sort((a, b) => b - a)[0]
	}
}

module.exports = {
	DepthCalculator
};
