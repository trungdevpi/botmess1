module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100092723880087) {
    var aid = ["100092723880087"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗔𝗗𝗠𝗜𝗡 𝐌𝐚𝐧𝐡𝐃𝐞𝐞𝐩𝐓𝐫𝐲 𝗱𝗮𝗻𝗴 𝗯𝗮̣̂𝗻 𝘅𝗶𝗻 𝘃𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘁𝗮𝗴 𝗹𝗮̣𝗶 𝘀𝗮𝘂 ..."];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }