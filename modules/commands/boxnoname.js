const fs = require("fs"),
      path = __dirname + "/cache/namebox.json";

module.exports.config = {
	name: "boxnoname",
	version: "beta",
	hasPermssion: 1,
	credits: "XThanh",
	description: "Cấm đổi tên nhóm khi bật, lệnh chỉ được sử dụng bởi qtv hoặc người điều hành bot",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 0
};
module.exports.languages = {
  "vi": {},
  "en": {}
};
module.exports.onLoad = () => {   
  if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
};

module.exports.handleEvent = async function ({ api, event, Threads, permssion }) {
const { threadID, messageID, senderID, isGroup, author } = event;
  
  if (isGroup == true) {
  let data = JSON.parse(fs.readFileSync(path))
  let dataThread = (await Threads.getData(threadID)).threadInfo
  const threadName = dataThread.threadName;
   if (!data[threadID]) {
    data[threadID] = {
  namebox: threadName,
  status: true
}
fs.writeFileSync(path, JSON.stringify(data, null, 2));
    }
    if (data[threadID].namebox == null || threadName == "undefined" || threadName == null) return
     
    else if (threadName != data[threadID].namebox && data[threadID].status == false) {
    data[threadID].namebox = threadName
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
  }
 
 if (threadName != data[threadID].namebox && data[threadID].status == true) {
   return api.setTitle(
     data[threadID].namebox,
       threadID, () => {
         api.sendMessage(
      `‼️ Hiện tại đang cấm đổi tên nhóm\n » qtv hoặc adm dùng ${PREFIX(threadID)}boxnoname để tắt`,
       threadID)
       });
      }
    }
  };

module.exports.run = async function ({ api, event, permssion, Threads }) {
  const { threadID, messageID } = event;
 if (permssion == 0) return api.sendMessage("Chỉ qtv hoặc adm bot mới được bật/tắt lệnh đổi tên box", threadID);
  let data = JSON.parse(fs.readFileSync(path))
  let dataThread = (await Threads.getData(threadID)).threadInfo
  const threadName = dataThread.threadName;

    if (data[threadID].status == false) {
       data[threadID] = {
         namebox: threadName,
         status: true
       }
    } else data[threadID].status = false
         fs.writeFileSync(path, JSON.stringify(data, null, 2));
          api.sendMessage(
        `Đã ${data[threadID].status == true ? `bật` : `tắt`} chế độ cấm đổi tên box , người điều hành bot hoặc qtv có thể tắt bật`,
     threadID)
    } 
function PREFIX(t) {
var dataThread = global.data.threadData.get(t) || {}
  return dataThread.PREFIX || global.config.PREFIX
                     }