const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 Logo Yazı Yardım Komutları 🔸')
.setColor('RANDOM')
.setDescription(`

  🔸 Logo Yazı Yardım Komutları 🔸
 

\**🔹${p}xox @Oynayacağınız Kişi\** - Etiketlediğiniz Kişiyle XoX Oynarsınız.
\**🔹${p}duello @Oynayacağınız Kişi\** - Etiketlediğiniz Kişiyle Duello Oynarsınız.
\**🔹${p}yazı-neon Logoda Yazıcak Şey\** - Neon Logo Yazı.
\**🔹${p}yazı-anime Logoda Yazıcak Şey\** - Anime Logo .
\**🔹${p}yazı-altın Logoda Yazıcak Şey\** - Altın Logo Yazı.
\**🔹${p}yazı-dracula Logoda Yazıcak Şey\** - Dracula Logo Yazı.
\**🔹${p}yazı-everest Logoda Yazıcak Şey\** - Everest Logo Yazı.
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
name: 'yardım-2-kişilik',
description: 'yardım 2 kişilik',
usage: '2 Kişilik Yardım'
}