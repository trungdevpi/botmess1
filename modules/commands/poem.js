module.exports.config = {
	name: "poem",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "ManhG",
	description: "bài thơ",
	commandCategory: "Horoscope",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const res = await axios.get(`https://manhict.tech/thathinh`);
var poem =       res.data.result.data;

//console.log(poem)

return api.sendMessage(` 🍄 == Bài thơ == 🍄 \n\n${poem}  `, event.threadID, event.messageID)
}