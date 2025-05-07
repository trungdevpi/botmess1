module.exports.config = {
    name: "tagbot",
    version: "1.0.0",
    hasPermssion: 3,
    credits: "ZyrosGenZ, ManhG Fix",
    description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
    commandCategory: "Other",
    usages: "[on/off]",
    cooldowns: 3,
    dependencies: {}
}, module.exports.handleEvent = function ({
    api: a,
    event: e
}) {
    const {
        senderID: t,
        threadID: n,
        messageID: o,
        mentions: s
    } = e, d = global.data.threadData.get(n) || {};
    if (void 0 !== d.tagadmin && 0 == d.tagadmin) return;
    const g = global.config.ADMINBOT,
        i = Object.keys(s);
    if (e.senderID !== a.getCurrentUserID())
        for (const e of g) {
            if (i == e) {
                var r = ["Tag adm sóc  lần nữa xem sóc thông đít m giờ", " tag lần nữa sóc đấm m đấy", "Đã bảo đừng tag adm  mà, mẹ m thích ăn đấm hả😠 mà dám tag adm", "Có chuyện gì thì ib trực tiếp cho adm đéo được à"];
                a.sendMessage({
                    body: r[Math.floor(Math.random() * r.length)]
                }, n, o);
                break
            }
            break
        }
}, module.exports.languages = {
    vi: {
        on: "Bật",
        off: "Tắt",
        successText: "tagadmin thành công"
    },
    en: {
        on: "on",
        off: "off",
        successText: "success!"
    }
}, module.exports.run = async function ({
    api: a,
    event: e,
    Threads: t,
    getText: n
}) {
    const {
        threadID: o,
        messageID: s
    } = e;
    let d = (await t.getData(o)).data;
    return void 0 === d.tagadmin || 0 == d.tagadmin ? d.tagadmin = !0 : d.tagadmin = !1, await t.setData(o, {
        data: d
    }), global.data.threadData.set(o, d), a.sendMessage(`${1==d.tagadmin?n("on"):n("off")} ${n("successText")}`, o, s)
};
