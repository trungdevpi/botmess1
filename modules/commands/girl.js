/**
* @author BuiChiThong
* @warn Vui lòng không sửa credits tôn trọng người viết cảm ơn !
*/
module.exports.config = {
  name: "girl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Senbot",
  description: "Ảnh Gái Xinh Nét Đến Từng Sợi Tóc ( Cái Này Sẽ Thay Thế Lệnh GaiViet Nhé )",
  commandCategory: "game",
  usages: "gaixinh",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-dien.senthanh20055.repl.co/images/girl').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `Số ảnh: ${res.data.count}\nFact: ${res.data.author}\nLink: ${res.data.url}`,
            attachment: fs.createReadStream(__dirname + `/cache/gấy.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gấy.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/gấy.${ext}`)).on("close", callback);
      })
}
