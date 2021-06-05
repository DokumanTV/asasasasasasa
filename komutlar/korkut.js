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
      "https://img-s1.onedio.com/id-535c21efaf621d1f3522412c/rev-1/w-635/listing/o-50x46/f-jpg-gif-webp-webm-mp4/s-21f3c03ceb6cb4e1004b899d69142ca13bed1e97.webm"
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
