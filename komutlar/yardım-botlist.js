const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('???? Botlist Yard覺m Komutlar覺 ????')
.setColor('0x36393e')
.setDescription(`
------------------**BOT 襤LE 襤LG襤L襤 OLAN KOMUTLAR**--------------------

\**${p}bot-ekleme-log s覺f覺rla\** - ??yenin Hangi kanalda botu ekleyeni kapat覺r!
\**${p}botlog #kanal\** - Botun reddedilip onaylanan bekliyenleri g繹z羹ken logu ayarlar!
\**${p}botlog s覺f覺rla\** - Botun reddedilip onaylanan bekliyenleri g繹z羹ken logu s覺f覺rlar!
\**${p}botlist-yetkili-rol\** - Botlistte botu onayl覺cak reddedicek rol羹 ayarlar!
\**${p}botlist-yetkili-rol s覺f覺rla\** - Botlar覺 onayl覺cak reddedicek rol羹 s覺f覺rlar
\**${p}yetkili-log #kanal\** - Botlist yetkili log kanal ayarlar
\**${p}yetkili-log s覺f覺rla\** - Botlist Yetkili Log kanal覺 s覺f覺rlar
\**${p}botekle <id> <prefix>\** - ??ye botunu ekliyebilir
\**${p}botekle-羹ye-rol\** - Botu Onaylay覺nca botun sahibine vericek rol羹 ayarlar
\**${p}botekle-羹ye-rol s覺f覺rla\** - Botu Onaylay覺nca botun sahibine vericek rol羹 s覺f覺rlar
\**${p}botekle-bot-rol\** - Botu Onaylay覺nca botun kendisine vericek rol羹 ayarlar
\**${p}botekle-bot-rol s覺f覺rla\** - Botu Onaylay覺nca botun kendisine vericek rol羹 s覺f覺rlar
--------------**SERT襤F襤KA 襤LE 襤LG襤L襤 OLAN KOMUTLAR**----------------

\**${p}sertifika\** - Botunuza Sertifika basvurusu yapars覺n覺z
\**${p}sertifika-onay <botsahipid> <botid>\** - Botu Onaylanan Ki??inin Sertifika Ba??vurusunu Onaylar
\**${p}sertifika-reddet <botsahipid> <botid> <sebeb>\** - Botu Onaylanan Ki??inin Sertifika Ba??vurusunu Reddeder.
\**${p}sertifika-羹ye-rol @rol\** - Sertifika onaylay覺nca bot sahibine verilcek olan rol羹 ayarlar.
\**${p}sertifika-羹ye-rol s覺f覺rla\** - Sertifika onaylay覺nca bot sahibine verilcek olan rol羹 s覺f覺rlar.
\**${p}sertifika-bot-rol @rol\** - Sertifika onaylay覺nca bot sahibine verilcek olan rol羹 ayarlar.
\**${p}sertifika-bot-rol s覺f覺rla\** - Sertifika onaylay覺nca bot sahibine verilcek olan rol羹 s覺f覺rlar.
\**${p}sertifika-ekleme-log #kanal\** - Hangi Kanalda sadece sertifika basvurusu yap覺lcan覺 ayarlar.
\**${p}sertifika-ekleme-log s覺f覺rla\** - Hangi Kanalda sadece sertifika basvurusu yap覺lcan覺 s覺f覺rlar.
\**${p}sertifikalog #kanal\** - Sertifikan覺n reddedilip onayland覺g覺n覺n at覺cag覺 logu ayarlar.
\**${p}sertifikalog s覺f覺rla\** - Sertifikan覺n reddedilip onayland覺g覺n覺n at覺cag覺 logu s覺f覺rlar.
`)

.addField(":link:??腿襤NKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/Jycf7FEZAa) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w) | [Oy Ver!](https://top.gg/bot/847022035510886430/vote)")
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
description: 'yard覺m kay覺t',
usage: 'Kay覺t Yard覺m'
}