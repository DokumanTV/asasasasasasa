const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(` Bu Komutu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`anan123_${message.guild.id}`)  
  if (!rol) return message.channel.send(`Üye Rolü Ayarlanmadık`)
  message.channel.send(`Sıfırlandı!`)
db.delete(`anan123_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`Ayarlayacağınız Üye Rolünü Belirtiniz!`)

db.set(`anan123_${message.guild.id}`, rol.id)

message.channel.send(`Size Verilecek Üye Rolünüz ${rol} Olarak Ayarlandı!`)
 
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'botekle-üye-rol'
}