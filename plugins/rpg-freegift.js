let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'xlaw' || args[0] == 'lxrd' || args[0] == '1223219' || args[0] == 'jjst' || args[0] == 'kykpr' || args[0] == 'hfisb') {

    if (new Date - global.db.data.users[m.sender].lastgift > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n10000 XP ✨\n 1 Limit! 🎫\n100000 Money 💹\n1 Potion 🥤', m)
    global.db.data.users[m.sender].exp += 10000
    global.db.data.users[m.sender].limit += 100
    global.db.data.users[m.sender].money +=100000
    global.db.data.users[m.sender].potion += 10
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali ! dan kode hanya bisa di pakai sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan daftar terlebih dahulu untuk mendapatkan kodegift gratis!\n\nKetik !daftar namamu|umurmu`, m)
    }
}
handler.help = ['freegift <kode>']
handler.tags = ['rpg']
handler.command = /^(freegift)$/i

export default handler