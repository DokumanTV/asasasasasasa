const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    let replies = ('http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif', 'https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/s1600/kemal_sunal_sener_sen_tokat.gif', '', 'https://j.gifs.com/KdXVEQ.gif')

   let result = Math.floor((Math.random() * replies.length));
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
        .setDescription(`${message.author} Tarafından ${member}'a Tokat Atıldı!`)
        .setColor("RANDOM")
        .setFooter(`Boş Durmıyacaksın Heralde Sende Çak`, message.author.avatarURL())
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
    usage: 'yumruk-at'
   }