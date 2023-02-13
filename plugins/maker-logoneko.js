import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Proses...')
  let res = `https://restapi.frteam.xyz/girlneko?nama=${response[0]}&nama2=${response[1]}&apikey=lobuck`
  conn.sendFile(m.chat, res, 'neko.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['logoneko'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(logoneko)$/i
handler.limit = true

export default handler