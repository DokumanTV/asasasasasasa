const Discord = require("discord.js");

exports.run = function(client, message, args) {

const matador = message.mentions.users.first();

if (!matador)

return message.reply("**Ağlayacak Kişiyi Etiketlemelisin**");

const Embedmatador = new Discord.MessageEmbed()

    .setDescription(
      `${matador} ` + `**${message.author.username}** Ne Söylediyse Sizi Ağlattı.`
    )
    .setImage(
      "https://media4.giphy.com/media/8wcFnJ71xxXNJSSxb6/200.gif"
    ) 
    .setFooter("Ağladı", client.user.avatarURL)
    

return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ağlat"],
  permLevel: 0
};

exports.help = {
  name: "ağla",
  description: "",
  usage: "aduket-çek <etiket>"
};
