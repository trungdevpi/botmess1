module.exports.config = {
  name: "chuibot",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "ManhG",
  description: "Người chửi bot sẽ tự động bị ban khỏi hệ thống <3",
  commandCategory: "admin",
  usages: "",
  cooldowns: 0,
  denpendencies: {}
};

module.exports.handleReply = async function ({ api, args, Users, event, handleReply }) {
  const { threadID, messageID } = event;
  const { reason } = handleReply;
  var name = await Users.getNameUser(event.senderID);
  //const moment = require("moment-timezone");
  //const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var arg = event.body.split(" ");
  var uidUser = handleReply.author;
  var nameU = handleReply.nameU;
  //console.log(uidUser, nameU)
  switch (handleReply.type) {
    case "reply":
      {
        var idad = global.config.ADMINBOT;
        for (let ad of idad) {
          api.sendMessage({
            body: "🐸𝗟𝗼̛̀𝗶 𝗰𝗵𝗮̆𝗻𝗴 𝗰𝗵𝗼̂́𝗶 𝘁𝘂̛̀ " + name + ":\n " + event.body,
            mentions: [{
              id: event.senderID,
              tag: name
            }]
          }, ad, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            messageID: data.messageID,
            messID: event.messageID,
            author: event.senderID,
            id: event.threadID,
            nameU: name,
            type: "banU"
          }))
        }
        break;
      }

    case "banU":
      {
        if (arg[0] == "unban" || arg[0] == "Unban") {

          let data = (await Users.getData(uidUser)).data || {};
          data.banned = 0;
          data.reason = null;
          data.dateAdded = null;
          await Users.setData(uidUser, { data });
          global.data.userBanned.delete(uidUser, 1);

          api.sendMessage(`🌺𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘁𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 ${name}🌺\n\n ${nameU}\n✅𝗕𝗮̣𝗻 Đ𝗮̃ Đ𝘂̛𝗼̛̣𝗰 𝗚𝗼̛̃ 𝗕𝗮𝗻✅\n- 𝗯𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝗻𝗴𝗮𝘆 𝗯𝐚̂𝘆 𝗴𝗶𝗼̛̀🥳`, uidUser, () =>
            api.sendMessage(`${global.data.botID}`, () =>
              api.sendMessage(`★★UnBanSuccess★★\n\n🔷${nameU} \n✅TID:${uidUser} `, threadID)));
        } else {
          api.sendMessage({ body: `➢ 𝗦𝘂̛̣ 𝘀𝗼́𝘁 𝘁𝗵𝘂̛𝗼̛𝗻𝗴 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻 đ𝗲̂́𝗻 𝗯𝗮̣𝗻\n\n${event.body}\n\n➢📩𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗴𝘂̛̉𝗶 𝗰𝐚̂𝘂 𝘁𝗿𝗮̉ 𝗹𝗼̛̀𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘃𝗼̛́𝗶 𝘀𝘂̛̣ 𝘀𝗼́𝘁 𝘁𝗵𝘂̛𝗼̛𝗻𝗴 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻🌺`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
            name: this.config.name,
            author: event.senderID,
            messageID: data.messageID,
            type: "reply"
          }), handleReply.messID);
          break;
          
        }
      }

    case "chuibot":
      {
        api.sendMessage({ body: `🐸𝗔𝗱𝗺𝗶𝗻 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 đ𝗲̂́𝗻 𝗯𝗮̣𝗻:\n\n${event.body}\n\n➢📩𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗻𝗼́𝗶 𝗹𝗼̛̀𝗶 𝗰𝗵𝗮̆𝗻𝗴 𝗰𝗵𝗼̂́𝗶 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗼̛́𝗶 𝗮𝗱𝗺𝗶𝗻🌺`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
          name: this.config.name,
          author: event.senderID,
          messageID: data.messageID,
          type: "reply"
        }), handleReply.messID);
        break;
      }
  }
};

module.exports.handleEvent = async ({ event, api, Users, Threads }) => {
  var { threadID, messageID, body, senderID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:mm:ss D/MM/YYYY");
  
    var { threadID, messageID, body, senderID } = event; const thread = global.data.threadData.get(threadID) || {};
    if (typeof thread["fixspam"] !== "undefined" && thread["fixspam"] == false) return;

  if (senderID == global.data.botID) return;
  let name = await Users.getNameUser(event.senderID);
  var idbox = event.threadID;
  var threadInfo = (await Threads.getData(threadID)).threadInfo;
  //trả lời
  var msg = {
    body: `➢ 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘁𝘂̛̀ 𝗔𝗱𝗺𝗶𝗻 《\n\n${name},🐸𝗕𝗮̣𝗻 𝘁𝗵𝐚̣̂𝘁 𝗻𝗴𝘂 𝗻𝗴𝗼̂́𝗰 𝗸𝗵𝗶 𝗰𝗵𝘂̛̉𝗶 𝗯𝗼𝘁 𝘃𝗶̀ 𝘃𝐚̣̂𝘆 𝗯𝗼𝘁 đ𝗮̃ 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗯𝗮𝗻 𝗯𝗮̣𝗻 𝗸𝗵𝗼̉𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴✅\n\n💌 𝗛𝗮̃𝘆 𝗻𝗵𝗮̆́𝗻 𝗰𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗟𝘂̛𝗼̛𝗻𝗴 𝗧𝗿𝘂̛𝗼̛̀𝗻𝗴 𝗞𝗵𝗼̂𝗶 + 𝗹𝗶𝗻𝗸 𝗳𝗯 đ𝗲̂̉ 𝗴𝗼̛̉ 𝗯𝗮𝗻🌺`
  }
  // Gọi bot
  const arr = ["botngu", "bot ngu", "bot gà", "con bot lol", "bot ngu lol", "bot chó", "dm bot", "đm bot", "bot tật", "dmm bot", "đmm bot", "đb bot", "bot điên", "bot dở", "bot khùng", "đĩ bot", "bot paylac rồi", "con bot lòn", "cmm bot", "clap bot", "bot ncc", "bot oc", "bot óc", "bot óc chó", "cc bot", "bot tiki", "lozz bottt", "lol bot", "loz bot", "lồn bot", "bot lồn", "bot lon", "bot cac", "bot nhu lon", "bot như cc", "bot như bìu", "Bot sida", "bot sida", "bot fake", "bot sv", "bot shoppee", "bot đểu", "bot dỡm", "bot cc", "sv bot","Thằng nào tạo bot", "bot này lỏ", "bot lồn", "bot lỏ", "bot cùi", "khôi gay", "khôi lỏ", "khôi lồn", "khôi ngu", "khoi gay", "khoi lồn", "khoi ngu", "khoi lon", "bot lởm", "bot lỏ", "bot lỏ:))", "bot lỏ^^", "bot gay", "bot c", "Bot c"];

  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
      const uidUser = event.senderID;
      modules = "chui bot:"
      console.log(name, modules, i);
      const data = Users.getData(uidUser).data || {};
      Users.setData(uidUser, { data });
      data.banned = 1;
      data.reason = i || null;
      data.dateAdded = time;
      global.data.userBanned.set(uidUser, { reason: data.reason, dateAdded: data.dateAdded });

      api.sendMessage(msg, threadID, () => {
        var listAdmin = global.config.ADMINBOT;
        for (var idad of listAdmin) {
          let namethread = threadInfo.threadName;
          api.sendMessage(`🆘𝗧𝗼̣̂𝗶 𝗻𝗵𝐚̂𝗻: ${name}\n🚫Uid: ${uidUser}\n🤷‍♂️𝗕𝗼𝘅: ${namethread}\n🐸𝗖𝗵𝘂̛̉𝗶 𝗯𝗼𝘁: ${i}\n\n✅Đ𝗮̃ 𝗯𝗶̣ 𝗯𝗮𝗻 𝗸𝗵𝗼̉𝗶 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴\n𝗖𝗮́𝗰 𝗮𝗱𝗺𝗶𝗻 dz 𝗵𝗮̃𝘆 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗰𝗵𝘂̛̉𝗶 𝘁𝗵𝗮̆̀𝗻𝗴 𝗯𝗶̣ 𝗯𝗮𝗻`, idad, (error, info) =>
              global.client.handleReply.push({
                name: this.config.name,
                author: senderID,
                messageID: info.messageID,
                messID: messageID,
                id: idbox,
                type: "chuibot"
              })
          );
        }
      });
    }
  });

};

module.exports.languages = {
  "vi": {"on": "Bật","off": "Tắt","successText": "autoban nhóm này thành công",},
  "en": {"on": "on","off": "off","successText": "autoban success!",}
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["autoban"] == "undefined" || data["autoban"] == true) data["autoban"] = false;
  else data["autoban"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["autoban"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}