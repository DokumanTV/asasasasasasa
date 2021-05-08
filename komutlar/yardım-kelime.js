const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('İşte Logo Yazı Yardım Komutları')
.setColor('RANDOM')
.setDescription(`

  🔸 İşte Kelime Oyunu Yardım Komutları 🔸
 

\**🔹${p}kt-puan\** - Kaç Puanın Olduğunu Gösterir.
\**🔹${p}kelime-oyunu\** - Kelime Oyununu Oynarsınız.
\**🔹${p}kt-sıfırla\** - Tüm Puanları Siler (Yöneticiler Yapabilir)
`)
.addField('\u200b', "[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot)")
.addField('\u200b', "[YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
if(!nicat) return message.channel.send(embed)
if(nicat == 'yazı'){
}
}
exports.conf = {
enabled: true,
aliases: [''],
permLevel: 0
}
exports.help = {
name: 'yardım-yazı',
description: 'yardım yazı',
usage: 'Yazı Yardım'
}