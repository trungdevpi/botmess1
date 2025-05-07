const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "linkspfb",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "khoi",
  description: "lấy link support fb nhanh",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Module đang trong quá trình phát triển, có lẽ chưa có link đó. Xin lỗi bạn"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "Link 333") || (event.body.toLowerCase() == "link 333")) {
     return api.sendMessage("[🌏]Changing Your Name:\nhttps://www.facebook.com/help/contact/1417759018475333", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 195") || (event.body.toLowerCase() == "link 195")) {
     return api.sendMessage("[🌏]Đổi ngày sinh:\nhttps://www.facebook.com/help/contact/233841356784195", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link hacked") || (event.body.toLowerCase() == "link hacked")) {
     return api.sendMessage("[⚠️]Tài khoản bị hack:\nhttps.www.facebook.com/hacked", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 323") || (event.body.toLowerCase() == "link 323")) {
     return api.sendMessage("[🌏]Cung cấp cho chúng tôi phản hồi về tính năng của Facebook :\nhttps://www.facebook.com/help/contact/268228883256323", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 948") || (event.body.toLowerCase() == "link 948")) {
     return api.sendMessage("[🌏]Báo cáo tài khoản giả mạo :\nhttps://www.facebook.com/help/contact/295309487309948", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 667") || (event.body.toLowerCase() == "link 667")) {
     return api.sendMessage("[🌏]Yêu cầu tưởng nhớ:\nhttps://www.facebook.com/help/contact/1605213279719667", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link tưởng nhớ") || (event.body.toLowerCase() == "link tưởng nhớ")) {
     return api.sendMessage("[🌏]Yêu cầu tưởng nhớ:\nhttps://www.facebook.com/help/contact/1605213279719667", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 443") || (event.body.toLowerCase() == "link 443")) {
     return api.sendMessage("[🌏]Đóng góp ý kiến về trung tâm trợ giúp của Facebook:\nhttps://www.facebook.com/help/contact/507287962650443", event.threadID,event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 286") || (event.body.toLowerCase() == "link 286")) {
     return api.sendMessage("[🌏]Your Feedback About Places:\nhttps://www.facebook.com/help/contact/347276355296268", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 088") || (event.body.toLowerCase() == "link 088")) {
     return api.sendMessage("[🌏]Yêu cầu xóa tài khoản cho người không đủ điều kiện sức khỏe:\nhttps://www.facebook.com/help/contact/191122007680088", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 337") || (event.body.toLowerCase() == "link 337")) {
     return api.sendMessage("[🌏]Báo cáo sự cố với trang chủ hoặc bảng tin trên Facebook:\nhttps://www.facebook.com/help/contact/377211842296337", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 245") || (event.body.toLowerCase() == "link 245")) {
     return api.sendMessage("[🌏]Yêu cầu nội dung từ tài khoản Facebook của người đã mất:\nhttps://www.facebook.com/help/contact/398036060275245", event.threadID, event.messageID)
  };

   if ((event.body.toLowerCase() == "Link 097") || (event.body.toLowerCase() == "link 097")) {
     return api.sendMessage("[🌏]Báo cáo trẻ em chưa đủ tuổi:\nhttps://www.facebook.com/help/contact/209046679279097", event.threadID, event.messageID)
  };
  
   if ((event.body.toLowerCase() == "Link 13t") || (event.body.toLowerCase() == "link 13t")) {
     return api.sendMessage("[🌠]Báo cáo trẻ em chưa đủ tuổi:\nhttps://www.facebook.com/help/contact/209046679279097\n[🌌]Báo cáo trẻ chưa đủ tuổi (Hàn Quốc & Tây Ban Nha):\nhttps://www.facebook.com/help/contact/1408156889442791", event.threadID, event.messageID)
  };
  
   if ((event.body.toLowerCase() == "Link 791") || (event.body.toLowerCase() == "link 791")) {
     return api.sendMessage("[🌏]Báo cáo trẻ chưa đủ tuổi (Hàn Quốc & Tây Ban Nha):\nhttps://www.facebook.com/help/contact/1408156889442791", event.threadID, event.messageID)
  };
    
   if ((event.body.toLowerCase() == "Link 423") || (event.body.toLowerCase() == "link 423")) {
     return api.sendMessage("[🌏]Báo cáo nội dung tự tử trên Facebook:\nhttps://www.facebook.com/help/contact/305410456169423", event.threadID, event.messageID)
  };
        
   if ((event.body.toLowerCase() == "Link tự tử") || (event.body.toLowerCase() == "link tự tử")) {
     return api.sendMessage("[🌏]Báo cáo nội dung tự tử trên Facebook:\nhttps://www.facebook.com/help/contact/305410456169423", event.threadID, event.messageID)
  };
    
   if ((event.body.toLowerCase() == "Link 929") || (event.body.toLowerCase() == "link 929")) {
     return api.sendMessage("[🌏]xác minh danh tính Facebook bằng link 929:\nhttps://www.facebook.com/help/contact/515009838910929", event.threadID, event.messageID)
  };
      
   if ((event.body.toLowerCase() == "Link 088") || (event.body.toLowerCase() == "link 088")) {
     return api.sendMessage("[🌏]Tài khoản Facebook của tôi đã bị tưởng nhớ:\nhttps://www.facebook.com/help/contact/292558237463098", event.threadID, event.messageID)
  };
      
   if ((event.body.toLowerCase() == "@mọi người") || (event.body.toLowerCase() == "@all")) {
     return api.sendMessage("[⚠️]Tag ít thôi em[⚠️]", event.threadID, event.messageID)
  };
  
  if ((event.body.toLowerCase() == "có link") ||  (event.body.toLowerCase() == "Có link")) {
    return api.sendMessage("Thử đi r biết=)", threadID);
  };

  if (event.body.indexOf("Link") == 0 || (event.body.indexOf("link") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }