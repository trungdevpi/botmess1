const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsLink = 20
const fontsInfo = 28
const colorName = "#00FFFF"

module.exports.config = {
    name: "rank",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SenProject",//fix by Qz như con cu 
    description: "check tương tác theo phong cách liên quân",
    commandCategory: "liên quân mobile",
    usages: "checktt",
    cooldowns: 0,
    dependencies: {
        "fs-extra": ""
    }
}

const path = __dirname + '/count-by-thread/';

module.exports.onLoad = () => {
    const fs = require('fs');
    if (!fs.existsSync(path) || !fs.statSync(path).isDirectory()) {
        fs.mkdirSync(path, { recursive: true });
    }
}
module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
module.exports.handleEvent = function ({ event }) {
    const { messageID, threadID, senderID } = event;
    if (!global.data.allThreadID.some(tid => tid == threadID)) return;
    const fs = global.nodemodule['fs'];
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 0;
    }
    getThreadJSON[senderID]++;
    fs.writeFileSync(threadPath, JSON.stringify(getThreadJSON, null, 4));
}


const getRankName = count => {
    return count > 4260 ? 'Thách Đấu ( ⭐ )'
        : count > 3260 ? 'Chiến Tướng ( ⭐ )'
            : count > 3240 ? 'Cao Thủ (50 ⭐)'
                : count > 3220 ? 'Cao Thủ (49 ⭐)'
                    : count > 3200 ? 'Cao Thủ (48 ⭐)'
                        : count > 3180 ? 'Cao Thủ (47 ⭐)'
                            : count > 3160 ? 'Cao Thủ (46 ⭐)'
                                : count > 3140 ? 'Cao Thủ (45 ⭐)'
                                    : count > 3120 ? 'Cao Thủ (44 ⭐)'
                                        : count > 3100 ? 'Cao Thủ (43 ⭐)'
                                            : count > 3080 ? 'Cao Thủ (42 ⭐)'
                                                : count > 3060 ? 'Cao Thủ (41 ⭐)'
                                                    : count > 3040 ? 'Cao Thủ (40 ⭐)'
                                                        : count > 3020 ? 'Cao Thủ (39 ⭐)'
                                                            : count > 3000 ? 'Cao Thủ (38 ⭐)'
                                                                : count > 2980 ? 'Cao Thủ (37 ⭐)'
                                                                    : count > 2960 ? 'Cao Thủ (36 ⭐)'
                                                                        : count > 2940 ? 'Cao Thủ (35 ⭐)'
                                                                            : count > 2920 ? 'Cao Thủ (34 ⭐)'
                                                                                : count > 2900 ? 'Cao Thủ (33 ⭐)'
                                                                                    : count > 2880 ? 'Cao Thủ (32 ⭐)'
                                                                                        : count > 2860 ? 'Cao Thủ (31 ⭐)'
                                                                                            : count > 2840 ? 'Cao Thủ (30 ⭐)'
                                                                                                : count > 2820 ? 'Cao Thủ (29 ⭐)'
                                                                                                    : count > 2800 ? 'Cao Thủ (28 ⭐)'
                                                                                                        : count > 2780 ? 'Cao Thủ (27 ⭐)'
                                                                                                            : count > 2760 ? 'Cao Thủ (26 ⭐)'
                                                                                                                : count > 2740 ? 'Cao Thủ (25 ⭐)'
                                                                                                                    : count > 2720 ? 'Cao Thủ (24 ⭐)'
                                                                                                                        : count > 2700 ? 'Cao Thủ (23 ⭐)'
                                                                                                                            : count > 2680 ? 'Cao Thủ (22 ⭐)'
                                                                                                                                : count > 2660 ? 'Cao Thủ (21 ⭐)'
                                                                                                                                    : count > 2640 ? 'Cao Thủ (20 ⭐)'
                                                                                                                                        : count > 2620 ? 'Cao Thủ (19 ⭐)'
                                                                                                                                            : count > 2600 ? 'Cao Thủ (18 ⭐)'
                                                                                                                                                : count > 2580 ? 'Cao Thủ (17 ⭐)'
                                                                                                                                                    : count > 2560 ? 'Cao Thủ (16 ⭐)'
                                                                                                                                                        : count > 2540 ? 'Cao Thủ (15 ⭐)'
                                                                                                                                                            : count > 2520 ? 'Cao Thủ (14 ⭐)'
                                                                                                                                                                : count > 2500 ? 'Cao Thủ (13 ⭐)'
                                                                                                                                                                    : count > 2480 ? 'Cao Thủ (12 ⭐)'
                                                                                                                                                                        : count > 2460 ? 'Cao Thủ (11 ⭐)'
                                                                                                                                                                            : count > 2440 ? 'Cao Thủ (10 ⭐)'
                                                                                                                                                                                : count > 2420 ? 'Cao Thủ (9 ⭐)'
                                                                                                                                                                                    : count > 2400 ? 'Cao Thủ (8 ⭐)'
                                                                                                                                                                                        : count > 2380 ? 'Cao Thủ (7 ⭐)'
                                                                                                                                                                                            : count > 2360 ? 'Cao Thủ (6 ⭐)'
                                                                                                                                                                                                : count > 2340 ? 'Cao Thủ (5 ⭐)'
                                                                                                                                                                                                    : count > 2320 ? 'Cao Thủ (4 ⭐)'
                                                                                                                                                                                                        : count > 2300 ? 'Cao Thủ (3 ⭐)'
                                                                                                                                                                                                            : count > 2280 ? 'Cao Thủ (2 ⭐)'
                                                                                                                                                                                                                : count > 2260 ? 'Cao Thủ (1 ⭐)'
                                                                                                                                                                                                                    : count > 2240 ? 'Tinh Anh I (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                        : count > 2220 ? 'Tinh Anh I (⭐⭐⭐⭐)'
                                                                                                                                                                                                                            : count > 2200 ? 'Tinh Anh I (⭐⭐⭐)'
                                                                                                                                                                                                                                : count > 2180 ? 'Tinh Anh I (⭐⭐)'
                                                                                                                                                                                                                                    : count > 2160 ? 'Tinh Anh I (⭐)'
                                                                                                                                                                                                                                        : count > 2140 ? 'Tinh Anh II (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                            : count > 2120 ? 'Tinh Anh II (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                : count > 2100 ? 'Tinh Anh II (⭐⭐⭐)'
                                                                                                                                                                                                                                                    : count > 2080 ? 'Tinh Anh II (⭐⭐)'
                                                                                                                                                                                                                                                        : count > 2060 ? 'Tinh Anh II (⭐)'
                                                                                                                                                                                                                                                            : count > 2040 ? 'Tinh Anh III (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                : count > 2020 ? 'Tinh Anh III (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                    : count > 2000 ? 'Tinh Anh III (⭐⭐⭐)'
                                                                                                                                                                                                                                                                        : count > 1980 ? 'Tinh Anh III (⭐⭐)'
                                                                                                                                                                                                                                                                            : count > 1960 ? 'Tinh Anh III (⭐)'
                                                                                                                                                                                                                                                                                : count > 1940 ? 'Tinh Anh IV (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                    : count > 1920 ? 'Tinh Anh IV (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                        : count > 1900 ? 'Tinh Anh IV (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                            : count > 1880 ? 'Tinh Anh IV (⭐⭐)'
                                                                                                                                                                                                                                                                                                : count > 1860 ? 'Tinh Anh IV (⭐)'
                                                                                                                                                                                                                                                                                                    : count > 1840 ? 'Tinh Anh V (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                        : count > 1820 ? 'Tinh Anh V (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                            : count > 1800 ? 'Tinh Anh V (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                : count > 1780 ? 'Tinh Anh V (⭐⭐)'
                                                                                                                                                                                                                                                                                                                    : count > 1760 ? 'Tinh Anh V (⭐)'
                                                                                                                                                                                                                                                                                                                        : count > 1740 ? 'Kim Cương I (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                            : count > 1720 ? 'Kim Cương I (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                : count > 1700 ? 'Kim Cương I (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                    : count > 1680 ? 'Kim Cương I (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                        : count > 1660 ? 'Kim Cương I (⭐)'
                                                                                                                                                                                                                                                                                                                                            : count > 1640 ? 'Kim Cương II (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                : count > 1620 ? 'Kim Cương II (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                    : count > 1600 ? 'Kim Cương II (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                        : count > 1580 ? 'Kim Cương II (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                            : count > 1560 ? 'Kim Cương II (⭐)'
                                                                                                                                                                                                                                                                                                                                                                : count > 1540 ? 'Kim Cương III (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                    : count > 1520 ? 'Kim Cương III (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                        : count > 1500 ? 'Kim Cương III (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                            : count > 1480 ? 'Kim Cương III (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                : count > 1460 ? 'Kim Cương III (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                    : count > 1440 ? 'Kim Cương IV (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                        : count > 1420 ? 'Kim Cương IV (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                            : count > 1400 ? 'Kim Cương IV (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                : count > 1380 ? 'Kim Cương IV (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                    : count > 1360 ? 'Kim Cương IV (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                        : count > 1340 ? 'Kim Cương V (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                            : count > 1320 ? 'Kim Cương V (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                : count > 1300 ? 'Kim Cương V (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 1280 ? 'Kim Cương V (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 1260 ? 'Kim Cương V (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 1240 ? 'Bạch Kim I (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 1220 ? 'Bạch Kim I (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 1200 ? 'Bạch Kim I (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 1180 ? 'Bạch Kim I (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 1160 ? 'Bạch Kim I (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 1140 ? 'Bạch Kim II (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 1120 ? 'Bạch Kim II (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 1100 ? 'Bạch Kim II (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 1080 ? 'Bạch Kim II (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 1060 ? 'Bạch Kim II (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 1040 ? 'Bạch Kim III (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 1020 ? 'Bạch Kim III (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 1000 ? 'Bạch Kim III (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 980 ? 'Bạch Kim III (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 960 ? 'Bạch Kim III (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 940 ? 'Bạch Kim IV (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 920 ? 'Bạch Kim IV (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 900 ? 'Bạch Kim IV (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 880 ? 'Bạch Kim IV (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 860 ? 'Bạch Kim IV (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 840 ? 'Bạch Kim V (⭐⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 820 ? 'Bạch Kim V (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 800 ? 'Bạch Kim V (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 780 ? 'Bạch Kim V (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 760 ? 'Bạch Kim V (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 740 ? 'Vàng I (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 720 ? 'Vàng I (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 700 ? 'Vàng I (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 680 ? 'Vàng I (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 660 ? 'Vàng II (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 640 ? 'Vàng II (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 620 ? 'Vàng II (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 600 ? 'Vàng II (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 580 ? 'Vàng III (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 560 ? 'Vàng III (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 540 ? 'Vàng III (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 520 ? 'Vàng III (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 500 ? 'Vàng IV (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 480 ? 'Vàng IV (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 460 ? 'Vàng IV (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 440 ? 'Vàng IV (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 420 ? 'Bạc I (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 400 ? 'Bạc I (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 380 ? 'Bạc I (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 360 ? 'Bạc I (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 340 ? 'Bạc II (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 320 ? 'Bạc II (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 300 ? 'Bạc II (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 280 ? 'Bạc II (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 260 ? 'Bạc III (⭐⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 240 ? 'Bạc III (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 220 ? 'Bạc III (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 200 ? 'Bạc III (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 180 ? 'Đồng I (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 160 ? 'Đồng I (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 140 ? 'Đồng I (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 120 ? 'Đồng II (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 100 ? 'Đồng II (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : count > 80 ? 'Đồng II (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        : count > 60 ? 'Đồng III (⭐⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            : count > 40 ? 'Đồng III (⭐⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                : count > 20 ? 'Đồng III (⭐)'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    : 'Đồng III'
}



module.exports.run = async function ({ api, event, args, Users }) {
    const { loadImage, createCanvas } = require("canvas");
    const request = require('request');
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const Canvas = global.nodemodule["canvas"];
    let pathImg = __dirname + `/cache/1.png`;
    let pathAvata = __dirname + `/cache/2.png`;

    // const fs = global.nodemodule['fs'];
    const { messageID, threadID, senderID, mentions } = event;
    const threadPath = path + threadID + '.json';
    if (!fs.existsSync(threadPath) || fs.statSync(threadPath).isDirectory()) {
        fs.writeFileSync(threadPath, JSON.stringify({}, null, 4));
    }
    const query = args[0] ? args[0].toLowerCase() : '';
    const getThreadJSON = JSON.parse(fs.readFileSync(threadPath)) || {};
    if (!getThreadJSON.hasOwnProperty(senderID)) {
        getThreadJSON[senderID] = 1;
    }
    var storage = [],
        msg = '';
    if (query == 'all') {
        const allThread = await api.getThreadInfo(threadID) || { participantIDs: [] };
        for (id of allThread.participantIDs) {
            if (!getThreadJSON.hasOwnProperty(id)) {
                getThreadJSON[id] = 0;
            }
        }
    }
    for (const id in getThreadJSON) {
        const name = await Users.getNameUser(id);
        storage.push({ id, name, count: getThreadJSON[id] });
    }
    storage.sort((a, b) => {
        if (a.count > b.count) return -1;
        else if (a.count < b.count) return 1;
        // else return a.name.localeCompare(b.name);
    });
    if (query == 'all') {
        let count = 1;
        msg += '〘 ==== 𝐂𝐇𝐄𝐂𝐊 𝐀𝐋𝐋 ==== 〙';
        for (const user of storage) {
            msg += `\n${count++}〉『 ${user.name} 』➜ ${user.count}\nRank: ${getRankName(user.count)}`;
        };
        return api.sendMessage({ body: msg, attachment: await responseStream(' https://i.postimg.cc/RFGgRmPb/rankall.jpg') }, threadID)
    }
    else if (query == 'thread') {

        var om = global.data.allThreadID
        om.forEach(tid => {
            const huh = path + tid + '.json';
            const datat = JSON.parse(fs.readFileSync(huh)) || {}
            var option = parseInt(args[1] || 10);
            //  return api.sendMessage(JSON.stringify(om),threadID)
            let sum = 0;
            for (let i = 0; i < Object.keys(datat).length; i++) {
                sum += Object.values(datat)[i];
            }
            var threadList = [];
            try {
                data = await api.getThreadList(option + 20, null, ["INBOX"]);
            }
            catch (e) {
                console.log(e);
            }
            for (const thread of data) {
                if (thread.isGroup == true) threadList.push({ threadName: thread.name, threadID: thread.threadID, messageCount: sum });
            }
            threadList.sort((a, b) => {
                if (a.messageCount > b.messageCount) return -1;
                if (a.messageCount < b.messageCount) return 1;
            })
            var i = 0;
            for (const dataThread of threadList) {
                if (i == option) break;
                msg += `⚜${i + 1}/ ${(dataThread.threadName) || "Không tên"}\n💎TID: [${dataThread.threadID}]\n🌸Số tin nhắn: ${dataThread.messageCount} tin nhắn\n\n`;
                i += 1;
            }
            return api.sendMessage(`📌Dưới đây là top ${threadList.length} các nhóm lắm mồm nhất quả đất:\n≻───── ⋆✩⋆ ─────≺\n${msg}\n≻────END────≺`, threadID, messageID);
        })
        //console.log(sum);
        //return api.sendMessage(JSON.stringify(sum),threadID)
    }
    else if (query == 'top') {
        let threadInfo = await api.getThreadInfo(event.threadID);
        let getAvatarOne = (await axios.get(`${threadInfo.imageSrc}`, { responseType: 'arraybuffer' })).data;
        let bg = (
            await axios.get(encodeURI(`https://i.imgur.com/cJZCB2y.png`), {
                responseType: "arraybuffer",
            })
        ).data;
        fs.writeFileSync(pathAvata, Buffer.from(getAvatarOne, 'utf-8'));
        avataruser = await this.circle(pathAvata);
        fs.writeFileSync(pathImg, Buffer.from(bg, "utf-8"));
        /*-----------------download----------------------*/
        if (!fs.existsSync(__dirname + `${fonts}`)) {
            let getfont = (await axios.get(`${downfonts}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(__dirname + `${fonts}`, Buffer.from(getfont, "utf-8"));
        };
        /*---------------------------------------------*/

        let baseImage = await loadImage(pathImg);
        let baseAvata = await loadImage(avataruser);
        let canvas = createCanvas(baseImage.width, baseImage.height);
        let ctx = canvas.getContext("2d");
        ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseAvata, 80, 110, 285, 285);
        Canvas.registerFont(__dirname + `${fonts}`, {
            family: "Play-Bold"
        });
        ctx.font = `30px Play-Bold`;
        ctx.fillStyle = "#00FFFF";
        ctx.textAlign = "start";
        fontSize = 20;
        ctx.fillText(`» 1: ${storage[0].name} -> ${getRankName(storage[0].count)}`, 445, 174);
        ctx.fillText(`» 2: ${storage[1].name} -> ${getRankName(storage[1].count)}`, 445, 218);
        ctx.fillText(`» 3: ${storage[2].name} -> ${getRankName(storage[2].count)}`, 445, 262);
        ctx.fillText(`» 4: ${storage[3].name} -> ${getRankName(storage[3].count)}`, 445, 306);
        ctx.fillText(`» 5: ${storage[4].name} -> ${getRankName(storage[4].count)}`, 445, 350);
        ctx.beginPath();
        const imageBuffer = canvas.toBuffer();
        fs.writeFileSync(pathImg, imageBuffer);
        fs.removeSync(pathAvata);

        return api.sendMessage(
            { attachment: fs.createReadStream(pathImg) },
            threadID,
            () => fs.unlinkSync(pathImg),
            messageID
        );
    }

    else if (query == 'help') {
        const msg = '》Đ𝗼̂̀𝗻𝗴 (0 tin nhắn)\n》𝗕𝗮̣𝗰 (200 tin nhắn)\n》𝗩𝗮̀𝗻𝗴 (440 tin nhắn)\n》𝗕𝗮̣𝗰𝗵 𝗞𝗶𝗺 (760 tin nhắn)\n》𝗞𝗶𝗺 𝗖𝘂̛𝗼̛𝗻𝗴 (1260 tin nhắn)\n》𝗧𝗶𝗻𝗵 𝗔𝗻𝗵 (1760 tin nhắn)\n》𝗖𝗮𝗼 𝗧𝗵𝘂̉ (2260 tin nhắn)\n》𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝘂̛𝗼̛́𝗻𝗴 (3440 tin nhắn)\n》𝗧𝗵𝗮́𝗰𝗵 Đ𝗮̂́𝘂 (4440 tin nhắn)\n𝗦𝗮̆́𝗽 𝘅𝗲̂́𝗽 𝘁𝗵𝗲𝗼 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝘁𝘂̛̀ đ𝗼̂̀𝗻𝗴 𝗜𝗜𝗜 -> 𝗖𝗵𝗶𝗲̂́𝗻 𝗧𝘂̛𝗼̛́𝗻𝗴 𝗻𝗵𝘂̛ 𝗿𝗮𝗻𝗸 𝗟𝗶𝗲̂𝗻 𝗤𝘂𝗮̂𝗻 𝗠𝗼𝗯𝗶𝗹𝗲\n𝗠𝗼̂̃𝗶 𝟮𝟬 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗯𝗮̣𝗻 𝘀𝗲̃ đ𝘂̛𝗼̛̣𝗰 𝟭⭐'

        return api.sendMessage({ body: msg, attachment: await responseStream('https://i.postimg.cc/rpHs3nhy/rankhelp.jpg') }, threadID, messageID);
    } else if (!query) {
        const userID = event.type == "message_reply" && !event.args[1] ? event.messageReply.senderID : !event.args[1] ? event.senderID : Object.keys(event.mentions)[0];
        const rankUser = storage.findIndex(e => e.id == userID);
        const msg = `『 🏆 』𝗧𝗼𝗽 𝗰𝘂̉𝗮 ${userID == senderID ? '𝗯𝗮̣𝗻' : storage[rankUser].name} : ${rankUser + 1}\n『 💬 』𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 : ${storage[rankUser].count}\n『 🏅 』𝗥𝗮𝗻𝗸 : ${getRankName(storage[rankUser].count)}\n『 ❔ 』[ /𝗿𝗮𝗻𝗸 𝗵𝗲𝗹𝗽 ] , [ /𝗿𝗮𝗻𝗸 𝗮𝗹𝗹 ]\n『 🔷 』𝗖𝗵𝘂́𝗰 𝗯𝗮̣𝗻 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 𝘃𝘂𝗶 𝘃𝗲̉`;
        try {
            const userID = event.type == "message_reply" && !event.args[1] ? event.messageReply.senderID : !event.args[1] ? event.senderID : Object.keys(event.mentions)[0];
            const find = storage.find(item => item.id == userID);
            api.sendMessage({
                body: msg,
                attachment: await responseStream(imagesRank(find.count))
            }, threadID, messageID);
            return;
        } catch (loi) {
            api.sendMessage(loi, threadID);
        };
    };
};
function imagesRank(exp) {
    var url;
    if (exp > 0) url = 'https://i.imgur.com/QGBpxNB.png';
    if (exp > 200) url = 'https://i.imgur.com/6wnfHSI.png';
    if (exp > 440) url = 'https://i.imgur.com/pFynHX0.png';
    if (exp > 760) url = 'https://i.imgur.com/pmTuUCL.png';
    if (exp > 1260) url = 'https://i.imgur.com/6CwDnm0.png';
    if (exp > 1760) url = 'https://i.imgur.com/JdXkNJ5.png';
    if (exp > 2260) url = 'https://i.imgur.com/NKd6wIr.png';
    if (exp > 3260) url = 'https://i.imgur.com/FUiDCRo.png';
    if (exp > 4260) url = 'https://i.imgur.com/d7tITHm.png';
    return url;
};
async function responseStream(url) {
    const axios = require('axios');
    const stream = (await axios.get(url, {
        responseType: 'stream'
    })).data;
    return stream;