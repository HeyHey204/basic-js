const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const obj = {};
	domains.forEach(item => {
		let arr = item.split('.');
		let domain = '';
		for (let i = arr.length - 1; i >= 0; i--) {
			domain += `.${arr[i]}`;
			if (obj[domain])
				obj[domain] += 1;
			else
				obj[domain] = 1;
		}
	});
	return obj;
}

module.exports = {
	getDNSStats
};
