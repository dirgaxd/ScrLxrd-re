import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/sound1.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, {},{ contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: "https://chat.whatsapp.com/Ep8oL3jQe7I8mgqcbwyNg7",
                        mediaType: 2,
                        description: "Sound", 
                        title: 'ScrLxrd - MD',
                        previewType: 0,
                        thumbnail: await (await fetch('https:telegra.ph/file/7ac627539deb51a04c75c.jpg')).buffer(),
                        mediaUrl: "https://telegra.ph/file/7ac627539deb51a04c75c.jpg"  }}})
}
handler.command = ['sound1']
handler.help = ['sound1']

export default handler
