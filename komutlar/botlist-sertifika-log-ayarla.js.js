const Discord = require("discord.js");
const db = require("wio.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.MessageEmbed()
.setColor('#2f3136')
.setDescription('**Log kanalını ayarlamak için `Yönetici` İznine sahip olmalısın!')
return message.channel.send(embed)
}


if (args[0] === 'sıfırla') {
let rol = db.fetch(`sa9_${message.guild.id}`)  
  if (!rol) return message.channel.send(`:white_small_square: Sertifika Ekleme Log Zaten Bulunmuyor!`)
  message.channel.send(`:white_small_square: Sertifika Ekleme Log Sıfırlandı!`)
db.delete(`sa9_${message.guild.id}`)
  return;
}

let kinal = db.fetch(`sa9_${message.guild.id}`)
if(db.has(`sa9_${message.guild.id}`)) {
const embed = new Discord.MessageEmbed()
.setColor('#2f3136')
.setDescription(`**Sertifika Ekleme Log kanalı <#${kinal}> kanalına ayarlı! \nKapatmak için** \`${ayarlar.prefix}sertifika-ekleme-log sıfırla\``)
return message.channel.send(embed)
}
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.MessageEmbed()
.setColor('#2f3136')
.setDescription(`** Sertifika isteme Log kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}sertifika-ekleme-log #kanal\`**`)
return message.channel.send(embed)
}
db.set(`sa9_${message.guild.id}`, kanal.id);

const embed = new Discord.MessageEmbed()
.setColor('#2f3136')
.setDescription(`** Sertifika ekleme Log kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['sertifikaeklemelogkanal','sertifikaeklemelog'],
permLevel: 0
};
exports.help = {
name: 'sertifika-ekleme-log',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'giriş-kanal #kanal'
};