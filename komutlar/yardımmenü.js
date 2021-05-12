const wensamita = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message) {
    message.react("✅");
let prefix = ayarlar.prefix;
const imdat = new wensamita.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setColor('RANDOM')
.setTitle(`🤖 » ${client.user.username} Yardım Menüsü`)
        .setDescription(`**Ping:** ${client.ws.ping} ms! \n**Yapımcım:** <@726482014877777980>\n **Prefixim:** ${prefix}\n Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
        .addField(`:white_check_mark: ・KATEGORİLER`,` > :fire: **[${prefix}yardım-yazı](https://discord.gg/tDvherygAe)** :  Logo Yazı Komutları\n> :capital_abcd: **[${prefix}yardım-kelime](https://discord.gg/tDvherygAe)** : Kelime Oyunu Komutları\n> :crossed_swords: **[${prefix}yardım-2-kişilik](https://discord.gg/tDvherygAe)** :  2 Kişilik Oyunlar\n> :boxing_glove: **[${prefix}yardım-kavga](https://discord.gg/tDvherygAe)** :  Dövüşme / Kavga Komutları\n> 🎉 **[${prefix}yardım-efect](https://discord.gg/tDvherygAe)** :  Profil Fotoğrafı Efect Komutları`)
      .addField(`:speech_balloon: ・DİĞER KODLAR`, `> :one: **[${prefix}sunucu-kur](https://discord.gg/tDvherygAe)** :  Sunucu Kurar (Rollerin İzinlerini Ayarlayın)\n> :one: **[${prefix}sunucu-kur](https://discord.gg/tDvherygAe)** :  Botun Ekli Olduğu Sunucuları Listeler.
.addField(":link:・LİNKLER", "> [Botu Ekle!](https://discord.com/oauth2/authorize?client_id=791213780138852392&permissions=8&scope=bot) | [Destek Sunucu!](https://discord.gg/tDvherygAe) | [YouTube!](https://youtube.com/channel/UC9c6nECzH3N2tHELi1Bl47w)")
.setImage("https://im2.ezgif.com/tmp/ezgif-2-782cd0087529.gif")
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
