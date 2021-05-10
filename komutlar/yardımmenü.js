const wensamita = require('discord.js');


exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`<:wow:836289529400918046> » ${client.user.username} Yardım Menüsü`)
.addField('<:wow:836289529400918046> » Logo Yazı Komutları', 'f!yardım-yazı')
.addField('<:wow:836289529400918046> » Kelime Oyunu Komutları', 'f!yardım-kelime')
.addField('<:wow:836289529400918046> » 2 Kişilik Oyunlar', 'f!yardım-2-kişilik')
.addField(':game_die: » Eğlence Komutları', 'Yapım Aşaması') 
.addField('<:wow:836289529400918046> » Nsfw Komutları', 'Yapım Aşaması') //.addField('') Bunları çoğaltarak daha fazla satır ekleyebilirsiniz.
.addField('\u200b', "[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot)")//Botun Davet Linki
.addField('\u200b', "[Abone Ol!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")//Youtube Kanalınız Varsa Link
.setDescription('https://im2.ezgif.com/tmp/ezgif-2-782cd0087529.gif')
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