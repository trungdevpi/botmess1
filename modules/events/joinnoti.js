module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "Mirai Team",
  description: "Thông báo bot hoặc người vào nhóm",
  dependencies: {
    "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, Users }) {
  const { threadID } = event;

  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    api.sendMessage(`► 𝕾𝖚𝖈𝖈𝖊𝖘𝖘𝖋𝖚𝖑  𝕮𝖔𝖓𝖓𝖊𝖈𝖙𝖎𝖔𝖓 ◄\n\n🌸 𝗘𝘆𝗼𝗼𝗼 𝗪𝗵𝗮𝘁 𝗦𝘂𝗽 𝗔 𝗡𝗼̛̀ 𝗟𝗼̂ 𝗔𝗻𝗵 𝗘𝗺. 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝗕𝗼𝘁 𝗰𝘂̉𝗮 𝑲𝒉𝒐̂𝒊 𝑪𝒖 𝑻𝒐 𝗡𝗲̀, 𝗗𝘂̀𝗻𝗴 /𝗺𝗲𝗻𝘂 𝗮𝗹𝗹 𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗔𝗹𝗹 𝗟𝗲̣̂𝗻𝗵 𝗛𝗼𝗮̣̆𝗰 /𝗺𝗲𝗻𝘂 𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗖𝗵𝗶 𝗧𝗶𝗲̂́𝘁 𝗩𝗲̂̀ 𝗟𝗲̣̂𝗻𝗵 𝗖𝘂̉𝗮 𝗕𝗼𝘁 🌸\n◆━━━━━━━━━━━◆\n𝐂𝐡𝐮́𝐜 𝐀𝐧𝐡 𝐄𝐦 𝐕𝐮𝐢 𝐕𝐞̉ 𝐓𝐫𝐨𝐧𝐠 𝐐𝐮𝐚́ 𝐓𝐫𝐢̀𝐧𝐡 𝐃𝐮̀𝐧𝐠 𝐁𝐨𝐭 𝐍𝐡𝐚 💟`, threadID);
  } else {
    try {
      const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
      const { threadName, participantIDs } = await api.getThreadInfo(threadID);

      const nameArray = [];
      const mentions = [];
      const memLength = [];
      let i = 0;

      for (const id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);

        if (!global.data.allUserID.includes(id)) {
          await Users.createData(id, { name: userName, data: {} });
          global.data.userName.set(id, userName);
          global.data.allUserID.push(id);
        }
      }
      memLength.sort((a, b) => a - b);

      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      let msg = "";

      if (typeof threadData.customJoin === "undefined") {
        msg = `𝗧𝗩𝗠 𝗚𝗜𝗔 𝗡𝗛𝗔̣̂𝗣 𝗩𝗔̀𝗢 𝗡𝗛𝗢́𝗠\n━━━━━━━━━━━━━\n⚜️ 𝑯𝒆𝒍𝒍𝒐 𝒄𝒐𝒏 𝒗𝒐̛̣ {name}.\n🎀 𝖂𝖊𝖑𝖈𝖔𝖒𝖊 𝖊𝖒 𝖞𝖊̂𝖚 {name} 𝘁𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝗻𝗵𝗼́𝗺 𝗰𝗵𝗮𝘁\n[ {threadName} ]\n📌 {type} 𝗹𝗮̀ 𝗯𝗲́ 𝗶𝘂 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗯𝗼𝘅 𝘁𝘂̣𝗶 𝗺𝗶̀𝗻𝗵\n🎶𝗕𝗮̣𝗻 𝗱𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝗯𝗼̛̉𝗶: {author} ⏰\n━━━━━━━━━━━━━\n🤞𝑻𝒖̛𝒐̛𝒏𝒈 𝒕𝒂́𝒄 𝒏𝒉𝒊𝒆̂̀𝒖 𝒗𝒂̀𝒐 𝒏𝒉𝒂 𝒉𝒐𝒏𝒈 𝒍𝒂̀ 𝒂̆𝒏 𝒌𝒊𝒄𝒌 𝒓𝒂́𝒏𝒈 𝒄𝒉𝒊̣𝒖 🍀`;
      } else {
        msg = threadData.customJoin;
      }

      const getData = await Users.getData(event.author);
      const nameAuthor = typeof getData.name === "undefined" ? "link join" : getData.name;

      const time = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
      const gio = time.format("HH");
      const moment = require("moment-timezone");
      const bok = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY" || "HH:mm:ss");

      let get = "";
      if (gio >= 5) get = "𝐁𝐮𝐨̂̉𝐢 𝐒𝐚́𝐧𝐠";
      if (gio >= 11) get = "𝐁𝐮𝐨̂̉𝐢 𝐓𝐫𝐮̛𝐚";
      if (gio >= 14) get = "𝐁𝐮𝐨̂̉𝐢 𝐂𝐡𝐢Ề̀u";
      if (gio >= 19) get = "𝐁𝐮𝐨̂̉𝐢 𝐓𝐨̂́𝐢";

      msg = msg
        .replace(/\{name}/g, nameArray.join(", "))
        .replace(/\{type}/g, memLength.length > 1 ? "𝐜𝐚́𝐜 𝐛𝐚̣𝐧" : "𝐛𝐚̣𝐧")
        .replace(/\{soThanhVien}/g, memLength.join(", "))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{get}/g, get)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{bok}/g, bok);

      const path = require("path");
      const pathGif = path.join(__dirname, "cache", "joinGif", `${1}.mp5`);

      if (existsSync(pathGif)) {
        formPush = { body: msg, attachment: createReadStream(pathGif), mentions };
      } else {
        formPush = { body: msg, mentions };
      }

      if (existsSync(pathGif)) {
        formPush = { body: msg, attachment: createReadStream(pathGif), mentions };
      } else {
        formPush = { body: msg, mentions };
      }

      return api.sendMessage(formPush, threadID);
    } catch (e) {
      console.log(e);
    }
  }
};