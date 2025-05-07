module.exports.config = {
	name: "admin bot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "LTK",
	description: "Admin của Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("[⚜️] WE ARE ADMIN [⚜️]\n [👾𝑳𝒖𝒐𝒏𝒈 𝑻𝒓𝒖𝒐𝒏𝒈 𝑲𝒉𝒐𝒊 🔰]", event.threadID, event.messageID)