let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '2'
let sn = '5'
let ss = '8'
let sp = '14'
let sv = '45'
//premium
let ph = '3'
let pn = '10'
let pp = '25'
let pv = '45'
let ppm = '60'
let info = `
*⫹⫺ PAYMENT:*
• *Pulsa:* [${ppulsa}] + 5k
• *Dana:* [${pdana}]

–––––– *🐾 Kebijakan* ––––––

➠ Apabila bot di kick dari grup sengaja atau tidak sengaja tidak bisa di join kan lagi (Hangus).
➠ Pembayaran saat ini hanya tersedia via DANA.
➠ Proses transaksi, chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.
➠ *Penting!* simpan nomor owner dan join ke dalam grup official dibawah untuk mengetahui update nomor bot terbaru apabila ter-banned.
➠ Bot bisa di pindah Grup (berlaku untuk yang sewa) kedalam grup lain (hanya 1 grup).
➠ Maaf, untuk yang sudah Transfer tidak dapat di Refund/dibatalkan.
➠ Membeli/Sewa berarti Setuju dalam Persyaratan tersebut.
➠ Promo tidak bisa diperpanjang!

[https://chat.whatsapp.com/Ep8oL3jQe7I8mgqcbwyNg7]

#STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "💸 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sh + 'k (1 minggu)' },
	    {title: "💸 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sn + 'k (1 bulan)' },
	{title: "💸 𝗦𝗧𝗔𝗡𝗗𝗔𝗥", rowId: '.order *Paket:* STANDAR • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + ss + 'k (2 bulan)' },
	{title: "💸 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sp + 'k (4 bulan)' },
	{title: "💸 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 𝗛𝗘𝗠𝗔𝗧", rowId: '.order *Paket:* HEMAT • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 𝗡𝗢𝗥𝗠𝗔𝗟", rowId: '.order *Paket:* NORMAL • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pn + 'k (1 bulan)' },
	{title: "🌟 𝗣𝗥𝗢", rowId: '.order *Paket:* PRO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pp + 'k (4 bulan)' },
	{title: "🌟 𝗩𝗜𝗣", rowId: '.order *Paket:* VIP • Premium', description: '𝗣𝗿𝗶𝗰𝗲: ' + pv + 'k (8 bulan)' },
	]
    }, {
    title: `${htjava} PROMO ✦-------`,
	rows: [
	    {title: "🔖 PROMO • Premium", rowId: '.order *Paket:* PROMO • Premium', description: '𝗣𝗿𝗶𝗰𝗲: 4k (1 bulan)[end 15 jan]' },
	    {title: "🔖 PROMO • Sewa", rowId: '.order *Paket:* PROMO • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: 2k (1 bulan)[end 15 jan]' },
	{title: "🔖 TRIAL • Premium", rowId: '.order *Paket:* FREE • Premium', description: '𝗣𝗿𝗶𝗰𝗲: Free (1 Hari)' },
	{title: "🔖 TRIAL • Sewa", rowId: '.order *Paket:* Trial • Sewa', description: '𝗣𝗿𝗶𝗰𝗲: Free (1 Hari)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler