const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('İşte Logo Yazı Yardım Komutları')
.setColor('RANDOM')
.setDescription(`

  !!!! İşte Logo Yazı Yardım Komutları !!!!
 

\`${p}yazı-cool Yazı\` - Cool Logo Yazı.
\`${p}yazı-alev Yazı\` - Alevli Logo Yazı.
\`${p}yazı-neon Yazı\` - Neon Logo Yazı.
\`${p}yazı-anime Yazı\` - Anime Logo .
\`${p}yazı-altın Yazı\` - Altın Logo Yazı.
\`${p}yazı-dracula Yazı\` - Dracula Logo Yazı.
\`${p}yazı-everest Yazı\` - Everest Logo Yazı.
`)
.setFooter('"[Botu Ekle](https://discord.com/api/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot")')
.setTimestamp()

if(!nicat) return message.channel.send(embed)
if(nicat !== 'mod' && nicat !== 'eğlence') return message.channel.send(`:x: Yanlış Kategori!`)
if(nicat == 'mod'){
}
}
exports.conf = {
enabled: true,
aliases: [''],
permLevel: 0
}
exports.help = {
name: 'yardım-yazı',
description: 'anticode nicat.dcw',
usage: 'Yazı Yardım'
}