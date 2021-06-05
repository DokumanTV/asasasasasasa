const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**Korkutacağın Kişiyi Etiketlemelisin**");

const Embedmatador = new Discord.MessageEmbed()

    .setDescription(
      `${matador} ` + `**${message.author.username}** Sizi Korkuttu`
    )
    .setImage(
      "https://img-s2.onedio.com/id-54f1b2a3a9f574ad418a6e91/rev-0/w-900/h-384/f-gif/s-5b7fd6d845cda7cf610345ba45be1ea45c83f0c0.gif"
    ) 
    .setFooter("Korkutuldu", client.user.avatarURL)
    

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
