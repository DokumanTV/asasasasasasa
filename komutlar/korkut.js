const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const Embedmatador = new Discord.MessageEmbed()

    .setDescription(
      `${matador} ` + `**${message.author.username}** Sizi Korkuttu`
    )
    .setImage(
      "https://tenor.com/view/scary-conjuring-black-lady-horror-gif-5252759"
    ) 
    .setFooter("Boş Durmıyacaksın Heralde Sende Korkut", client.user.avatarURL)
    

return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["korkut"],
  permLevel: 0
};

exports.help = {
  name: "korkut",
  description: "",
  usage: "korkut <etiket>"
};
