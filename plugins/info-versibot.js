import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
  const ultah = new Date('October 12 2023 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let info = `ScrLxrd - MD\n\n*Version:* Public Edition V5`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumb },
            jpegThumbnail: await (await fetch(thumb)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: titlebot,
            footer: wm,
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Sewa Bot? Klik',
                        url: 'https://wa.me/6283821123163'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Ke Official Grup',
                        url: 'https://chat.whatsapp.com/Ep8oL3jQe7I8mgqcbwyNg7',
                    }
                },
            ]
        }
        conn.sendMessage(m.chat, message)
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://chat.whatsapp.com/Ep8oL3jQe7I8mgqcbwyNg7',
                        mediaType: 2,
                        description: `© XLaw XD`,
                        title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `© XLaw XD`,          previewType: 0,
                        thumbnail: await (await fetch('https:telegra.ph/file/7ac627539deb51a04c75c.jpg')).buffer(),
                        mediaUrl: 'https:telegra.ph/file/7ac627539deb51a04c75c.jpg'
                        
                      }}
})
  }
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler
