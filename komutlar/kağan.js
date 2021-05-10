const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`
**Kağan Nolur Sahibime Kızma O Bişey Yapmadı Nolur Küfür Etmeyelim Birde Barışın Siz Ben Barıştırıyım**
`)
.addField(":link:・LİNKLER", "[Kabul Değilse Bas!](https://thumbs.gfycat.com/GiantBriefIberiannase-size_restricted.gif) | [Kabulse Bas!](https://i.pinimg.com/originals/dc/9a/ae/dc9aaeff5417e251f671b51a60af0bce.gif)")
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
name: 'kağan',
description: 'yardım yazı',
usage: 'Yazı Yardım'
}