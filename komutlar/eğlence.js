const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (client,message,args,db) => {

var p = ayarlar.prefix;
let nicat = args[0]

const embed  = new Discord.MessageEmbed()
.setTitle('🔸 Eğlence Yardım Komutları 🔸')
.setColor('RANDOM')
.setDescription(`
\**🔹${p}yazan-kazanır <kişi> \** - Etiketlediğiniz Kişi İle Bir İddiaya Girersiniz. 3 Saniye Sonrasında Çıkan Kelimeyi İlk Yazmaya Çalışın!
\**🔹${p}xox @Oynayacağınız Kişi\** - Etiketlediğiniz Kişiyle XoX Oynarsınız.
\**🔹${p}duello @Oynayacağınız Kişi\** - Etiketlediğiniz Kişiyle Duello Oynarsınız.
\**🔹${p}kartopu @kişi\** - Etiketlediğin Kişiye Kartopu Atar.
\**🔹${p}tokat @kişi\** - Etiketlediğin Kişiye Tokat Atar.
\**🔹${p}yumruk @kişi\** - Etiketlediğin Kişiye Yumruk Atar.
\**🔹${p}aduketçek @kişi\** - Etiketlediğin Kişiye Aduket Çeker.
\**🔹${p}nah @kişi\** - Etiketlediğin Kişiye Nah Çeker.
\**🔹${p}uçan-tekme @kişi\** - Etiketlediğin Kişiye Uçan Tekme Atar.
\**🔹${p}tekme @kişi\** - Etiketlediğin Kişiye Tekme Atar.
\**🔹${p}korkut @kişi\** - Etiketlediğin Kişiyi Korkutur.
\**🔹${p}ağla @kişi\** - Etiketlediğin Kişiyi Ağlatır.
\**🔹${p}havadurumu\** - Söylediğiniz Ülkenin Hava Durumunu Gösterir.
\**🔹${p}ping\** - Botun Ping'ini Gösterir.
\**🔹${p}iftar\** - Söylediğiniz Ülkede İftar Saatine Ne Kadar Kaldığını Gösterir.
\**🔹${p}balıktut\** - Balık Tutarsınız.
\**🔹${p}fakemesaj @Kişi Yazı\** - Etiketlediğiniz Kişi Yerine Yazıyo Gösterir.
\**🔹${p}yaş-hesapla\** - Yaşınızı Hesaplar.
`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/tDvherygAe) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
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
name: 'eğlence',
description: 'yardım eğlence',
usage: 'Eğlence Yardım'
}