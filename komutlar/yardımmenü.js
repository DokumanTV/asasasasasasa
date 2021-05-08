const wensamita = require('discord.js');


exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`» ${client.user.username} Yardım Menüsü`)
.addField('» Logo Yazı Komutları', 'f!yardım-yazı')
.addField('» Kelime Oyunu Komutları', 'f!yardım-kelime')
.addField('» Genel Komutlar', '!genel')
.addField('» Ekstra Komutlar', '!ekstra')
.addField('» Nsfw Komutları', '!nsfw') //.addField('') Bunları çoğaltarak daha fazla satır ekleyebilirsiniz.
.setFooter('Made By. DökümanTV')
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