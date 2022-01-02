const Discord = require("discord.js")
exports.run = (client, message) => {
  const guildArray = client.guilds.cache.array()
  
    const embed = new Discord.MessageEmbed();
    const guilds = guildArray.slice(0,25);

embed.setColor('#ff0000')
.setTitle("👑 AİLEMİZ 👑")
.setDescription(`📑 Toplam Sunucu: **${client.guilds.cache.size}**\n \n🎭 Toplam Kullanıcı: **${client.users.cache.size}**\n \n🌋 Toplam Kanal: **${client.channels.cache.size}**`)
.setTimestamp()
.setFooter("Discord")

    message.channel.send({embed: embed});
  }
exports.conf = {
  aliases: []
};

exports.help = {
    name: "asasu"
};