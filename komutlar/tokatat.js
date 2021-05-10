const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://media1.giphy.com/media/26AHxQqwx7ZN0fcje/giphy.gif"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Yumruk Atıldı!`)
        .setColor("#FF69B4")
        .setFooter(`Boş Durmıyacaksın Heralde ${member}`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tokat"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'tokat-at',
    description: 'Etiketlediniz Kisiye Tokat Atar.',
    usage: 'tokat-at'
   }