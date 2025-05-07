module.exports.config = {
  name: "capdoi",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "D-Jukie",
  description: "Ảnh cặp đôi",
  commandCategory: "Random-img", 
  usages: "", 
  cooldowns: 5
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        const res = await axios.get(`https://raw.githubusercontent.com/thangcutenee/APIDATA/main/capdoi.json`);
        const count = res.data.capdoi.length
        const randomIMG = res.data.capdoi[Math.floor(Math.random() * count)]

        let love1 = (await axios.get( `${randomIMG.link1}`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/love1.png", Buffer.from(love1, "utf-8") );
        let love2 = (await axios.get( `${randomIMG.link2}`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/love2.png", Buffer.from(love2, "utf-8") );
        var imglove = [];
              imglove.push(fs.createReadStream(__dirname + "/cache/love1.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/love2.png"));
        var msg = {body: `Ảnh cặp đôi của bạn đây\nTổng số ảnh: ${count}`, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
}