const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let teamName = '';
	if (!members) return false;
	if (members[0]) {
		teamName = members.filter(member =>
			typeof member === 'string'
		).map(member => {
			return member.trim().toUpperCase().slice(0, 1);
		}).sort().join('');
	} else {
		return false
	}

	return teamName;
}

module.exports = {
	createDreamTeam
};
