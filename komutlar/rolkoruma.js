const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async(client, message, args) => {
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın')
      let kanal = message.mentions.channels.first() || args[0]
      if(!kanal) return message.channel.send('Rol koruma log kanalını belirtmelisin')
      data.set(`rolk_${message.guild.id}`, kanal.id)
      message.channel.send('Rol koruma sistemi aktif edildi, log kanalı <#'+kanal+'> Olarak ayarlandı.')

      if(args[0] === 'kapat') {
        if(!data.fetch(`rolk_${message.guild.id}`)) message.channel.send('Rol koruma sistemi aktif edilmemiş.')
        data.delete(`rolk_${message.guild.id}`)
        message.channel.send('Rol koruma sistemi kapatıldı, log kanalı sıfırlandı')
      }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases:['rolkoruma'],
  permlevel: 0
};

exports.help = {
  name: "rol-koruma",
  description: 'Rol koruma sistemini açarsınız.',
  usage: 'rol-koruma'
}
