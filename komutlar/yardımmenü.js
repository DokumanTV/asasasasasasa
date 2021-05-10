const wensamita = require('discord.js');


exports.run = function(client, message) {
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`🤖 » ${client.user.username} Yardım Menüsü`)
.addField('\u200b', ":link:・**LİNKLER**")
.addField('\u200b', "[Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot)") .addField('\u200b', "[Abone Ol!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")//Youtube Kanalınız Varsa Link
.addField('\u200b', ":white_check_mark:・**KOMUTLAR** \n ")
.addField('🔥 » Logo Yazı Komutları', 'f!yardım-yazı')
.addField('🔠  » Kelime Oyunu Komutları', 'f!yardım-kelime')
.addField(':crossed_swords: » 2 Kişilik Oyunlar', 'f!yardım-2-kişilik')
.addField(':game_die: » Eğlence Komutları', 'Yapım Aşaması') 
.addField('🥊 » Kavga Komutları', 'Yapım Aşaması') //.addField('') Bunları çoğaltarak daha fazla satır ekleyebilirsiniz.
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
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');



exports.run = async (client, message, params, args) => {
  message.react("✅");
let prefix = ayarlar.prefix;
const yasak = client.emojis.get('794216799850725397')

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`${client.user.username} - Yardım Menüsü`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setTimestamp()
        .setDescription(`**Ping:** ${client.ping} ms! \n**Yapımcım:** <@726482014877777980>\n **Prefixim:** ${prefix}\n Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
        .addField(`<:reee:833237757265969152>・KATEGORİLER`,` ><:reee:833237757265969152>  **[${prefix}eğlence](https://discord.gg/KdFmGGXSws)** : Eğlence Komutları\n><:babyyoda:833237768276672623> **[${prefix}genel](https://discord.gg/KdFmGGXSws)** : Genel Komutları\n><:ping:833237764723441674> **[${prefix}mod](https://discord.gg/KdFmGGXSws)** : Moderasyon Komutları`)
      .addField(":link:・LİNKLER", "> [Davet Linki](https://discord.com/oauth2/authorize?client_id=791213780138852392&scope=bot&permissions=2147483647) \n> [Destek Sunucu](https://discord.gg/KdFmGGXSws")
      .setImage("https://media.giphy.com/media/VDOholAcpxxjLwtNDS/giphy.gif")
  return message.channel.send(yardım);

};



exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['Yardım', 'help', 'Help', 'h', 'y', 'halp', 'hhelp', 'yerdım'],
    permLevel: 0
  };

  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };