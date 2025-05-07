const sendWaiting = true; // bật hoặc tắt gửi tin nhắn "đang tạo hình ảnh, vui ồng chờ đợi...";
const textWaiting = "Đang khởi tạo hình ảnh, vui lòng chờ đợi trong giây lát";
const fonts = "/cache/Play-Bold.ttf"
const downfonts = "https://drive.google.com/u/0/uc?id=1uni8AiYk7prdrC7hgAmezaGTMH5R8gW8&export=download"
const fontsName = 40
const fontsLink = 30
const fontsInfo = 25
const fontsUid = 30
const colorName = "#00FFFF"

module.exports.config = {
  name: "cardme",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Dũngkon",
  description: "Tạo card thông tin người dùng facebook",
  commandCategory: "Thông tin",
  usages: "cardinfo",
  cooldowns: 10,
  dependencies: {
    canvas: "",
    axios: "",
    "fs-extra": "",
  },
};

module.exports.circle = async (image) => {
  const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}
module.exports.run = async function ({ api, event, args, Users }) {
  var _0xee18=["\x63\x72\x65\x64\x69\x74\x73","\x63\x6F\x6E\x66\x69\x67","\x44\u0169\x6E\x67\x6B\x6F\x6E","\x54\x68\x61\x79\x20\x63\x72\x65\x64\x69\x74\x73\x20\u0103\x6E\x20\x63\u1EE9\x74\x20\xE0\x20\u0111\u1ED5\x69\x20\x6C\u1EA1\x69\x20\x6E\x68\x61\x6E\x68\x20\x63\xF2\x6E\x20\x6B\u1ECB\x70","\x74\x68\x72\x65\x61\x64\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x49\x44","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];if((this[_0xee18[1]][_0xee18[0]])!= _0xee18[2]){return api[_0xee18[6]](`${_0xee18[3]}`,event[_0xee18[4]],event[_0xee18[5]])}
  let { senderID, threadID, messageID } = event;
  const { loadImage, createCanvas } = require("canvas");
  const request = require('request');
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const Canvas = global.nodemodule["canvas"];
  let pathImg = __dirname + `/cache/1.png`;
  let pathAvata = __dirname + `/cache/2.png`;
  /*                 */
 var _0xda56=["\x74\x79\x70\x65","\x6D\x65\x73\x73\x61\x67\x65\x5F\x72\x65\x70\x6C\x79","\x73\x65\x6E\x64\x65\x72\x49\x44","\x6D\x65\x73\x73\x61\x67\x65\x52\x65\x70\x6C\x79","\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F\x56\x32","\x64\x61\x74\x61","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x72\x61\x70\x68\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F","\x2F\x70\x69\x63\x74\x75\x72\x65\x3F\x68\x65\x69\x67\x68\x74\x3D\x31\x35\x30\x30\x26\x77\x69\x64\x74\x68\x3D\x31\x35\x30\x30\x26\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E\x3D\x36\x36\x32\x38\x35\x36\x38\x33\x37\x39\x25\x37\x43\x63\x31\x65\x36\x32\x30\x66\x61\x37\x30\x38\x61\x31\x64\x35\x36\x39\x36\x66\x62\x39\x39\x31\x63\x31\x62\x64\x65\x35\x36\x36\x32","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x2E\x69\x6D\x67\x75\x72\x2E\x63\x6F\x6D\x2F\x58\x61\x31\x79\x62\x52\x41\x2E\x6A\x70\x67","\x75\x74\x66\x2D\x38","\x66\x72\x6F\x6D","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x63\x69\x72\x63\x6C\x65","","\x65\x78\x69\x73\x74\x73\x53\x79\x6E\x63","\x77\x69\x64\x74\x68","\x68\x65\x69\x67\x68\x74","\x32\x64","\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74","\x64\x72\x61\x77\x49\x6D\x61\x67\x65","\x67\x65\x6E\x64\x65\x72","\x6D\x61\x6C\x65","\x4E\x61\x6D","\x66\x65\x6D\x61\x6C\x65","\x4E\x75\u031B\u0303","\x50\x72\x69\x76\x61\x74\x65","\x62\x69\x72\x74\x68\x64\x61\x79","\x72\x65\x6C\x61\x74\x69\x6F\x6E\x73\x68\x69\x70\x5F\x73\x74\x61\x74\x75\x73","\x6E\x61\x6D\x65","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x6F\x6D\x65\x74\x6F\x77\x6E","\x50\x6C\x61\x79\x2D\x42\x6F\x6C\x64","\x72\x65\x67\x69\x73\x74\x65\x72\x46\x6F\x6E\x74"];if(event[_0xda56[0]]== _0xda56[1]){uid= event[_0xda56[3]][_0xda56[2]]}else {uid= event[_0xda56[2]]};const res= await api[_0xda56[4]](uid);let getAvatarOne=( await axios[_0xda56[9]](`${_0xda56[6]}${uid}${_0xda56[7]}`,{responseType:_0xda56[8]}))[_0xda56[5]];let bg=( await axios[_0xda56[9]](encodeURI(`${_0xda56[10]}`),{responseType:_0xda56[8]}))[_0xda56[5]];fs[_0xda56[13]](pathAvata,Buffer[_0xda56[12]](getAvatarOne,_0xda56[11]));avataruser=  await this[_0xda56[14]](pathAvata);fs[_0xda56[13]](pathImg,Buffer[_0xda56[12]](bg,_0xda56[11]));if(!fs[_0xda56[16]](__dirname+ `${_0xda56[15]}${fonts}${_0xda56[15]}`)){let getfont=( await axios[_0xda56[9]](`${_0xda56[15]}${downfonts}${_0xda56[15]}`,{responseType:_0xda56[8]}))[_0xda56[5]];fs[_0xda56[13]](__dirname+ `${_0xda56[15]}${fonts}${_0xda56[15]}`,Buffer[_0xda56[12]](getfont,_0xda56[11]))};let baseImage= await loadImage(pathImg);let baseAvata= await loadImage(avataruser);let canvas=createCanvas(baseImage[_0xda56[17]],baseImage[_0xda56[18]]);let ctx=canvas[_0xda56[20]](_0xda56[19]);ctx[_0xda56[21]](baseImage,0,0,canvas[_0xda56[17]],canvas[_0xda56[18]]);ctx[_0xda56[21]](baseAvata,44,150,157,157);var gender=res[_0xda56[22]]== _0xda56[23]?_0xda56[24]:res[_0xda56[22]]== _0xda56[25]?_0xda56[26]:_0xda56[27];var birthday=res[_0xda56[28]]?`${_0xda56[15]}${res[_0xda56[28]]}${_0xda56[15]}`:_0xda56[27];var love=res[_0xda56[29]]?`${_0xda56[15]}${res[_0xda56[29]]}${_0xda56[15]}`:_0xda56[27];var location=res[_0xda56[31]][_0xda56[30]]?`${_0xda56[15]}${res[_0xda56[31]][_0xda56[30]]}${_0xda56[15]}`:_0xda56[27];var hometown=res[_0xda56[32]][_0xda56[30]]?`${_0xda56[15]}${res[_0xda56[32]][_0xda56[30]]}${_0xda56[15]}`:_0xda56[27];Canvas[_0xda56[34]](__dirname+ `${_0xda56[15]}${fonts}${_0xda56[15]}`,{family:_0xda56[33]})
  ctx.font = `${fontsName}px Play-Bold`;
  ctx.fillStyle = "#FF0000";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`${res.name}`, 172, 100);
  ctx.font = `${fontsInfo}px Play-Bold`;
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  fontSize = 20;
  ctx.fillText(`Giới tính: ${gender}`, 260, 217);
  ctx.fillText(`Follow: ${res.follow}`, 260, 257);
  ctx.fillText(`Mối quan hệ: ${love}`, 260, 295);
  ctx.fillText(`Sinh nhật: ${birthday}`, 260, 177);
  ctx.fillText(`Nơi ở: ${location}`, 260, 333);
  ctx.fillText(`Quê hương: ${hometown}`, 260, 372);
  ctx.font = `${fontsUid}px Play-Bold`;
  ctx.fillStyle = "#000033";
  ctx.textAlign = "start";
  fontSize = 20;  
  ctx.fillText(`${uid}`, 197, 423);
  ctx.font = `${fontsLink}px Play-Bold`;
  ctx.fillStyle = "#FF9999";
  ctx.textAlign = "start";
  fontSize = 20;  
  //ctx.fillText(`» Profile: ${res.link}`, 200, 400);
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
};

 