const fetch = require('node-fetch')

/**
 * Gets the amount of members in a given Roblox group.
 * @param {string|number|BigInt} groupId
 * @returns {number}
 */
module.exports = async function getMemberCount(groupId) {
	let info = await (await fetch(`https://groups.roblox.com/v1/groups/${groupId}`)).json()
	if (info.errors !== undefined)
		throw new Error(info.errors[0].message)
	return info.memberCount
}
