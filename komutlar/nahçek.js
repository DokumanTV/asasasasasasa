const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://media.tenor.com/images/f1b43cf98f4dfb1fb17d110f0d139e3a/tenor.gif"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Nah Çekildi!`)
        .setColor("#FF69B4")
        .setFooter(`Boş Durmıyacaksın Heralde ${member}`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["nah"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'nahçek',
    description: 'Etiketlediniz Kisiye Tokat Atar.',
    usage: 'tokat-at'
   }