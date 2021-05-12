const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Yapacağım logonun ismini yazınız...**`)
  const link = `https://flamingtext.com/net-fu/proxy_form.cgi?script=shrek-logo&text=${yazi}&_loc=generate&imageoutput=true`
  .replace(' ', '+')

  
  const logo = new Discord.MessageEmbed()
  .setTitle("Yazı")
  .setColor("RANDOM")
  .setImage(link)
  .setFooter('Yazı Oluşturuldu')
  message.channel.send(logo)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'yazı-shrek',
    description: 'Yazdığınız Yazı everest logoyla değiştirir',
    usage: 'everest'
}