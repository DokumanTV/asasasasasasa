const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
    message.react("✅");
let prefix = ayarlar.prefix;
const imdat = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('0x36393e')
.setTitle(`🤖 » ${client.user.username} Yardım Menüsü`)
        .setDescription(`**Ping:** ${client.ws.ping} ms! \n**Yapımcım:** <@726482014877777980>\n **Prefixim:** ${prefix}\n Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
        .addField(`:white_check_mark: ・KATEGORİLER`,` > :mailbox_with_mail: **[${prefix}kayıt](https://www.youtube.com/DökümanTV)** :  Kayıt Komutları\n> :desktop: **[${prefix}moderasyon](https://www.youtube.com/dökümantv)** : Moderasyon Komutları\n> :man_detective: **[${prefix}koruma](https://www.youtube.com/dökümantv)** : Sunucu Koruma Komutları\n> 🎡 **[${prefix}eğlence](https://www.youtube.com/dökümantv)** :  Eğlence Komutları\n> :boy: **[${prefix}kullanıcı](https://www.youtube.com/dökümantv)** :  Kullanıcı Komutları\n> 🎉 **[${prefix}çekiliş](https://www.youtube.com/dökümantv)** :  Çekiliş Komutları (Yapılıyor)`)
      .addField(`:speech_balloon: ・DİĞER KODLAR`, `> :one: **[${prefix}radyo](https://www.youtube.com/DökümanTV)** : Radyo Açarsınız\n> :two: **[${prefix}uptime](https://www.youtube.com/DökümanTV)** : Botunuzu Uptime Edersiniz`)
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=847022035510886430&scope=bot&permissions=8589934591) | [Destek Sunucu!](https://discord.gg/Jycf7FEZAa) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
.setImage("https://cdn.discordapp.com/attachments/910121358669783040/910121456741007400/standard.gif")
.setTimestamp()
message.channel.send(imdat)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["help", "y", "h"], 
  permLevel: 0 
}
exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım.js'
};
;