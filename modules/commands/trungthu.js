module.exports.config = {
	name: "trungthu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hoài Bảo",
	description: "Đếm ngược tới ngày trung thu",
	commandCategory: "countdown",
	cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("september 21, 2022 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「𝗧𝗲̂́𝘁 𝗧𝗿𝘂𝗻𝗴 𝗧𝗵𝘂 𝗿𝘂̛𝗼̛́𝗰 𝗱𝗲̀𝗻 𝗱𝗶 𝗰𝗵𝗼̛𝗶 😈🎇🌠」\n» ${days} 𝗻𝗴𝗮̀𝘆 ${hours} 𝘁𝗶𝗲̂́𝗻𝗴 ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆 «`, event.threadID, event.messageID);
}