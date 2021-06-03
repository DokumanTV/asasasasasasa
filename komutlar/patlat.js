const sıfırlama1 = new Discord.MessageEmbed()
  .setColor('BLACK')
.setTitle(`${client.user.username} | Oto Rol Sistemi!`)  
.setDescription(`${kanalMesaj} \n`)
   qdb.delete(`otorolkanali_${message.guild.id}`) 
  const sıfırlama2 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(`${rolMesaj} \n`)
   qdb.delete(`otorol_${message.guild.id}`) 
  const sıfırlama3 = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setDescription(`${yazıMesaj} \n`)
  .setFooter(`${client.user.tag} | Oto Rol Sistemi!`)
   qdb.delete(`otorolyazi_${message.guild.id}`) 
  message.channel.send(sıfırlama1)
message.channel.send(sıfırlama2)
return message.channel.send(sıfırlama3)
  
  }
  if(args[0] === "yardım"){
      const embedimsi = new Discord.MessageEmbed()
    .setColor('#000000')
    .setAuthor(`${client.user.username} Otorol Paneli!`)
      .setDescription(`
    **otorol ayarla #kanal #rol**
    Otorol kanalını ve rolünü ayarlarsınız
    
    **otorol yazı <yazınız>**
    Otorol yazısını ayarlarsınız
    
    **otorol sıfırla**
    Otorol veritabanını sıfırlarsınız 
    `)
    .setFooter(client.user.tag)
    message.channel.send(embedimsi)
}
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'otorol',
 description: 'otorol işte aw',
 usage: 'otorol'
};