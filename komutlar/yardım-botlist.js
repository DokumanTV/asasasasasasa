const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🤖 Botlist Yardım Komutları 🤖')
.setColor('0x36393e')
.setDescription(`
------------------**BOT İLE İLGİLİ OLAN KOMUTLAR**--------------------

\**${p}bot-ekleme-log sıfırla\** - Üyenin Hangi kanalda botu ekleyeni kapatır!
\**${p}botlog #kanal\** - Botun reddedilip onaylanan bekliyenleri gözüken logu ayarlar!
\**${p}botlog sıfırla\** - Botun reddedilip onaylanan bekliyenleri gözüken logu sıfırlar!
\**${p}botlist-yetkili-rol\** - Botlistte botu onaylıcak reddedicek rolü ayarlar!
\**${p}botlist-yetkili-rol sıfırla\** - Botları onaylıcak reddedicek rolü sıfırlar
\**${p}yetkili-log #kanal\** - Botlist yetkili log kanal ayarlar
\**${p}yetkili-log sıfırla\** - Botlist Yetkili Log kanalı sıfırlar
\**${p}botekle <id> <prefix>\** - Üye botunu ekliyebilir
\**${p}botekle-üye-rol\** - Botu Onaylayınca botun sahibine vericek rolü ayarlar
\**${p}botekle-üye-rol sıfırla\** - Botu Onaylayınca botun sahibine vericek rolü sıfırlar
\**${p}botekle-bot-rol\** - Botu Onaylayınca botun kendisine vericek rolü ayarlar
\**${p}botekle-bot-rol sıfırla\** - Botu Onaylayınca botun kendisine vericek rolü sıfırlar
--------------**SERTİFİKA İLE İLGİLİ OLAN KOMUTLAR**----------------

\**${p}sertifika\** - Botunuza Sertifika basvurusu yaparsınız
\**${p}sertifika-onay <botsahipid> <botid>\** - Botu Onaylanan Kişinin Sertifika Başvurusunu Onaylar
\**${p}sertifika-reddet <botsahipid> <botid> <sebeb>\** - Botu Onaylanan Kişinin Sertifika Başvurusunu Reddeder.
\**${p}sertifika-üye-rol @rol\** - Sertifika onaylayınca bot sahibine verilcek olan rolü ayarlar.
\**${p}sertifika-üye-rol sıfırla\** - Sertifika onaylayınca bot sahibine verilcek olan rolü sıfırlar.
\**${p}sertifika-bot-rol @rol\** - Sertifika onaylayınca bot sahibine verilcek olan rolü ayarlar.
\**${p}sertifika-bot-rol sıfırla\** - Sertifika onaylayınca bot sahibine verilcek olan rolü sıfırlar.
\**${p}sertifika-ekleme-log #kanal\** - Hangi Kanalda sadece sertifika basvurusu yapılcanı ayarlar.
\**${p}sertifika-ekleme-log sıfırla\** - Hangi Kanalda sadece sertifika basvurusu yapılcanı sıfırlar.
\**${p}sertifikalog #kanal\** - Sertifikanın reddedilip onaylandıgının atıcagı logu ayarlar.
\**${p}sertifikalog sıfırla\** - Sertifikanın reddedilip onaylandıgının atıcagı logu sıfırlar.
`)

.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/Jycf7FEZAa) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w) | [Oy Ver!](https://top.gg/bot/847022035510886430/vote)")
.setImage("https://cdn.discordapp.com/attachments/910121358669783040/910121456741007400/standard.gif")
if(!nicat) return message.channel.send(embed)
if(nicat == 'botlist'){
}
}
exports.conf = {
enabled: true,
aliases: [],
permLevel: 0
}
exports.help = {
name: 'botlist',
description: 'yardım kayıt',
usage: 'Kayıt Yardım'
}