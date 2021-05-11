const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://tenor.com/view/sad-crying-tears-baby-gif-8822845"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member} Ağlatıldı!`)
        .setColor("#FF69B4")
        .setFooter(`Boş Durmıyacaksın Heralde ${member}`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["ağla"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'agla',
    description: 'Etiketlediniz Kisiye Tokat Atar.',
    usage: 'tokat-at'
   }