const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
	constructor(isNotReversed = true) {
		this.isNotReversed = isNotReversed;
	}

	encrypt(message, key) {
		if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');

		let result = [];

		message = message.toUpperCase();
		const keyChars = key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split('');
		console.log(keyChars);

		for (let i = 0; i < message.length; i++) {
			if (alphabet.includes(message[i])) {
				result.push(alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(keyChars[i])) % alphabet.length]);
			} else {
				result.push(message[i]);
				keyChars.splice(i, 0, null)
			}
		}

		if (this.isNotReversed === true) return result.join('')
		else return result.reverse().join('');
	}

	decrypt(encryptedMessage, key) {
		if (encryptedMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

		let result = [];

		let message = encryptedMessage.toUpperCase();
		const keyChars = key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split('');
		console.log(keyChars);

		for (let i = 0; i < message.length; i++) {
			if (alphabet.includes(message[i])) {
				result.push(alphabet[(alphabet.indexOf(message[i]) - alphabet.indexOf(keyChars[i]) + alphabet.length) % alphabet.length]);
			} else {
				result.push(message[i]);
				keyChars.splice(i, 0, null)
			}
		}

		// console.log(result);

		if (this.isNotReversed === true) return result.join('')
		else return result.reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine
};
