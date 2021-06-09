const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 Küfür Engel 🔸')
.setColor('0x36393e')
.setDescription(`
\**${p}küfürengel \** - Küfür Engeli Açar.
\**${p}küfürlog #kanal \** - Küfürleri Sildiğinde Hangi Küfürü Ettiyse Onu Atacağı Kanal.
`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/tDvherygAe) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
if(!nicat) return message.channel.send(embed)
if(nicat == 'küfürenge'){
}
}
exports.conf = {
enabled: true,
aliases: [''],
permLevel: 0
}
exports.help = {
name: 'küfürengel',
description: ' ',
usage: ''
}