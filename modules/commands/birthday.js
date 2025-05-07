module.exports.config = {
    name: "birthday",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Cherry",
    description: "Xem hôm nay là sinh nhật của ai trong box?",
    commandCategory: "Thông tin",
    usages: "birthday",
    cooldowns: 10
};

const sinhnhatPath = __dirname + '/cache/sinhnhat.json';
const fs = require('fs');

module.exports.onLoad = () => {
  if (!fs.existsSync(sinhnhatPath)) fs.writeFileSync(sinhnhatPath, JSON.stringify({}));
}


module.exports.run = async function({ api, event, Users, Threads }) {
    var { threadID } = event;
    var threadData = await api.getThreadInfo(threadID) || "", tag = [], msg = "Hôm nay là ngày sinh nhật của:\n\n", birthday = "", num = 0;
    if (!threadData) return api.sendMessage("Thiếu dữ kiện để thực thi lệnh này.", threadID);
    var members = threadData.userInfo;
  // api.sendMessage(JSON.stringify(members, null, 4), threadID);
    for (var i of members) {
        if (i.isBirthday == false) continue;
        if (i.isBirthday == true) {
            num++;
            birthday += `${num}. ${i.name}\n`
            tag.push({
                tag: i.name,
                id: i.id
            });
        }
    }
    birthday ? msg += `${birthday}\nMọi người tới chúc mừng sinh nhật cho ${tag.length < 2 ? "bạn ấy" : "các bạn ấy"} nào.` : msg = "Hôm nay không là ngày sinh nhật của thành viên nào cả."
    return tag.length > 0 ? api.sendMessage({ body: msg, mentions: tag }, threadID) : api.sendMessage(msg, threadID);
}