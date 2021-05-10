const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 Kelime Oyunu Yardım Komutları 🔸')
.setColor('RANDOM')
.setDescription(`
\**🔹${p}kt-puan\** - Kaç Puanın Olduğunu Gösterir.
\**🔹${p}kelime-oyunu\** - Kelime Oyununu Oynarsınız.
\**🔹${p}kt-sıfırla\** - Tüm Puanları Siler (Yöneticiler Yapabilir)
`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot) | [Destek Sunucu!](https://discord.gg/tDvherygAe) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
.setImage("https://im2.ezgif.com/tmp/ezgif-2-782cd0087529.gif")
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
name: 'yardım-kelime',
description: 'yardım kelime',
usage: 'Kelime Yardım'
}