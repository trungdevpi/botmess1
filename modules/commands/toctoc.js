module.exports.config = {
	name:"toctoc",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Binee",
	description: "Random video tiktok gái",
	commandCategory: "Tiện Ích",
	cooldowns: 3
};
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://apituandz1407.herokuapp.com/api/gaixinhtiktok.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
            body: `ℍ𝕖𝕪𝕪𝕪 , 𝕋𝕠𝕔𝕋𝕠𝕔 𝕍𝕠̛̣ 𝔸 ℕ𝔸̀𝕚 🖤`,
						attachment: fs.createReadStream(__dirname + `/cache/top.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/top.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/top.${ext}`)).on("close", callback);
			})
}