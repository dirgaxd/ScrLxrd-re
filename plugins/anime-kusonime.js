import fetch from 'node-fetch'
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('https://restapi.frteam.xyz/kusonime?apikey=lobuck&query=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `Judul : "${json.title}"\n\n Genre     : *${json.genre}*
Status    : *${json.status_anime}*
Produser  : *${json.producers}*
Rate      : *${json.score}*
View     : *${json.view}*
Season : *${json.season}*
Rilis     : *${json.released}*
Total eps : *${json.total_episode}*
Durasi    : *${json.duration}*
Sinopsis  : *${json.description}*


Link Download:
• *360p*: 
-${json.result[360P]('\n-')}

• *480p*: 
-${json.result[480P]('\n-')}

• *720p*: 
-${json.result[720P]('\n-')}
 `
     conn.sendFile(m.chat,json.thumb, 'image.jpg', raku, m)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i

export default handler