module.exports.config = {
	name: "setbio",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "Lợi",
	description: "Đổi tiểu sử",
	commandCategory: "Tiện ích",
	usages: "setbio [bio]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	 api.changeBio(`${args.join(" ")}`);
	  api.sendMessage(`Đã đổi tiểu sử của bot là :${args.join(" ")}`, event.threadID);
} 