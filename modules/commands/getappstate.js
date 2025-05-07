const fs = require("fs");

module.exports.config = {
    name: "getappstate",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Goatbot v2",//sen conv UwU
    description: "",
    commandCategory: "Game",
    usages: ""
}
module.exports.run = async function ({ api, event }) {
const permission = ["100070461126618"];
    if (!permission.includes(event.senderID)) return api.sendMessage("𝙈 𝙩𝙪𝙤̂̉𝙞 𝙡𝙤̂̀𝙣 đ𝙤̀𝙞 𝙡𝙖̂́𝙮 𝙛𝙖𝙘𝙚 𝙘𝙪̉𝙖 sóc 💀", event.threadID, event.messageID);
    const appstate = JSON.stringify(api.getAppState(), null, 2);
    const pathSave = `${__dirname}/cache/appstate.json`;
    fs.writeFileSync(pathSave, appstate);
    if (event.senderID != event.threadID) {
        api.sendMessage({
            body: `appstate`,
            attachment: fs.createReadStream(pathSave)
        }, event.senderID, () => {
            api.sendMessage("Đã gửi appstate vào tin nhắn riêng", event.threadID);
            fs.unlinkSync(pathSave);
        });
    }
};