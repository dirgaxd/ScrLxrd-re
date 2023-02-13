let handler = async (m, { conn }) => {
let info = `
*${htki} CHEAT ${htka}*

Anjay nge cheat awkwk:v
`
const sections = [
   {
	title: `✃ CHEAT MENU`,
	rows: [
	    {title: "🌀Cheat Money", rowId: '.cheatmoney', description: '9999999999 Money' },
	    {title: "🌀Cheat Exp", rowId: '.cheatexp', description: '9999999999 Exp' },
	{title: "🌀Cheat Legendary", rowId: '.cheatlegendary', description: '9999999999 Legendary' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "🔮Cheat",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.premium = true

export default handler