const wensamita = require('discord.js');


exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`🤖 » ${client.user.username} Yardım Menüsü`)
.addField('\u200b', "[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot)")//Botun Davet Linki
.addField('\u200b', "[Abone Ol!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")//Youtube Kanalınız Varsa Link
.addField('🔥 » Logo Yazı Komutları', 'f!yardım-yazı')
.addField('🔠  » Kelime Oyunu Komutları', 'f!yardım-kelime')
.addField(':crossed_swords: » 2 Kişilik Oyunlar', 'f!yardım-2-kişilik')
.addField(':game_die: » Eğlence Komutları', 'Yapım Aşaması') 
.addField('🥊 » Kavga Komutları', 'Yapım Aşaması') //.addField('') Bunları çoğaltarak daha fazla satır ekleyebilirsiniz.
.setDescription(`:link:・LİNKLER`)
.setImage('https://im2.ezgif.com/tmp/ezgif-2-782cd0087529.gif')
.setTimestamp()
message.channel.send(imdat)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help", "y", "h"], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım.js'
};