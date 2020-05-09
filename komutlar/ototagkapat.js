const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args, member) => {
     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('<a:volantisred:706940680458600541> Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
  let otorol= db.fetch(`ototag_${message.guild.id}`)
  
  if(!otorol) {
      message.channel.send(`<a:volantisred:706940680458600541> Bu sunucuda ototag ayarlanmamış.`)
      return
    } 
    db.delete(`ototag_${message.guild.id}`)
    db.delete(`ototagKanal_${message.guild.id}`)
    message.channel.send(`<a:volantiskabul:706940681448587479> Ototag sistemi başarıyla kapatıldı.`)
		  	  const embed = new Discord.RichEmbed()
  .setDescription(`<a:volantiskabul:706940681448587479> Ototag Sistemi Başarıyla Kapatıldı. Tag Sıfırlandı.` )
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send({ embed });
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ototag kapat'],
  permLevel: 0
};

exports.help = {
  name: 'ototagkapat',
  description: 'nblm',
  usage: 'ototag'
};