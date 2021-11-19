const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle(':man_detective: Koruma Yardım Komutları :man_detective:')
.addField("**__Not :__**", "**Botun Rolünü En Üste Almassanız Çalışmaz**")
.setColor('0x36393e')
.setDescription(`
\**${p}everyone-here-engel \** - Ever Here Engelini Açar.
\**${p}küfürengel \** - Küfür Engel Açar..
\**${p}antispam \** - KSpam Korumasını Açar.
`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/tDvherygAe) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
.setImage("https://cdn.discordapp.com/attachments/910121358669783040/910121456741007400/standard.gif")
if(!nicat) return message.channel.send(embed)
if(nicat == 'koruma'){
}
}
exports.conf = {
enabled: true,
aliases: [''],
permLevel: 0
}
exports.help = {
name: 'koruma',
description: 'yardım koruma',
usage: 'Koruma Yardım'
}