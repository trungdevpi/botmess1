module.exports.config = {
    name: "goibotv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "Gọi Bot Version 3",
    commandCategory: "Noprefix",
    usages: "",
    cooldowns: 2,
    denpendencies: {}
};

module.exports.handleReply = async function({ api, args, Users, event, handleReply }) {
    var name = await Users.getNameUser(event.senderID);
    switch (handleReply.type) {
        case "reply":
            {
                var idad = global.config.ADMINBOT;
                for (let ad of idad) {
                    api.sendMessage({
                        body: "Tin nhắn từ" + name + ":\n" + event.body,
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
                        type: "goibot"
                    }))
                }
                break;
            }
        case "goibot":
            {
                api.sendMessage({ body: `${event.body}`, mentions: [{ tag: name, id: event.senderID }] }, handleReply.id, (e, data) => global.client.handleReply.push({
                    name: this.config.name,
                    author: event.senderID,
                    messageID: data.messageID,
                    type: "reply"
                }), handleReply.messID);
                break;
            }
    }
};


module.exports.handleEvent = async({ event, api, Users, Threads }) => {
    var { threadID, messageID, body, senderID } = event;
    if (senderID == global.data.botID) return;

    const moment = require("moment-timezone");
    var time = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID);
    var idbox = event.threadID;
    let uidUser = event.senderID;
    let dataThread = await Threads.getData(event.threadID);
    let threadInfo = dataThread.threadInfo;
    const listAdmin = global.config.ADMINBOT;

    var tl = [
        "chào bạn đáng iu", "Hi, bạn kêu sóc có việc gì👀", "chồng gọi có việc gì không?",
        "kêu gì",
        `${name}` + ", kêu ít thôi",
        `${name}` + ", tớ đây",
        `${name}` + ", bạn gọi mình hả👀",
        `${name}` + ", đang bực kêu ít thôi",
        `${name}` + ", yêu không mà gọi",
        `${name}` + ", có sóc đây:3",
        `${name}` + ", chào bạn cuti trước màn hình nhé",
        `${name}` + ", đây đây",
        `${name}` + ", admin sóc tên 𝑸𝒖𝒚̀𝒏𝒉 𝑵𝒉𝒖̛:3",
        `${name}` + ", cho sóc tiền nâng cấp máy chủ đi rồi gọi:))"
    ];
    var rand = tl[Math.floor(Math.random() * tl.length)];
    // Gọi bot
    var arr = ["bot die rồi à","bot die r à"];
    arr.forEach(value => {
        let str = value[0].toUpperCase() + value.slice(1);
    if (body === value.toUpperCase() | body === value | str === body) {
            let nameT = threadInfo.threadName;
            modules = "------ Gọi bot ------\n";
            console.log(modules, value + "|", nameT);
            api.sendMessage(rand, threadID, () => {
                var idad = listAdmin;
                for (var idad of listAdmin) {
                    api.sendMessage(`=== Bot tag ===\n\n👥Box Name: ${nameT}\n🔰ID box: ${idbox}\n💖Name User: ${name} \n💕ID User: ${uidUser}\n🕒Time: ${time}\n😍Gọi bot: ${value}`,
                        idad, (error, info) =>
                        global.client.handleReply.push({
                            name: this.config.name,
                            author: senderID,
                            messageID: info.messageID,
                            messID: messageID,
                            id: idbox,
                            type: "goibot"
                        })
                    );
                }
            });
        }
    });
}

module.exports.run = async({ event, api }) => {
    return api.sendMessage("( \\_/)                                                                            ( •_•)                                                                            // >🧠                                                            Sóc đưa não cho bạn lắp vào đầu nè.\nCó biết là lệnh Noprefix hay không?", event.threadID)
}