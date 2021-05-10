const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://steamuserimages-a.akamaihd.net/ugc/821188503831080043/B6783F1C6A7F1FA441F1DED04D050596102B5C2C/"];

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