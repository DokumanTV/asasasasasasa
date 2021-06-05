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
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fonedio.com%2Fhaber%2Fgece-gece-bakilmamasi-gereken-17-korkunc-gif-294313&psig=AOvVaw1MGWRkDlvV_8tMFkWbCJ0e&ust=1622998993019000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNClorb8gPECFQAAAAAdAAAAABAD"
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
