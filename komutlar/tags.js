const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("<a:yildizlar:702807439795421224> `仒` **Ailemize Hoş Geldin** <a:yildizlar:702807439795421224>")

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "tag",
  usage: "tag"
};