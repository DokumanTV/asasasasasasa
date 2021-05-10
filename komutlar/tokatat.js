const ayarlar = require('../ayarlar.json')
const Discord = require('discord.js')
exports.run = async (bot, message, args,db) => {

  
   let member = message.mentions.members.first()
   if(!member)return message.channel.send(':no_entry_sign: Birini Etiketle!')

    let gifembed = new Discord.MessageEmbed()
    .setImage("http://4.bp.blogspot.com/-Cdrk6ce21MM/VdCr1HRNkWI/AAAAAAAAEuc/txEqvYl-A_8/s1600/KEMAL_SUNAL_PATRONUN_KARISINA_TOKAT.gif", "https://4.bp.blogspot.com/-WfzGkNhjFIE/Vi-vwoWklXI/AAAAAAAAPCc/HXSnXtEMGs0/s1600/kemal_sunal_sener_sen_tokat.gif", "https://media1.tenor.com/images/19aa97d3f7b751c3551f3a2a9b03f2dd/tenor.gif", "https://j.gifs.com/KdXVEQ.gif")
        .setDescription(`${message.author} Tarafından ${member}'a Tokat Atıldı!`)
        .setColor("RANDOM")
        .setFooter(`Boş Durmıyacaksın Heralde Sende Çak`, message.author.avatarURL())
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