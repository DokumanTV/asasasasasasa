const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle(':mailbox_with_mail: Kayıt Yardım Komutları :mailbox_with_mail:')
.setColor('0x36393e')
.setDescription(`
\**${p}alınacak-rol <etiket>\** - Kayıt Olununca Alınacak Rol.
\**${p}erkek-rol <etiket>\** - Erkek Rolünü Ayarlarsınız.
\**${p}kız-rol <etiket>\** - Kız Rolünü Ayarlarsınız.
\**${p}kayıtçı-rol <etiket>\** - Kayıtçı Rolünü Ayarlarsınız.
\**${p}kayıt-kanal <etiket>\** - Kayıt Kanalı Ayarlarsınız.
\**${p}kayıtçı-al <etiket>\** - Etiketledğiniz Kişiden Kayıtçı Rolünü Alır.
\**${p}kayıtçı-ver <etiket>\** - Etiketledğiniz Kişiye Kayıtçı Rolünü Verir.
\**${p}isimler <etiket>\** - Etiketledğiniz Kişinin Daha Önce Hangi İsimle Kayıt Olduğunu Gösterir.
\**${p}e <etiket> <isim> <yaş>\** - Erkek Kayıt Edersiniz.
\**${p}k <etiket> <isim> <yaş>\** - Kız Kayıt Edersiniz.
`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/Jycf7FEZAa) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w) | [Oy Ver!](https://top.gg/bot/847022035510886430/vote)")
.setImage("https://cdn.discordapp.com/attachments/910121358669783040/910121456741007400/standard.gif")
if(!nicat) return message.channel.send(embed)
if(nicat == 'moderasyon'){
}
}
exports.conf = {
enabled: true,
aliases: [],
permLevel: 0
}
exports.help = {
name: 'kayıt',
description: 'yardım kayıt',
usage: 'Kayıt Yardım'
}