const wensamita = require('discord.js');


exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`<:wow:836289529400918046> » ${client.user.username} Yardım Menüsü`)
.addField('<:wow:836289529400918046> » Logo Yazı Komutları <:wow:836289529400918046>', 'f!yardım-yazı')
.addField('<:wow:836289529400918046> » Kelime Oyunu Komutları <:wow:836289529400918046>', 'f!yardım-kelime')
.addField('<:wow:836289529400918046> » 2 Kişilik Oyunlar <:wow:836289529400918046>', 'f!yardım-2-kişilik')
.addField('<:wow:836289529400918046> » Eğlence Komutları <:wow:836289529400918046>', 'Yapım Aşaması') 
.addField('<:wow:836289529400918046> » Nsfw Komutları <:wow:836289529400918046>', 'Yapım Aşaması') //.addField('') Bunları çoğaltarak daha fazla satır ekleyebilirsiniz.
.addField('\u200b', "[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot)")
message.channel.send(imdat)content://com.android.chrome.FileProvider/images/screenshot/1620554544447-1957926251.gif
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