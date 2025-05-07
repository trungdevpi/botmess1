const fs = require('fs');
module.exports.config = {
	name: "tatbot", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "1.0.0", // phiên bản của module này
	hasPermssion: 3, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "TruongMini", // Công nhận module sở hữu là ai
	description: "test", // Thông tin chi tiết về lệnh
	commandCategory: "Dành cho admin", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;
    let path = __dirname + "/cache/bot.json";
    if(!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
    let data = JSON.parse(fs.readFileSync(path));
    if(!data[threadID]) data[threadID] = { on: false, start: 0, end: 23};
    switch(args[0]) {
        case "on": {
            if(!data[threadID].start || !data[threadID].end) return api.sendMessage("Chưa thiết lập thời gian hoạt động", threadID);
            data[threadID].on = true;
            fs.writeFileSync(path, JSON.stringify(data, null, 4));
            return api.sendMessage("Đã bật bot hoạt động theo giờ chỉ định", threadID);
        }
        case "off": {
            data[threadID].on = false;
            fs.writeFileSync(path, JSON.stringify(data, null, 4));
            return api.sendMessage("Đã tắt chế độ hoạt động theo giờ", threadID);
        }
        case "set": {
            if(!args[1]) return api.sendMessage("Bạn chưa nhập thời gian hoạt động", threadID);
            if(args[1].length < 2) return api.sendMessage("Nhập sai định dạng thời gian", threadID);
            let time = args[1].split("-");
            if(time.length != 2) return api.sendMessage("Nhập sai định dạng thời gian", threadID);
            if(time[1] - time[0] <= 0) return api.sendMessage("Thời gian không hợp lệ", threadID);
            if(time[0] > 23 || time[0] < 0) return api.sendMessage("Giờ bắt đầu không hợp lệ", threadID);
            if(time[1] > 23 || time[1] < 0) return api.sendMessage("Giờ kết thúc không hợp lệ", threadID);
            data[threadID].start = time[0];
            data[threadID].end = time[1];
            fs.writeFileSync(path, JSON.stringify(data, null, 4));
            return api.sendMessage("Đã thiết lập thời gian hoạt động", threadID);
        }
        default: {
            break;
        }
    }
}