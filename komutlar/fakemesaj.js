const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  try {
    let kişi = message.mentions.users.first();
    const hataembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .addField("HATA:", "Lütfen Birisini Etiketle ve Bir Yazı Yaz!");
    if (message.mentions.users.size < 1) return message.reply(hataembed);
    let yazi = args.slice(1).join(" ");
    if (!yazi) return message.reply(hataembed);
    message.delete();

    message.channel
      .createWebhook(kişi.username, {
        avatar: kişi.avatarURL()
      })
      .then(hook => {
        hook.send(yazi);
        setTimeout(function() {
          hook.delete();
        }, 3000);
      })
      .catch(console.error);
  } catch (err) {
    console.error(err)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "fakemesaj",
  description: "fakemesaj",
  usage: "fakemesaj"
};