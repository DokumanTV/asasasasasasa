const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**`)
  const link = `https://habbofont.net/font/steampunk/${yazi}.gif`
  .replace(' ', '+')

  
  const logo = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("YELLOW")
  .setImage(link)
  .setFooter('Logo Oluşturuldu')
  message.channel.send(logo)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'yazı-altın',
    description: 'Yazdığınız yazıyı altın logoyla değiştirir',
    usage: 'altın'
}