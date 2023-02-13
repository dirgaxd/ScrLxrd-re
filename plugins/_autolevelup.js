import { canLevelUp } from '../lib/levelling.js'
export function before(m) {
    let user = global.db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        m.reply(`
ʟᴇᴠᴇʟᴇᴅ ᴜᴩ﹗ 
 • 🏅 ᴩʀᴇᴠɪᴏᴜs ʟᴇᴠᴇʟ : ${before} 
 • 🏅 ɴᴇᴡ ʟᴇᴠᴇʟ : ${user.level} 
 • 🏅 ʀᴏʟᴇ : ${user.role} 
 ᴜsᴇ *.profile* ᴛᴏ ᴄʜᴇᴄᴋ
	`.trim())
    }
}
export const disabled = true