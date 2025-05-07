const axios = require("axios");
const fs = require("fs-extra");
const endPointMyApi = 'https://Api.viethungprovjp.repl.co/crawl';
const emojiToSendMessage = "❤";
const emojiToPushApi = "😆";

module.exports.config = {
  name: "import",
  credits: "NTKhang",
  hasPermssion: 3,
  description: "import/crawl data from a api",
  usages: "< limit > < key1,key2... > < filename > < url endpoints >",
  commandCategory: "𝐓𝐢𝐞𝐧 𝐢𝐜𝐡"
};


module.exports.run = async ({ api, event, args }) => {
  const {
    threadID,
    messageID,
    senderID
  } = event;
  try {
    // eslint-disable-next-line prefer-const
    let [limit, key, fileName, url] = args;
    if (!limit || !key || !fileName || !url)
      return api.sendMessage("➤ 𝐒𝐚𝐢 𝐂𝐮́ 𝐏𝐡𝐚́𝐩", threadID, messageID);
    const folderName = fileName.split("/").slice(0, -1).join("/");
    fileName = fileName.split("/").slice(-1)[0];
    if (isNaN(limit))
      return api.sendMessage("➤ 𝐋𝐢𝐦𝐢𝐭 𝐏𝐡𝐚̉𝐢 𝐋𝐚̀ 𝐌𝐨̣̂𝐭 𝐂𝐨𝐧 𝐒𝐨̂́", threadID, messageID);
    url = url.replace(/,/g, ".");
    const pendings = [];
    for (let i = 0; i < limit; i++) {
      pendings.push(axios({
        url,
        method: "GET"
      }));
    }
    const data = await Promise.allSettled(pendings);
    let success = 0;
    let failed = 0;
    let newData = [];

    const keys = key.split(',');
    const firstKey = keys[0];

    for (const item of data) {
      if (item.status == "fulfilled") {
        const value = {};
        for (const key of keys)
          value[key] = item.value.data[key];
        if (newData.some(e => e[firstKey] == value[firstKey])) {
          success++;
          continue;
        }
        success++;
        newData.push(value);
      }
      else
        failed++;
    }

    if (keys.length == 1)
      newData = newData.map(e => e[firstKey]);

    const msg = `❀ 𝐃𝐚 𝐂𝐫𝐚𝐰𝐥 𝐓𝐡𝐚𝐧𝐡 𝐂𝐨𝐧𝐠 ❀\n『 𝐀𝐝𝐝 』: ${newData.length}\n『 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 』: ${success}\n『 𝐓𝐡𝐚̂́𝐭 𝐁𝐚̣𝐢 』: ${failed}\n『 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 』 "${emojiToSendMessage}" → 𝐆𝐮̛̉𝐢 𝐅𝐢𝐥𝐞 𝐕𝐞̂̀ 𝐓𝐢𝐧 𝐍𝐡𝐚̆́𝐧 𝐑𝐢𝐞̂𝐧𝐠 \n『 𝐓𝐡𝐚̉ 𝐂𝐚̉𝐦 𝐗𝐮́𝐜 』 "${emojiToPushApi}" → 𝐋𝐮̛𝐮 𝐕𝐚̀𝐨 𝐀𝐏𝐈 𝐂𝐮̉𝐚 𝐁𝐚̣𝐧`;
    return api.sendMessage(msg, threadID, async (err, info) => {
      global.client.handleReaction.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID,
        data: newData,
        fileName,
        folderName
      });
    }, messageID);
  }
  catch (e) {
    console.log(e);
    return api.sendMessage("→ 𝐂𝐨́ 𝐋𝐨̂̃𝐢 𝐗𝐚̂̉𝐲 𝐑𝐚 𝐊𝐡𝐢 𝐓𝐡𝐮̛̣𝐜 𝐇𝐢𝐞̣̂𝐧 𝐋𝐞̣̂𝐧𝐡", threadID, messageID);
  }
};

module.exports.handleReaction = async ({ api, event, handleReaction }) => {
  const { fileName, folderName, author, data } = handleReaction;
  if (event.userID != author)
    return;
  if (event.reaction == emojiToSendMessage) {
    const path = __dirname + `/cache/${fileName}`;
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
    return api.sendMessage({
      body: `『 𝐅𝐢𝐥𝐞 ${fileName} 𝐂𝐮𝐚 𝐁𝐚𝐧 𝐃𝐚𝐲 』`,
      attachment: fs.createReadStream(path)
    }, event.userID, (err, info) => {
      if (err) {
        console.log(err);
        return api.sendMessage("→ 𝐂𝐨́ 𝐋𝐨̂̃𝐢 𝐗𝐚̂̉𝐲 𝐑𝐚 𝐊𝐡𝐢 𝐓𝐡𝐮̛̣𝐜 𝐇𝐢𝐞̣̂𝐧 𝐋𝐞̣̂𝐧𝐡", event.threadID, event.messageID);
      }
      api.sendMessage(`『 𝐅𝐢𝐥𝐞 ${fileName} 𝐃𝐚 𝐃𝐮𝐨𝐜 𝐆𝐮𝐢 𝐕𝐞 𝐓𝐢𝐧 𝐍𝐡𝐚𝐧 𝐑𝐢𝐞𝐧𝐠 』`, event.threadID, event.messageID);
      fs.unlinkSync(path);
    });
  }
  else if (event.reaction == emojiToPushApi) {
    let res;
    try {
      await axios({
        url: endPointMyApi,
        method: "POST",
        data: {
          content: JSON.stringify(data, null, 2),
          folder: folderName,
          fileName
        }
      });
      res = "『 𝐋𝐮̛𝐮 𝐓𝐡𝐚̀𝐧𝐡 𝐂𝐨̂𝐧𝐠 𝐃𝐚𝐭𝐚 𝐕𝐚̀𝐨 𝐀𝐏𝐈 』";
      return api.sendMessage(res, event.threadID, event.messageID);
    }
    catch (e) {
      console.log(e);
      res = "『 𝐗𝐚̂̉𝐲 𝐑𝐚 𝐋𝐨̂̃𝐢 𝐊𝐡𝐢 𝐋𝐮̛𝐮 𝐃𝐚𝐭𝐚 𝐕𝐚̀𝐨 𝐀𝐏𝐈 』";
      return api.sendMessage(res, event.threadID, event.messageID);
    }
  }
};