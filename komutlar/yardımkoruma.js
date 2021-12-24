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
\**${p}isimreklamkoruma aç/kapat \** -  İsminde Reklam Olan Kişileri Banlar.
\**${p}napimengel aç/kapat \** - Napim Engeli Açar.
\**${p}reklamengel aç/kapat \** - Reklam Engel Açar.
\**${p}küfürengel aç/kapat \** - Küfür Engel Açar.
\**${p}banlimit <aç/kapat> <sayı> \** - Ban Limitine 2 Yazdığınızda,Sunucuda Sadece 2 Ban Atılabilir. 3.'yü Attıklarında Rolleri Alınır.
`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/Jycf7FEZAa) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w) | [Oy Ver!](https://top.gg/bot/847022035510886430/vote)")
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