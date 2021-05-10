const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 2 Kişilik Oyun Yardım Komutları 🔸')
.setColor('RANDOM')
.setDescription(`
\**🔹${p}xox @Oynayacağınız Kişi\** - Etiketlediğiniz Kişiyle XoX Oynarsınız.
\**🔹${p}duello @Oynayacağınız Kişi\** - Etiketlediğiniz Kişiyle Duello Oynarsınız.
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
name: 'yardım-2-kişilik',
description: 'yardım 2 kişilik',
usage: '2 Kişilik Yardım'
}