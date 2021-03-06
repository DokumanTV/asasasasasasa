const discord = require('discord.js')
const db = require('wio.db')

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:white_small_square: Bu Komudu Kullanabilmen İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`);

if (args[0] === 'sıfırla') {
let rol = db.fetch(`selam12_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Rol Zaten Ayarlanmamış!`)
  message.channel.send(`:white_small_square: Sıfırlandı!`)
db.delete(`selam12_${message.guild.id}`)
  return;
}

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send(`:white_small_square: Ayarlayacağınız Sertifika Verilcek Bot Rolünü Belirtiniz!`)

db.set(`selam12_${message.guild.id}`, rol.id)

message.channel.send(`:white_small_square: Sertifika bot rolünüz ${rol} Olarak Ayarlandı!`)
  
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'sertifika-bot-rol'
}