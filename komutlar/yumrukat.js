const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://media.tenor.com/images/21e1315e35fe0d0a185f12f5b5bf0d22/tenor.gif"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Yumruk Atıldı!`)
        .setColor("0x36393e")
        .setFooter(`Boş Durmıyacaksın Heralde ${member}`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yumruk"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'yumruk-at',
    description: 'Etiketlediniz Kisiye Yumruk Atar.',
    usage: 'yumruk-at'
   }