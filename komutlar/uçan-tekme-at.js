const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ["https://thumbs.gfycat.com/AgileFlatGourami-size_restricted.gif"];

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Uçan Tekme Atıldı!`)
        .setColor("0x36393e")
        .setFooter(`Boş Durmıyacaksın Heralde ${member}`, message.author.avatarURL())
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["uçan-tekme"],
    permLevel: 0
   };
   
  exports.help = {
    name: 'uçan-tekme-at',
    description: 'Etiketlediniz Kisiye uçan-tekme Atar.',
    usage: 'uçan-tekme-at'
   }