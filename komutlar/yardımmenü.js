const wensamita = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
    message.react("✅");
let prefix = ayarlar.prefix;
const yasak = client.emojis.get('794216799850725397')
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`🤖 » ${client.user.username} Yardım Menüsü`)
  .setTimestamp()
        .setDescription(`**Ping:** ${client.ping} ms! \n**Yapımcım:** <@726482014877777980>\n **Prefixim:** ${prefix}\n Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
        .addField(`:white_check_mark: ・KATEGORİLER`,` > :fire: **[${prefix}yardım-yazı](https://discord.gg/tDvherygAe)** :  Logo Yazı Komutları\n>:capital_abcd: **[${prefix}yardım-kelime](https://discord.gg/tDvherygAe)** : Kelime Oyunu Komutları\n>:crossed_swords: **[${prefix}yardım-2-kişilik](https://discord.gg/tDvherygAe)** :  2 Kişilik Oyunlar`)
      .addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot) \n> [Destek Sunucu](https://discord.gg/tDvherygAe")
      .setImage("https://im2.ezgif.com/tmp/ezgif-2-782cd0087529.gif")
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
