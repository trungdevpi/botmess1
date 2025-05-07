module.exports.config = {
    name: "report",
    version: "99",
    hasPermssion: 3,
    credits: "Horizon Premium", // =))
    description: "Rip Acc = Link 13+",
    commandCategory: "Horizon Premium",
    usages: "💀",
    cooldowns: 5
};
module.exports.handleReply = async function({ api, event, handleReply,client }) {
    const permission = ["100070461126618"];
    if (event.senderID != handleReply.author) return;
    switch (handleReply.Case) {
        case 1: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Tên Thật Của Facebook Người Bạn Muốn Report !", event.threadID,(error, info) => global.client.handleReply.push({ Link: event.body, name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 2 }));
        }
        case 2: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Gmail Của Bạn Để Nhận Thông Báo Của Facebook !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link, RealName: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 3 }));
        }
        case 3: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Nội Dung(thần chú) Bạn Muốn Report !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 4 }));
        }
        case 4: {
            return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Số Lần Muốn Report Lên Nạn Nhân !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
        }
        case 5: {
            var Time = parseInt(event.body);
            if (isNaN(event.body)) {
                return api.sendMessage("Hãy Nhập Lại Số Lần Report Lên Nạn Nhân !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Gmail, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
            }
            if (event.body > 100) {
                return api.sendMessage("Hãy Nhập Số Lần Report Lên Nạn Nhân Không Quá 100 Lần !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Content, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
            }
            if (event.body < 1) {
                return api.sendMessage("Hãy Nhập Số Lần Report Lên Nạn Nhân Không Ít Hơn 1 Lần !", event.threadID,(error, info) => global.client.handleReply.push({ Link: handleReply.Link,RealName: handleReply.RealName,Gmail: handleReply.Gmail, Content: handleReply.Content, Time: event.body,name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 5 }));
            }
            api.sendMessage("Bạn Đã Yêu Cầu Report Nạn Nhân Với Thông Tin Sau :\nTên Thật : " + handleReply.RealName + "\nGmail(Của bạn): " + handleReply.Gmail + "\nNội Dung : " + handleReply.Content + "\nSố Lần Report : " +  (handleReply.Time || Time), event.threadID,(error, info) => api.sendMessage('Tiến Hành Tiến Trình !',event.threadID));
            for (let i = 0; i < (handleReply.Time || Time); i++) {
                try {
                    var DataRp = await api.Premium('ReportV1',{ Link: handleReply.Link, RealName: handleReply.RealName, Content: handleReply.Content, Gmail: handleReply.Gmail });
                    console.log(i + "/Report" + DataRp);
                    await new Promise(resolve => setTimeout(resolve, 1 * 1000));
                }
                catch (e) {
                    console.log(e);
                    return api.sendMessage("Lỗi Không Xác Định !\n"+e, event.threadID);
                }
            }
            return api.sendMessage(`Đã Gửi: ${ (handleReply.Time || Time)} Lần Report Tới Nạn Nhân ${handleReply.RealName} !`,event.threadID);
        }
    }
}
module.exports.run = async function({ api,event,client }) {
    return api.sendMessage("Hãy Phản Hồi Tin Nhắn Này Và Nhập Link Facebook Người Bạn Muốn Report !", event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, Case: 1 }));
}