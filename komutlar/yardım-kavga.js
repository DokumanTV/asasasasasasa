const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 Kavga Yardım Komutları 🔸')
.setColor('RANDOM')
.setDescription(`
\**🔹${p}kartopu @kişi\** - Etiketlediğin Kişiye Kartopu Atar.
\**🔹${p}tokat @kişi\** - Etiketlediğin Kişiye Tokat Atar.
\**🔹${p}yumruk @kişi\** - Etiketlediğin Kişiye Yumruk Atar.
\**🔹${p}aduketçek @kişi\** - Etiketlediğin Kişiye Aduket Çeker.
\**🔹${p}nah @kişi\** - Etiketlediğin Kişiye Nah Çeker.
\**🔹${p}uçan-tekme @kişi\** - Etiketlediğin Kişiye Uçan Tekme Atar.
\**🔹${p}tekme\** - Etiketlediğin Kişiye Tekme Atar.
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
name: 'yardım-kavga',
description: 'yardım yazı',
usage: 'Yazı Yardım'
}