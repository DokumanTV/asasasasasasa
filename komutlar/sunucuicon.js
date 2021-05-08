const Discord = require('discord.js');
//AntiCode
exports.run = async(client, message) => {
  if (!message.guild) {
    
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor("RED")
  .addField("Uyarı","Bu Komutu Dm De Kullanamasın !");
    
  return message.author.send(ozelmesajuyari);
  }
const swico = new Discord.MessageEmbed()
.setColor('GREEN')
.addField('Sunucu İcon', `[Haraketsiz Göster](${message.guild.iconURL ({dynamic: false, size: 1024, format: 'png'})})`)
.setImage(`${message.guild.iconURL ({dynamic: true, size: 1024, format: 'png'})}`)
.setFooter(`DökümanBotFunny | Sunucu İcon`)
message.channel.send(swico)
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['swico', 'icon'],
permLevel: 0
};

exports.help = {
name: 'swico',
description: 'sw icon',
usage: 'swico' };