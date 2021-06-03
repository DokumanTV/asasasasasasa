const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let yardım = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 Moderasyon Yardım Komutları 🔸')
.addField("**__Not :__**", "**Botun Rolünü En Üste Almassanız Çalışmaz**")
.setColor('RANDOM')
.setDescription(`
\**🔹${p}yasaklı-tag \** - Eklediğiniz Taga Sahip Olup Sunucuya Gireni Atar Birdaha Girerse Banlar.
\**🔹${p}ban <id-etiket> \** - Etiketlediğiniz Veya İdsini Girdiğiniz Kişiyi Sunucudan Banlar.
\**🔹${p}unban <id> \** - İdsini Girdiğiniz Kişi'nin Sunucudaki Banını Kaldırır.
\**🔹${p}banlist \** - Sunucudaki Banlananları Listeler.
\**🔹${p}bansorgu <id> \** - İdsini Girdiğiniz Kullanıcının Neden Banlandığını Gösterir.
\**🔹${p}kick <id-etiket> \** - Etiketlediğiniz Veya İdsini Girdiğiniz Kullanıcıyı Sunucudan Atar.
\**🔹${p}otorol \** - Sunucuya Girene Ayarladığınız Rolü Otomatik Verir.
\**🔹${p}sayaç \** - Sayaçı Ayarlarsınız.
\**🔹${p}patlat \** - Yazdığınız Kanalı Siler Ve Yeniden Oluşturur.
\**🔹${p}sunucukur \** - Sunucu Kurar.

`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/tDvherygAe) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
if(!yardım) return message.channel.send(embed)
if(yardım == 'moderasyon'){
}
}
exports.conf = {
enabled: true,
aliases: [''],
permLevel: 0
}
exports.help = {
name: 'moderasyon',
description: 'yardım Moderasyon',
usage: 'Moderasyon Yardım'
}