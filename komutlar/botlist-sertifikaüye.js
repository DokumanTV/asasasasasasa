const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:white_small_square: Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`sa7_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Sertifika Üye Rolü Zaten Ayarlı Değil!`)
  message.channel.send(`:white_small_square: Sertifika Üye Rolü Sıfırlandı!`)
db.delete(`sa7_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`:white_small_square: Ayarlayacağınız Sertifika Üye Rolünü Belirtiniz!`)

db.set(`sa7_${message.guild.id}`, rol.id)

message.channel.send(`:white_small_square: Sertifika üye rolünüz ${rol} Olarak Ayarlandı!`)
 
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'sertifika-üye-rol'
}